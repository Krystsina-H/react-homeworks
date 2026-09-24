import { Table, Tag, Button, Popconfirm } from 'antd'

const TaskTable = ({ tasks, handleDelete }) => {
  const columns = [
    {
      title: 'Задача',
      dataIndex: 'title',
      key: 'title',
    },
    {
      title: 'Статус',
      dataIndex: 'status',
      key: 'status',
      render: (status) => {
        const color = status === 'Выполнено' ? 'green' : 'blue'
        return <Tag color={color}>{status}</Tag>
      },
    },
    {
      title: 'Действия',
      key: 'actions',
      render: (_, item) => (
        <Popconfirm
          title="Удаление задачи"
          description="Вы действительно хотите удалить задачу?"
          okText="Да"
          cancelText="Отмена"
          onConfirm={() => handleDelete(item.id)}
        >
          <Button danger>Удалить</Button>
        </Popconfirm>
      ),
    },
  ]

  return (
    <>
      <Table dataSource={tasks} columns={columns} rowKey="id" />
    </>
  )
}
export default TaskTable
//выводит задачи;подтверждение перед удалением
