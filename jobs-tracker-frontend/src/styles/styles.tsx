import styled from 'styled-components'
import { NavLink } from "react-router-dom"

export const button = styled.button`
  border: 1px dotted yellow;
  background: white;
  color: black;
  font-weight: 500;
`

export const Container = styled.div`
  border: 2px solid blue;
  width: 100px;
`
export const StyledNav = styled.nav`
display: flex;
height: 60px;
background-color: ${(props) => props.theme.colors.nav.backgroundColor};
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
opacity: 1;

`
export const SimpleButton = styled.button`
border: none;
background-color: transparent;
color: ${props => props.theme.colors.primary.main};
font-size: 20px;
text-align: left;
padding: 10px 0;
&:hover {
      font-size: 25px;
      background-color: transparent;
      opacity: 0.5;
  }
@media (min-width: 768px) {
  margin: 0 20px;
  padding: 0;
}
`


export const Logo = styled.img`
text-align: center;
width: 80%;

`;
export const Collapse = styled.div`
    display: none;
    @media (min-width: 768px) {
        display: flex;
    }
`
export const StyledMenuButton = styled.button`
    background-color: transparent;
    display: flex;
    align-self:center;
    border: 2px solid ${props => props.theme.colors.text.main};
    color: ${props => props.theme.colors.text.main};
    padding: 0px;
    border-radius: 10px;
    &:hover {
      background-color: transparent;
      color: ${props => props.theme.colors.text.secondary};
      border-color: ${props => props.theme.colors.text.secondary};
      opacity: 0.9;
    }
    @media (min-width: 768px) {
        display: none;
    }
`
export const MenuLinkGroup = styled.div`
display: flex;
flex-direction: column;
align-items: start;
padding: 20px 0 40px 0;
margin: 0 15px;
border-bottom: 1px solid rgba(255, 255, 255, 0.25);
@media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
    padding: 0;
    border-bottom: none;
}
`
export const StyledNavLink = styled(NavLink)`
  font-size: 20px;
  color: ${props => props.theme.colors.text.secondary};
  opacity: 0.25;
  text-decoration: none;
  padding: 10px 0;
  &.active {
      opacity: 1;
  }
  @media (min-width: 768px) {
    margin: 0 20px;
    padding: 0;
  }
  
`;

interface SidebarProps {
  readonly toggleSidebar?: boolean;
}

export const StyledSidebar =styled.div<SidebarProps>`
display: ${(props) => (props.toggleSidebar ? "flex" : "none")};
flex-direction: column;
width: 150px;
height: 100vh;
position: fixed;
top: 0;
right: 0;
padding: 2rem 1rem 1rem 1rem;
background-color: #1a1a1a;
z-index: 9999;
@media (min-width: 768px) {
    display: none;
}
`;

export const StyledCloseButton = styled.button`
    background-color: transparent;
    border: none;
    color: ${props => props.theme.colors.text.main};
    align-self: flex-end;
    position: absolute; top: 10px; right: 10px;
    &:hover {
      background-color: transparent;
      color: ${props => props.theme.colors.text.secondary};

  }
`

