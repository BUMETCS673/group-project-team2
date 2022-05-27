import React from 'react'
import {  StyledNavLink, MenuLinkGroup} from '../styles/styles'
import UserMenuItem from './UserMenuItem'


const NavMenuItems= () => (
    <MenuLinkGroup>
        <StyledNavLink to="/" exact >Landing</StyledNavLink>
          <StyledNavLink to="/home">Home</StyledNavLink>
          <StyledNavLink to="/about">About</StyledNavLink>
          <UserMenuItem/>
    </MenuLinkGroup>
)
export default NavMenuItems