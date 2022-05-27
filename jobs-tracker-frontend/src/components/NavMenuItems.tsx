import React from 'react'
import {  StyledNavLink, MenuLinkGroup} from '../styles/styles'
import Logout from './Logout'
import User from './User'


const NavMenuItems= () => (
    <MenuLinkGroup>
        <StyledNavLink to="/" exact >Landing</StyledNavLink>
          <StyledNavLink to="/home">Home</StyledNavLink>
          <StyledNavLink to="/about">About</StyledNavLink>
          <User/>
          <Logout />
    </MenuLinkGroup>
)
export default NavMenuItems