import * as React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { SimpleButtonLogin } from '../styles/styles'
interface LoginProps {
  readonly menu?: boolean
}
const Login: React.FC<LoginProps> = (props): JSX.Element => {
  const { loginWithRedirect } = useAuth0()

  return (
    <SimpleButtonLogin {...props} onClick={() => loginWithRedirect()}>
      Login / Signup
    </SimpleButtonLogin>
  )
}

export default Login
