import './App.css'
import { Routes, Route } from 'react-router'
import HomePage from './pages/HomePage'
import PaginationPage from './pages/PaginationPage'
import InfinitePage from './pages/InfinitePage'

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/pagination" element={<PaginationPage />} />
      <Route path="/infinite" element={<InfinitePage />} />
    </Routes>
  )
}
export default App
