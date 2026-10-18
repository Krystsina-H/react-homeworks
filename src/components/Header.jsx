import { Typography } from 'antd'
const { Title } = Typography

const Header = () => {
  return (
    <Title level={1} style={{ margin: 0 }}>
      Мой ToDo-лист
    </Title>
  )
}
export default Header
