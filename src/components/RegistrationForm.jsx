import { useForm, Controller } from 'react-hook-form'
import { Button, DatePicker, Form, Input, Modal, Radio } from 'antd'
import { useState } from 'react'

const RegistrationForm = () => {
  const [submittedData, setSubmittedData] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const {
    control,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm({
    defaultValues: {
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
      birthDate: null,
      gender: '',
      phone: '',
    },
    mode: 'onBlur',
  })
  const onSubmit = (data) => {
    const result = {
      ...data,
      birthDate: data.birthDate.format('YYYY-MM-DD'),
    }

    setSubmittedData(result)
    setIsModalOpen(true)
  }
  return (
    <>
      <Form
        layout="vertical"
        onFinish={handleSubmit(onSubmit)}
        style={{
          maxWidth: 500,
          width: '100%',
          margin: '40px auto',
          padding: 24,
        }}
      >
        <Controller
          name="username"
          control={control}
          rules={{
            required: 'Введите имя пользователя',
          }}
          render={({ field }) => (
            <Form.Item
              label="Имя пользователя"
              validateStatus={errors.username ? 'error' : ''}
              help={errors.username?.message}
            >
              <Input {...field} placeholder="Введите имя" />
            </Form.Item>
          )}
        />
        <Controller
          name="password"
          control={control}
          rules={{
            required: 'Введите пароль',
            minLength: {
              value: 6,
              message: 'Пароль должен содержать минимум 6 символов',
            },
            pattern: {
              value: /[A-ZА-ЯЁ]/,
              message: 'Добавьте хотя бы одну заглавную букву',
            },
          }}
          render={({ field }) => (
            <Form.Item
              label="Пароль"
              validateStatus={errors.password ? 'error' : ''}
              help={errors.password?.message}
            >
              <Input {...field} placeholder="Введите пароль" />
            </Form.Item>
          )}
        />
        <Controller
          name="confirmPassword"
          control={control}
          rules={{
            required: 'Повторите пароль',
            validate: (value) =>
              value === getValues('password') || 'Пароли не совпадают',
          }}

          render={({ field }) => (
            <Form.Item
              label="Подтверждение пароля"
              validateStatus={errors.confirmPassword ? 'error' : ''}
              help={errors.confirmPassword?.message}
            >
              <Input {...field} placeholder="Повторите пароль" />
            </Form.Item>
          )}
        />
        <Controller
          name="birthDate"
          control={control}
          rules={{
            required: 'Выберите дату рождения',
          }}
          render={({ field }) => (
            <Form.Item
              label="Дата рождения"
              validateStatus={errors.birthDate ? 'error' : ''}
              help={errors.birthDate?.message}
            >
              <DatePicker
                value={field.value}
                format="YYYY-MM-DD"
                placeholder="Выберите дату"
                onChange={(date) => field.onChange(date)}
                onBlur={field.onBlur}
              />
            </Form.Item>
          )}
        />
        <Controller
          name="gender"
          control={control}
          rules={{
            required: 'Выберите пол',
          }}
          render={({ field }) => (
            <Form.Item
              label="Пол"
              validateStatus={errors.gender ? 'error' : ''}
              help={errors.gender?.message}
            >
              <Radio.Group
                {...field}
                name="gender"
                options={[
                  { value: 'female', label: 'Женский' },
                  { value: 'male', label: 'Мужской' },
                ]}
              />
              <Controller
                name="phone"
                control={control}
                rules={{
                  required: 'Введите номер телефона',
                }}
                render={({ field }) => (
                  <Form.Item
                    label="Телефон"
                    validateStatus={errors.phone ? 'error' : ''}
                    help={errors.phone?.message}
                  >
                    <Input
                      {...field}
                      type="tel"
                      placeholder="+375-29-111-11-11"
                    />
                  </Form.Item>
                )}
              />
            </Form.Item>
          )}
        />
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form>
      <Modal
        title="Регистрация прошла успешно"
        open={isModalOpen}
        onOk={() => setIsModalOpen(false)}
        onCancel={() => setIsModalOpen(false)}
      >
        <p>Пользователь успешно зарегистрирован.</p>
        <pre
          style={{
            padding: 12,
            background: '#f5f5f5',
            borderRadius: 6,
            overflowX: 'auto',
          }}
        >
          {JSON.stringify(submittedData, null, 2)}
        </pre>
      </Modal>
    </>
  )
}
export default RegistrationForm
