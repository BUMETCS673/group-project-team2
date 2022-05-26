import React from 'react'
import { NavLink } from 'react-router-dom'
import { StyledNav, Logo, Collapse, StyledMenuButton } from '../styles/styles';
import followUpLogo from '../assets/images/logo.png'
import Logout from './Logout'

export const Navbar: React.FC = () => (
  
    <StyledNav >
      <NavLink to="/" className="brand-logo">
        <Logo src = {followUpLogo} alt = {'FollowUp logo'}/>
      </NavLink>
      <StyledMenuButton>
        x
      </StyledMenuButton>
      <Collapse>
        <ul className="right hide-on-med-and-down">
          <li>
            <NavLink to="/">Landing</NavLink>
          </li>
          <li cy-data="home-nav-link">
            <NavLink to="/home">Home</NavLink>
          </li>

          <li>
            <NavLink to="/about">About</NavLink>
          </li>

          <li>
            <Logout />
          </li>
        </ul>
      </Collapse>
      
    </StyledNav>
  
)
