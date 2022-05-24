import * as React from 'react'
import { useAuth0 } from '@auth0/auth0-react'

const Logout: React.FC = () => {
  const { logout } = useAuth0()

  return (
    <div onClick={() => logout({ returnTo: window.location.origin })}>
      Logout
    </div>
  )
}

export default Logout
