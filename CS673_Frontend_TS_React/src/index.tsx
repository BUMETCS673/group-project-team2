import React from 'react'
import { createRoot } from 'react-dom/client'
import {Provider} from 'react-redux' 
import {store} from './redux/app/store'

import './index.css'

import App from './App'
import { AuthProvider } from './middleware/auth'
const container = document.getElementById('root')
const root = createRoot(container) 

root.render(
  <AuthProvider>
    <React.StrictMode>
      <Provider store = {store}>
        <App />
      </Provider>
      
    </React.StrictMode>
  </AuthProvider>
)
