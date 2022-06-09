import React, { useState } from 'react'
import '../css/App.css';
import { Button, Form, Input, Select, } from 'antd'
const { Option } = Select
function FormHeader({setResult, source, setIsModalVisible}) {
  const [form] = Form.useForm();
  // const [formLayout, setFormLayout] = useState('inline');

  const onFormLayoutChange = (value,all) => {
    // debugger
    console.log(value, all)
    const {sortOrder, sortBy, des} = all
    // console.log(object)
    // if(value.des)
    setResult([...source.filter(e => (e[sortBy]+'').includes(value.des || ''))])
  };
  const handleChange = () => {
    // console.log('trigger')
    // console.log(form.getFieldValue('lucy'))
  }
 
  return (
    <Form
      layout={'inline'}
      form={form}
      onValuesChange={onFormLayoutChange}
    >
      <Form.Item label="Sort order" name="sortOrder">
        <Select defaultValue="Ascending"  style={{ width: 120 }} onChange={handleChange}>
          <Option value="Ascending">Ascending</Option>
          <Option value="Descending">Descending</Option>
        </Select>
      </Form.Item>

      <Form.Item label="Sort by" name="sortBy" initialValue="Applicant">
        <Select defaultValue="Applicant" style={{ width: 120 }} onChange={handleChange}>
          <Option value="Applicant">Applicant</Option>
          <Option value="Submission">Submission</Option>
          <Option value="Score">Score</Option>
        </Select>
      </Form.Item>
      
      <Form.Item label="" name="des">
        <Input placeholder="Search" />
      </Form.Item>

      <Form.Item label="" >
        <Button type="primary" onClick={_ => setIsModalVisible(true)}>add</Button>
      </Form.Item>
    </Form>
  );
}

export default FormHeader;
