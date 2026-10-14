import { useEffect, useState } from 'react'
import {
  Alert,
  Button,
  Card,
  Empty,
  Form,
  Input,
  List,
  Popconfirm,
  Spin,
  Typography,
} from 'antd'
import { createItem, deleteItem, getItems } from '../services/itemsService'

const { Paragraph, Title } = Typography

export default function ItemsPage() {
  const [form] = Form.useForm()
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)
  const [submitting, setSubmitting] = useState(false)
  const [deletingId, setDeletingId] = useState(null)
  const [error, setError] = useState('')

  useEffect(() => {
    const loadItems = async () => {
      try {
        setLoading(true)
        setError('')

        const data = await getItems()
        setItems(data.slice(0, 10))
      } catch (requestError) {
        console.error(requestError)
        setError('Не удалось загрузить список. Попробуйте ещё раз.')
      } finally {
        setLoading(false)
      }
    }

    loadItems()
  }, [])

  const handleSubmit = async ({ title }) => {
    try {
      setSubmitting(true)
      setError('')

      const newItem = await createItem({
        title: title.trim(),
        body: '',
        userId: 1,
      })

      setItems((currentItems) => [newItem, ...currentItems])
      form.resetFields()
    } catch (requestError) {
      console.error(requestError)
      setError('Не удалось создать элемент. Попробуйте ещё раз.')
    } finally {
      setSubmitting(false)
    }
  }

  const handleDelete = async (id) => {
    try {
      setDeletingId(id)
      setError('')

      await deleteItem(id)

      setItems((currentItems) => currentItems.filter((item) => item.id !== id))
    } catch (requestError) {
      console.error(requestError)
      setError('Не удалось удалить элемент. Попробуйте ещё раз.')
    } finally {
      setDeletingId(null)
    }
  }

  return (
    <main className="items-page">
      <section className="items-page__content">
        <header className="items-page__header">
          <Title level={1}>Список элементов</Title>
          <Paragraph type="secondary">
            Данные загружаются через единый экземпляр Axios
          </Paragraph>
        </header>

        <Card title="Добавить элемент" className="items-page__card">
          <Form
            form={form}
            layout="vertical"
            onFinish={handleSubmit}
            className="items-form"
          >
            <Form.Item
              name="title"
              label="Название"
              className="items-form__field"
              rules={[
                { required: true, message: 'Введите название элемента.' },
                { whitespace: true, message: 'Название не может быть пустым.' },
              ]}
            >
              <Input placeholder="Например, новая публикация" allowClear />
            </Form.Item>

            <Form.Item className="items-form__button">
              <Button type="primary" htmlType="submit" loading={submitting}>
                Создать
              </Button>
            </Form.Item>
          </Form>
        </Card>

        {error && (
          <Alert
            type="error"
            message={error}
            showIcon
            closable
            onClose={() => setError('')}
          />
        )}

        <Card title="Публикации" className="items-page__card">
          {loading ? (
            <div className="items-page__loading">
              <Spin size="large" />
              <Typography.Text type="secondary">
                Загрузка данных…
              </Typography.Text>
            </div>
          ) : (
            <List
              itemLayout="horizontal"
              dataSource={items}
              locale={{
                emptyText: <Empty description="Список пуст" />,
              }}
              renderItem={(item) => (
                <List.Item
                  actions={[
                    <Popconfirm
                      key="delete"
                      title="Удалить элемент?"
                      description="Это действие нельзя отменить."
                      okText="Удалить"
                      cancelText="Отмена"
                      okButtonProps={{ danger: true }}
                      onConfirm={() => handleDelete(item.id)}
                    >
                      <Button danger loading={deletingId === item.id}>
                        Удалить
                      </Button>
                    </Popconfirm>,
                  ]}
                >
                  <List.Item.Meta
                    title={item.title}
                    description={item.body || 'Описание отсутствует'}
                  />
                </List.Item>
              )}
            />
          )}
        </Card>
      </section>
    </main>
  )
}
