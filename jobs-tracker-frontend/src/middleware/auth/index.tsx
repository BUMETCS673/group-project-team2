import { Auth0Provider } from '@auth0/auth0-react'
import React from 'react'
import { AxiosInterceptorProvider } from './AxiosInterceptorProvider'
import { CommonAuthProvider, useAuth } from './CommonAuthProvider'

type AuthProviderProps = { children: React.ReactNode }

export { useAuth }

export const AuthProvider = ({ children }: AuthProviderProps) => {
  return (
    <Auth0Provider
      domain="dev-bhv3f-9t.us.auth0.com"
      clientId="uPevbJui7fFgPR6Kr77GvgdoJasVG5nl"
      redirectUri="http://localhost:3000/home"
      audience="https://dev-bhv3f-9t.us.auth0.com/api/v2/"
    >
    <AxiosInterceptorProvider>
    <CommonAuthProvider>
    {children}
    </CommonAuthProvider>
    </AxiosInterceptorProvider>
    </Auth0Provider>
    )
  }