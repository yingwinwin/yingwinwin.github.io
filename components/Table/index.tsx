import styles from './index.less';
import Table from './Table';

const dataSource = [
  {
    key: '1',
    name: '胡彦斌',
    age: 32,
    address: '西湖区湖底公园1号',
  },
  {
    key: '2',
    name: '胡彦祖',
    age: 42,
    address: '西湖区湖底公园2号',
  },
  {
    key: '3',
    name: '胡彦文',
    age: 52,
    address: '西湖区湖底公园3号',
  },
  {
    key: '4',
    name: '胡彦武',
    age: 62,
    address: '西湖区湖底公园4号',
  },
];

const columns = [
  {
    title: '姓名',
    dataIndex: 'name',
    key: 'name',
    width: 200,
    render: (name, item) => {
      return <p>{name + item.age}</p>
    }
  },
  {
    title: '年龄',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: '住址',
    dataIndex: 'address',
    key: 'address',
  },
];


export default function IndexPage() {
  return (
    <Table columns={columns} dataSource={dataSource} rowKey="name" />
  );
}
