import React from 'react'
import { createRoot } from 'react-dom/client'
import {Provider} from 'react-redux' 
import {store} from './app/store'

import './index.css'

import App from './App'
import { AuthProvider } from './middleware/auth'
const container = document.getElementById('root')
// if (container === null) throw new Error('Root element not found')
const root = createRoot(container) // createRoot(container!) if you use TypeScript

root.render(
  <AuthProvider>
    <React.StrictMode>
      <Provider store = {store}>
        <App />
      </Provider>
      
    </React.StrictMode>
  </AuthProvider>
)
