import React from 'react'
import { createRoot } from 'react-dom/client'
import { Auth0Provider } from '@auth0/auth0-react'

import './index.css'

import App from './App'
const container = document.getElementById('root')
// if (container === null) throw new Error('Root element not found')
const root = createRoot(container) // createRoot(container!) if you use TypeScript

root.render(
  <Auth0Provider
    domain="dev-yrw0t0fy.us.auth0.com"
    clientId="lqxtKBdDoUHJjdAKOTTQAFWdN5SnFkvc"
    // redirectUri={window.location.origin}
    // redirectUri={window.location.origin}
    redirectUri="http://localhost:3000/home"
    audience="https://cs673-api-auth0.com"
  >
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Auth0Provider>
)
