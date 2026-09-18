import './App.css'
import { Routes, Route } from 'react-router'
import { useState, lazy, Suspense } from 'react'
import NotFoundPage from './pages/NotFoundPage'
import HomePage from './pages/HomePage'
import ProductPage from './pages/ProductPage'
import PrivateRoute from './components/PrivateRoute'
import Layout from './components/Layout'
const CatalogPage = lazy(() => import('./pages/CatalogPage'))
const ProfilePage = lazy(() => import('./pages/ProfilePage'))

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
          <Route
            path="/catalog"
            element={
              <Suspense fallback={<h1>Идет загрузка...</h1>}>
                <CatalogPage />{' '}
              </Suspense>
            }
          />
          <Route path="/product/:id" element={<ProductPage />} />

          <Route
            path="/profile"
            element={
              <Suspense fallback={<h1>Идет загрузка...</h1>}>
                <PrivateRoute isAuthenticated={isAuthenticated}>
                  <ProfilePage />
                </PrivateRoute>
              </Suspense>
            }
          />

          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </>
  )
}
export default App
