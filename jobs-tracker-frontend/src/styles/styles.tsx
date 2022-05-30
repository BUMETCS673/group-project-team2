import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

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
interface MenuItemsProps {
  readonly menu?: boolean
}
export const FlexContainer = styled.div<MenuItemsProps>`
  display: flex;
  flex-direction: column;
  ${(props) =>
    props.menu &&
    `
  @media (min-width: 768px) {
    flex-direction: row;
  }
  `}
`
export const StyledNav = styled.nav`
  display: flex;
  justify-content: space-between;
  height: 60px;
  background-color: ${(props) => props.theme.colors.nav.backgroundColor};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  opacity: 1;
`
export const StyledPrimaryBtn = styled.button<MenuItemsProps>`
  border-radius: 20px;
  font-size: 20px;
  padding: 5px 30px;
  font-weight: bold;
  background-color: ${(props) => props.theme.colors.primary.main};
  color: ${(props) => props.theme.colors.text.secondary};
  border: none;
  ${(props) =>
    props.menu
      ? `
  margin: 0px;
  @media (min-width: 768px) {
    margin: 0 20px;
  }
  `
      : `
  margin: 10px;
  `};
`

// Logout Button on header

export const SimpleButtonLogout = styled.button`
  background-color: transparent;
  color: ${(props) => props.theme.colors.primary.main};
  font-size: 20px;
  text-align: left;
  border: none;
  &:hover {
    /* font-size: 25px; */
    background-color: transparent;
    opacity: 0.5;
  }
  @media (min-width: 768px) {
    margin-left: 10px;
  }
`

// Login Button on header

export const SimpleButtonLogin = styled.button`
  background-color: transparent;
  color: white;
  font-size: 20px;
  text-align: left;
  border: none;
  &:hover {
    /* font-size: 25px; */
    background-color: transparent;
    opacity: 0.5;
  }
  @media (min-width: 768px) {
    margin-left: 10px;
  }
`

export const Logo = styled(NavLink)`
  text-align: center;
  margin-left: 20px;
  width: 200px;
  img {
    width: 90%;
  }
`
export const Collapse = styled.div`
  display: none;
  @media (min-width: 768px) {
    display: flex;
  }
`
export const StyledMenuButton = styled.button`
  background-color: transparent;
  display: flex;
  align-self: center;
  border: 2px solid ${(props) => props.theme.colors.text.main};
  color: ${(props) => props.theme.colors.text.main};
  padding: 0px;
  border-radius: 10px;
  margin-right: 30px;
  &:hover {
    background-color: transparent;
    color: ${(props) => props.theme.colors.text.secondary};
    border-color: ${(props) => props.theme.colors.text.secondary};
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
  color: ${(props) => props.theme.colors.text.secondary};
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
`
export const UserContainer = styled.div`
  display: flex;
  color: ${(props) => props.theme.colors.text.secondary};
  align-items: center;
  margin: 0px;
  padding: 0px;
  img {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    margin-right: 10px;
  }
  p {
    opacity: 0.25;
    font-size: 20px;
    width: 110px;
  }
`
interface SidebarProps {
  readonly toggleSidebar?: boolean
}

export const StyledSidebar = styled.div<SidebarProps>`
  display: ${(props) => (props.toggleSidebar ? 'flex' : 'none')};
  flex-direction: column;
  width: 250px;
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
`

export const StyledCloseButton = styled.button`
  background-color: transparent;
  border: none;
  color: ${(props) => props.theme.colors.text.main};
  align-self: flex-end;
  position: absolute;
  top: 10px;
  right: 10px;
  &:hover {
    background-color: transparent;
    color: ${(props) => props.theme.colors.text.secondary};
  }
`
export const StyledCardsContainer = styled.div`
  margin: auto;
  background-color: ${(props) => props.theme.colors.background.secondary};
  height: 100vh;
  padding: 20px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  @media (min-width: 768px) {
    width: 70%;
  }
`
export const StyledCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid red;
  border-radius: 5px;
  align-items: center;
  justify-content: center;
  position: relative;
`
export const StyledDeleteBtn = styled.button`
  background-color: transparent;
  border: none;
  border-radius: 10px;
  color: ${(props) => props.theme.colors.text.main};
  align-self: flex-end;
  position: absolute;
  top: 10px;
  right: 10px;
  &:hover {
    background-color: ${(props) => props.theme.colors.primary.main};
    color: ${(props) => props.theme.colors.text.secondary};
  }
`
export const StyledCardHeader = styled.div`
  display: flex;
`
export const StyledCardBody = styled.div`
  h1 {
    font-size: 26px;
  }
  h2 {
    font-size: 20px;
    color: ${(props) => props.theme.colors.text.main};
  }
`
export const StyledCardFooter = styled.div`
  display: flex;
  justify-content: space-between;
  p {
    margin: 0 10px;
  }
`
export const StyledHomeHeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
  div {
    display: flex;
    justify-content: space-between;
  }
  h1 {
    border-bottom: 1px solid ${(props) => props.theme.colors.text.main};
    color: ${(props) => props.theme.colors.text.main};
  }
`
export const StyledAddBtn = styled.button`
  p {
    display: none;
  }
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  border: none;
  background-color: ${(props) => props.theme.colors.background.addbtn};
  color: ${(props) => props.theme.colors.text.secondary};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  @media (min-width: 768px) {
    border-radius: 30px;
    padding: 0px 30px;
    width: auto;
    height: auto;
    p {
      display: inline;
      font-size: 20px;
      font-weight: bold;
      margin: 0 5px 0 0;
    }
  }
`

// Landing Page CSS Components

export const LandingPageContent = styled.div`
  font-family: 'Raleway', sans-serif;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const LandingPageSubContentLeft = styled.div`
  width: 25%;
  align-self: 'flex-start';
  justify-self: 'flex-start';
  margin-bottom: 5%;
  margin-top: 5%;
  margin-right: auto;
  margin-left: 10%;
  font-size: 1.5rem;
`
export const LandingPageSubContentRight = styled.div`
  width: 25%;
  align-self: 'flex-end';
  justify-self: 'flex-end';
  margin-left: auto;
  margin-right: 10%;
  font-size: 1.5rem;
`

// About Page CSS Components

export const AboutPageContent = styled.div`
  margin-left: 5%;
`
