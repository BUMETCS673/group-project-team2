import { Auth0Provider } from '@auth0/auth0-react'
import React from 'react'
import { AxiosInterceptorProvider } from './AxiosInterceptorProvider'
import { CommonAuthProvider, useAuth } from './CommonAuthProvider'

type AuthProviderProps = { children: React.ReactNode }

export { useAuth }

export const AuthProvider = ({ children }: AuthProviderProps) => {
  return (
    <Auth0Provider
      domain="dev-yrw0t0fy.us.auth0.com"
      clientId="lqxtKBdDoUHJjdAKOTTQAFWdN5SnFkvc"
      // redirectUri="http://localhost:3000/home"
      redirectUri="https://job-tracker-react-ts-go.vercel.app/home"
      audience="https://cs673-api-auth0.com"
    >
      <AxiosInterceptorProvider>
        <CommonAuthProvider>{children}</CommonAuthProvider>
      </AxiosInterceptorProvider>
    </Auth0Provider>
  )
}
