import './App.css'
import { Layout, Typography } from 'antd'
import TaskPage from './pages/TaskPage'

const { Header, Footer, Content } = Layout
const { Title } = Typography

const App = () => {
  return (
    <Layout>
      <Header>
        <Title level={2} style={{ color: 'white', margin: 0 }}>
          Список задач:
        </Title>
      </Header>
      <Content>
        <TaskPage />
      </Content>
      <Footer>Учебный проект с использованием antd</Footer>
    </Layout>
  )
}
export default App
