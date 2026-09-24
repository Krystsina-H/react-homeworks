import { Button, Form, Input } from 'antd'

const TaskForm = ({ handleAdd }) => {
  const [form] = Form.useForm()

  const onFinish = (values) => {
    handleAdd(values.title.trim())
    form.resetFields() //Для того,чтобы очистить строку вызываем useForm выше
  }
  return (
    <Form
      form={form}
      name="task-form"
      style={{ maxWidth: 600 }}
      onFinish={onFinish}
      autoComplete="off"
    >
      <Form.Item
        label="Задача"
        name="title"
        rules={[
          {
            required: true,
            message: 'Введите название задачи',
          },
        ]}
      >
        <Input placeholder="Введите название задачи" />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit">
          Добавить
        </Button>
      </Form.Item>
    </Form>
  )
}

export default TaskForm
