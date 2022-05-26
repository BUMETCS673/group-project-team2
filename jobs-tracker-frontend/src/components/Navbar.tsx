import React, {useState} from 'react'
import { StyledNav, Logo, Collapse, StyledMenuButton, MenuLinkGroup,  StyledNavLink, StyledSidebar, StyledCloseButton } from '../styles/styles';
import { IoCloseCircleOutline } from "react-icons/io5";
import followUpLogo from '../assets/images/logo.png'
import Logout from './Logout'
import { BiMenu } from "react-icons/bi";

export const Navbar: React.FC = () => {
  const [toggleSidebar, setToggleSidebar] = useState(false);
  return (
    <StyledNav >
      
      <Logo to="/" exact >
        <img src = {followUpLogo} alt = {'FollowUp logo'}/>
      </Logo>
      
      <StyledMenuButton onClick = {() => setToggleSidebar(!toggleSidebar)}>
        <BiMenu size={40} />
      </StyledMenuButton>
      <Collapse >
        <MenuLinkGroup>
          
            <StyledNavLink to="/" exact >Landing</StyledNavLink>
          
          
            <StyledNavLink to="/home">Home</StyledNavLink>
          

          
            <StyledNavLink to="/about">About</StyledNavLink>
          

          
            
            <Logout />
        </MenuLinkGroup>
        
      </Collapse>
      <StyledSidebar toggleSidebar = {toggleSidebar}>
          <StyledCloseButton onClick = {() => setToggleSidebar(!toggleSidebar)}>
            <IoCloseCircleOutline size = {35}/>
          </StyledCloseButton>
          <StyledNavLink to="/" exact >Landing</StyledNavLink>
          
          
          <StyledNavLink to="/home">Home</StyledNavLink>
        

        
          <StyledNavLink to="/about">About</StyledNavLink>
          <Logout />

      </StyledSidebar>
      
    </StyledNav>
    
  )
}
  
    

