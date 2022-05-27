import React, {useState} from 'react'
import { StyledNav, Logo, Collapse, StyledMenuButton, StyledSidebar, StyledCloseButton } from '../styles/styles';
import { IoCloseCircleOutline } from "react-icons/io5";
import followUpLogo from '../assets/images/logo.png'
import NavMenuItems from './NavMenuItems'
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
          <NavMenuItems/> 
      </Collapse>

      <StyledSidebar toggleSidebar = {toggleSidebar}>
          <StyledCloseButton onClick = {() => setToggleSidebar(!toggleSidebar)}>
            <IoCloseCircleOutline size = {35}/>
          </StyledCloseButton>
          <NavMenuItems/>
      </StyledSidebar>
      
    </StyledNav>
    
  )
}
  
    

