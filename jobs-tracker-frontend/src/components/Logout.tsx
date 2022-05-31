import * as React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { SimpleButtonLogout } from '../styles/styles'

const Logout: React.FC = () => {
  const { logout } = useAuth0()

  return (
    <SimpleButtonLogout
      onClick={() => logout({ returnTo: window.location.origin })}
    >
      Logout
    </SimpleButtonLogout>
  )
}

export default Logout
