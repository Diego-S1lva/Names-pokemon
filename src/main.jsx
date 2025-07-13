import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import AppPages from './components/pages/AppPages'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppPages/>
  </StrictMode>,
)
