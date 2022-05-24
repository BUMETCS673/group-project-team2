import React from 'react'
import { NavLink } from 'react-router-dom'
import Logout from './Logout'

export const Navbar: React.FC = () => (
  <nav>
    <div className="nav-wrapper cyan darken-1 px1">
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
    </div>
  </nav>
)
