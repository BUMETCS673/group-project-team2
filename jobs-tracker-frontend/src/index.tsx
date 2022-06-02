import React from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'

import App from './App'
import { AuthProvider } from './middleware/auth'
const container = document.getElementById('root')
// if (container === null) throw new Error('Root element not found')
const root = createRoot(container) // createRoot(container!) if you use TypeScript

root.render(
  <AuthProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </AuthProvider>
)
