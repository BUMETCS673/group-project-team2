import * as React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { StyledPrimaryBtn } from '../styles/styles';
interface LoginProps {
  readonly menu?: boolean,
}
const Login: React.FC<LoginProps> = (props):JSX.Element => {
  const { loginWithRedirect } = useAuth0()

  return <StyledPrimaryBtn {...props} onClick={() => loginWithRedirect()}>Login</StyledPrimaryBtn>
}

export default Login
