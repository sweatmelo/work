import React, { useState, useEffect } from 'react'
import '../css/App.css';
import { DatePicker, Form, Input, Modal,InputNumber } from 'antd'
function FormModal({isModalVisible, setIsModalVisible, pushNewData}) {
  const [form] = Form.useForm();

  const [newData, setNewdata] = useState({})
  // const [isModalVisible, setIsModalVisible] = useState(false)
  useEffect(_ => {
    if(Object.keys(newData).length) {
      pushNewData(newData)
      form.resetFields()
    }
    
  }, [newData])
  const onFormLayoutChange = () => {
    setNewdata({})
    const date = form.getFieldValue('date').format("dddd, MMMM Do YYYY, h:mm:ss a")
    const descripition = form.getFieldValue('des')
    const Score = form.getFieldValue('score')
    const Applicant = form.getFieldValue('Applicant')
    setNewdata({descripition, Submission: date, Score, Applicant, key: Math.random() * 10000})
  };
  const handleChange = () => {
    console.log('trigger')
    console.log(form.getFieldValue('lucy'))
  }
  const onHandler = tag => {
    !tag && setIsModalVisible(false)
    tag &&  onFormLayoutChange()
  }
 
  return (
    <Modal title="Add" 
      visible={isModalVisible} 
      maskClosable={false}
      onOk={_ => onHandler(true)} onCancel={_ => onHandler(false)}>

       <Form
        layout={'horizontal'}
        form={form}
    >
      
      <Form.Item label="Descipition" name="des">
        <Input placeholder="" />
      </Form.Item>

      <Form.Item label="Applicant" name="Applicant">
        <Input placeholder="" />
      </Form.Item>

      <Form.Item label="Score" name="score">
        <InputNumber />
      </Form.Item>

      <Form.Item label="Date" name="date">
      <DatePicker  />
      </Form.Item>

      
    </Form>
      </Modal>
  );
}

export default FormModal;
