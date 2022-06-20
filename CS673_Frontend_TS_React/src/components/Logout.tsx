import * as React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { SimpleButtonLogout } from '../styles/styles'
import { Logout as LogoutButton } from '@mui/icons-material'

const Logout: React.FC = () => {
  const { logout } = useAuth0()

  return (
    <SimpleButtonLogout
      onClick={() => logout({ returnTo: window.location.origin })}
    >
      <LogoutButton />
    </SimpleButtonLogout>
  )
}

export default Logout
