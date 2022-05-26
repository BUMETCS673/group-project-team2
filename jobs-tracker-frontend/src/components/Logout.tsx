import * as React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { SimpleButton } from '../styles/styles'

const Logout: React.FC = () => {
  const { logout } = useAuth0()

  return (
    <SimpleButton onClick={() => logout({ returnTo: window.location.origin })}>
      Logout
    </SimpleButton>
  )
}

export default Logout
