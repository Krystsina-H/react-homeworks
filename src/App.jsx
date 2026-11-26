import './App.css'
import { Route, Routes } from 'react-router'
import LoginPage from './pages/LoginPage'
import TodoPage from './pages/TodoPage'
import NotFount from './pages/NotFound'
import PrivateRoute from './components/PrivatRoute'

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route element={<PrivateRoute />}>
        <Route path="/todos" element={<TodoPage />} />
      </Route>
      <Route path="*" element={<NotFount />} />
    </Routes>
  )
}
export default App
