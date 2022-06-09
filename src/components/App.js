import {useState, useEffect} from 'react'
import '../css/App.css';
import {Table, Tag, Space, Button,} from 'antd'
import {EditOutlined } from '@ant-design/icons'
import FormHeader from './form'
import FormModal from './modal'
// import {source} from '../api/index'
function App() {

  const columns = [
    {
      title: 'delete',
      dataIndex: 'delete',
      key: 'delete',
      render: (_, e) => <Button onClick={_ =>deleteItem(e)}> delete</Button>,
    },
    {
      title: 'Applicant',
      dataIndex: 'Applicant',
      key: 'Applicant',
    },
    {
      title: 'Descripition',
      dataIndex: 'descripition',
      key: 'descripition',
      width: 250,

    },
    {
      title: 'Submitted on',
      key: 'Submission',
      width: 250,
      dataIndex: 'Submission',
      render: e => <span>{e}</span>
    },
    {
      title: 'Score',
      key: 'Score',
      render: (_, record) => (
        <Space size="middle">
          <span> {record.Score}</span>
          <EditOutlined />
        </Space>
      ),
    },
  ];
  const [data, setData] = useState([
    {
      key: '1.223',
      Applicant: 'John Brown',
      Score: 32,
      Submission: 'New York No. 1 Lake Park',
      descripition:'nideveloper',
    },
    {
      key: '2123',
      Applicant: 'John Brown',
      Score: 32,
      Submission: ' York No. 1 Lake Park',
      descripition:'nideveloper',
    },
    {
      key: '311',
      Applicant: 'John Brown',
      Score: 32,
      Submission: 'cgz York No. 1 Lake Park',
      descripition:'nideveloper',
    },
    
  ]);
  const [result, setResult] = useState(data)
  const [newData, setNewdata] = useState([])
  const [isModalVisible, setIsModalVisible] = useState(false)
  const pushNewData = e => {
    console.log(data)
    data.push(e)
    setResult([...data])
    setIsModalVisible(false)
  }
  const deleteItem = ele => {
    setData(data.filter(e => e.key != ele.key))
  }
  useEffect(_ => {
    setResult([...data])
  }, [data])
  return (
    <div className="App">
      <FormHeader setResult = {setResult} source={data} setIsModalVisible={setIsModalVisible} />
      <Table columns={columns} dataSource={result} style={{height: '800px', marginTop: '40px'}} />
      <FormModal isModalVisible={isModalVisible} setIsModalVisible={setIsModalVisible} pushNewData={pushNewData}></FormModal>
    </div>
  );
}

export default App;
