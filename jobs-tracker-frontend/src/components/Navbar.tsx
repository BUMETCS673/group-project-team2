import React, {useState} from 'react'
import { NavLink } from 'react-router-dom'
import { StyledNav, Logo, Collapse, StyledMenuButton, MenuLinkGroup,  StyledNavLink, StyledSidebar } from '../styles/styles';
import followUpLogo from '../assets/images/logo.png'
import Logout from './Logout'
import { BiMenu } from "react-icons/bi";

export const Navbar: React.FC = () => {
  const [toggleSidebar, setToggleSidebar] = useState(false);
  return (
    <StyledNav >
      <NavLink to="/" className="brand-logo">
        <Logo src = {followUpLogo} alt = {'FollowUp logo'}/>
      </NavLink>
      <StyledMenuButton onClick = {() => setToggleSidebar(!toggleSidebar)}>
        <BiMenu size={40} />
      </StyledMenuButton>
      <Collapse >
        <MenuLinkGroup>
          
            <StyledNavLink to="/" exact >Landing</StyledNavLink>
          
          
            <StyledNavLink to="/home">Home</StyledNavLink>
          

          
            <StyledNavLink to="/about">About</StyledNavLink>
          

          
            
          
        </MenuLinkGroup>
        <Logout />
      </Collapse>
      <StyledSidebar toggleSidebar = {toggleSidebar}>
          <StyledNavLink to="/" exact >Landing</StyledNavLink>
          
          
          <StyledNavLink to="/home">Home</StyledNavLink>
        

        
          <StyledNavLink to="/about">About</StyledNavLink>

      </StyledSidebar>
      
    </StyledNav>
    
  )
}
  
    

