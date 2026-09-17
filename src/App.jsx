import './App.css'
import { Routes, Route } from 'react-router'
import { useState } from 'react'
import NotFoundPage from './pages/NotFoundPage'
import HomePage from './pages/HomePage'
import CatalogPage from './pages/CatalogPage'
import ProductPage from './pages/ProductPage'
import PrivateRoute from './components/PrivateRoute'
import ProfilePage from './pages/ProfilePage'
import Layout from './components/Layout'

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  function toggleAuth() {
    setIsAuthenticated((currentValue) => !currentValue)
  }

  return (
    <>
      <Routes>
        <Route
          element={
            <Layout
              isAuthenticated={isAuthenticated}
              onToggleAuth={toggleAuth}
            />
          }
        >
          <Route path="/" element={<HomePage />} />
          <Route path="/catalog" element={<CatalogPage />} />
          <Route path="/product/:id" element={<ProductPage />} />

          <Route
            path="/profile"
            element={
              <PrivateRoute isAuthenticated={isAuthenticated}>
                <ProfilePage />
              </PrivateRoute>
            }
          />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </>
  )
}
export default App
