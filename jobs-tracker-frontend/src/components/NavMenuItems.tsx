import { StyledNavLink, MenuLinkGroup } from '../styles/styles'
import Logout from './Logout'
import Login from './Login'
// import UserMenuItem from './UserMenuItem'
import { useAuth0 } from '@auth0/auth0-react'

const NavMenuItems = () => {
  const { user, isAuthenticated } = useAuth0()

  if (isAuthenticated && user)
    // NavBar with All Routes for Authenticated users
    return (
      <MenuLinkGroup>
        <div style={{ marginRight: '2rem' }}>{user.name}</div>

        <StyledNavLink to="/home">Home</StyledNavLink>
        <StyledNavLink to="/about">About</StyledNavLink>
        <StyledNavLink to="/" exact>
          Our Mission
        </StyledNavLink>
        <Logout />
        {/* <UserMenuItem/> */}
      </MenuLinkGroup>
    )

  return (
    // NavBar with Only Landing Page Route for UnAuthenticated users
    <MenuLinkGroup>
      <StyledNavLink to="/" exact>
        <Login />
      </StyledNavLink>
      {/* <StyledNavLink to="/home">Home</StyledNavLink>
      <StyledNavLink to="/about">About</StyledNavLink> */}
      {/* <UserMenuItem/> */}
    </MenuLinkGroup>
  )
}
export default NavMenuItems
