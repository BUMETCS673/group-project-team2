import { StyledNavLink, MenuLinkGroup } from '../../styles/styles'
import Logout from './Logout'
import Login from './Login'
import { Home,People,Rocket } from '@mui/icons-material'
import { useAuth0 } from '@auth0/auth0-react'

const NavMenuItems = () => {
  const { user, isAuthenticated } = useAuth0()

  if (isAuthenticated && user)
    // NavBar with All Routes for Authenticated users
    return (
      <MenuLinkGroup>
        <div style={{ marginRight: '2rem' }}>{user.name}</div>

        <StyledNavLink to="/home"><Home /></StyledNavLink>
        <StyledNavLink to="/about"><People /></StyledNavLink>
        <StyledNavLink to="/" exact><Rocket /></StyledNavLink>
        <Logout />
      </MenuLinkGroup>
    )

  return (
    // NavBar with Only Landing Page Route for UnAuthenticated users
    <MenuLinkGroup>
      <StyledNavLink to="/" exact>
        <Login />
      </StyledNavLink>
    </MenuLinkGroup>
  )
}
export default NavMenuItems
