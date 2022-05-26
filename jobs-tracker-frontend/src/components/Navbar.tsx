import React from 'react'
import { NavLink } from 'react-router-dom'
import { StyledNav } from '../styles/styles';
import Logout from './Logout'

export const Navbar: React.FC = () => (
  
    <StyledNav >
      <NavLink to="/" className="brand-logo">
        Job Tracker
      </NavLink>
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
    </StyledNav>
  
)
