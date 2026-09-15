import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ThemeProvider from './app/providers/ThemeProvider.jsx'
import App from './app/App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </StrictMode>
)
