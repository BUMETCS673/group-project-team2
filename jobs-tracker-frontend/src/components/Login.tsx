import * as React from 'react'
import { useAuth0 } from '@auth0/auth0-react'

const Login: React.FC = () => {
  const { loginWithRedirect } = useAuth0()

  return <button onClick={() => loginWithRedirect()}>Login</button>
}

export default Login
