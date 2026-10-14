import { useState } from 'react'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
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
import {
  createItem,
  deleteItem,
  getItemById,
  getItems,
} from '../services/itemsService'

const { Title } = Typography

export default function ItemsPage() {
  const [form] = Form.useForm()
  const [selectedId, setSelectedId] = useState(null)
  const queryClient = useQueryClient()

  const {
    data: items = [],
    isPending,
    isError,
    error,
    refetch,
    isFetching,
  } = useQuery({
    queryKey: ['items'],
    queryFn: getItems,
    select: (data) => data.slice(0, 10),
  })

  const selectedItemQuery = useQuery({
    queryKey: ['items', selectedId],
    queryFn: () => getItemById(selectedId),
    enabled: selectedId !== null,
  })
  const createMutation = useMutation({
    mutationFn: createItem,

    onSuccess: (newItem) => {
      form.resetFields()

      queryClient.setQueryData(['items'], (oldItems = []) => [
        newItem,
        ...oldItems,
      ])

      queryClient.invalidateQueries({
        queryKey: ['items'],
        exact: true,
        refetchType: 'none',
      })
    },
  })

  const deleteMutation = useMutation({
    mutationFn: deleteItem,
    onSuccess: (_data, deletedId) => {
      queryClient.setQueryData(['items'], (oldItems = []) =>
        oldItems.filter((item) => item.id !== deletedId)
      )

      if (selectedId === deletedId) {
        setSelectedId(null)
      }

      queryClient.invalidateQueries({
        queryKey: ['items'],
        exact: true,
        refetchType: 'none',
      })
    },
  })

  const handleSubmit = ({ title }) => {
    createMutation.mutate({
      title: title.trim(),
      body: '',
      userId: 1,
    })
  }

  const handleDelete = (id) => {
    deleteMutation.mutate(id)
  }

  return (
    <main className="items-page">
      <section className="items-page__content">
        <header className="items-page__header">
          <Title level={1}>Список элементов</Title>
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
              <Button
                type="primary"
                htmlType="submit"
                loading={createMutation.isPending}
              >
                Создать
              </Button>
            </Form.Item>
          </Form>
        </Card>

        {isError && (
          <Alert
            type="error"
            message="Не удалось загрузить список"
            description={error?.message}
            showIcon
          />
        )}

        {createMutation.isError && (
          <Alert
            type="error"
            message="Не удалось создать элемент"
            description={createMutation.error?.message}
            showIcon
          />
        )}

        {deleteMutation.isError && (
          <Alert
            type="error"
            message="Не удалось удалить элемент"
            description={deleteMutation.error?.message}
            showIcon
          />
        )}

        <Card
          title="Публикации"
          className="items-page__card"
          extra={
            <Button onClick={() => refetch()} loading={isFetching}>
              Обновить
            </Button>
          }
        >
          {isError ? null : isPending ? (
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
                      <Button
                        danger
                        loading={
                          deleteMutation.isPending &&
                          deleteMutation.variables === item.id
                        }
                      >
                        Удалить
                      </Button>
                    </Popconfirm>,
                  ]}
                >
                  <List.Item.Meta
                    title={
                      <Button
                        type="link"
                        onClick={() => setSelectedId(item.id)}
                      >
                        {item.title}
                      </Button>
                    }
                    description={item.body || 'Описание отсутствует'}
                  />
                </List.Item>
              )}
            />
          )}
        </Card>

        {selectedItemQuery.isPending && selectedId !== null && (
          <div className="items-page__loading">
            <Spin />
            <Typography.Text type="secondary">
              Загрузка выбранного элемента…
            </Typography.Text>
          </div>
        )}

        {selectedItemQuery.isError && (
          <Alert
            type="error"
            message="Не удалось загрузить элемент"
            description={selectedItemQuery.error?.message}
            showIcon
          />
        )}

        {selectedItemQuery.data && (
          <Card
            title={`Элемент №${selectedItemQuery.data.id}`}
            className="items-page__card"
          >
            <Title level={4}>{selectedItemQuery.data.title}</Title>
            <Typography.Paragraph>
              {selectedItemQuery.data.body || 'Описание отсутствует'}
            </Typography.Paragraph>
          </Card>
        )}
      </section>
    </main>
  )
}
