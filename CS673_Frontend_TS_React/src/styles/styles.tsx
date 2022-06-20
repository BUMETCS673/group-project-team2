import styled, { keyframes } from 'styled-components'
import { NavLink } from 'react-router-dom'
import Box from '@mui/material/Box'
import FormHelperText from '@mui/material/FormHelperText'

//text animation
const animation = keyframes`
  0% { opacity: 0;  }
  20% { opacity: 0.5; }
  30% { opacity: 1; }
  50% { opacity: 1; }
  70% { opacity: 1; }
  80% { opacity: 0.5; }
  100% { opacity: 0;  }
`

export const TextAnimation = styled.span`
  animation-name: ${animation};
  animation-duration: 2s;
  animation-fill-mode: forwards;
  animation-iteration-count: infinite;
`

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
export const Row = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (min-width: 768px) {
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
  }
`
export const FormSubtitle = styled.h3`
  color: ${(props) => props.theme.colors.text.main};
  border-bottom: 1px solid ${(props) => props.theme.colors.text.main};
  align-self: stretch;
  margin: 20px;
  padding-bottom: 10px;
`
export const Form = styled.form`
  display: flex;
  align-items: center;
  flex-direction: column;
`
export const Col = styled.div`
  margin: 10px;
  width: 50%;
  text-align: center;
`
export const SingleCol = styled.div`
  margin: 10px;
  width: 80%;
  text-align: center;
`
export interface MenuItemsProps {
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
export const FlexRowContainer = styled.div`
  display: flex;
`

// Navbar

export const StyledNav = styled.nav`
  display: flex;
  justify-content: space-between;
  height: 60px;
  background-color: ${(props) => props.theme.colors.nav.backgroundColor};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  opacity: 1;
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

// job cards

export const StyledCardsContainer = styled.div`
  min-height: 100vh;
  height: 100%;
  margin: auto;
  background-color: ${(props) => props.theme.colors.background.secondary.light};
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

// Home page

export const StyledHomeHeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
  border-bottom: 1px solid black;
  padding-bottom: 1rem;
  div {
    display: flex;
    justify-content: space-between;
  }
  h1 {
    /* border-bottom: 1px solid ${(props) => props.theme.colors.text.main}; */
    color: ${(props) => props.theme.colors.text.main};
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
  width: 80%;
  align-self: 'flex-start';
  justify-self: 'flex-start';
  margin-bottom: 5%;
  margin-top: 5%;
  margin-right: auto;
  margin-left: 10%;
  font-size: 1.5rem;
  display: flex;
  justify-content: start;
  align-items: center; 
`
export const LandingPageSubContentRight = styled.div`
  width: 80%;
  align-self: 'flex-end';
  justify-self: 'flex-end';
  margin-left: auto;
  margin-right: 10%;
  font-size: 1.5rem;
  display: flex;
  justify-content: start;
  align-items: center; 
  margin-top: 5%;
`


// About Page CSS Components

export const AboutPageContent = styled.div`
  margin-left: 5%;
  font-family: 'Raleway', sans-serif;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const ImageBox = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 8px;
  border: 1px solid rgba(25,4,69,0.1);
  box-shadow: 0px 4px 10px rgb(25 4 69 / 10%);
  background-size: 269px 212px;
  background-repeat: no-repeat;
  margin-bottom: 40px;
  justify-content: start;
  align-items: center; 
`
// if User has no Jobs they are tracking

export const NoJobsComponent = styled.div`
  margin-left: 5%;
  margin-top: 5%;
`
//  BasicModal

export const StyledBox = styled(Box)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  min-width: 350px;
  width: 80%;
  border-radius: 5px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  background-color: ${(props) => props.theme.colors.background.primary};
  @media (min-width: 768px) {
    width: 600px;
  }
`
export const StyledModalHeader = styled.div`
  background-color: ${(props) => props.theme.colors.primary.main};
  color: ${(props) => props.theme.colors.text.secondary};
  border-radius: 5px 5px 0 0;
  padding: 10px;
`
export const StyledModalFooter = styled(StyledModalHeader)`
  background-color: ${(props) => props.theme.colors.background.secondary.dark};
  border-radius: 0 0 5px 5px;
  text-align: right;
`

// Buttons

export const StyledCloseButton = styled.button`
  background-color: transparent;
  border: none;
  color: ${(props) => props.theme.colors.text.main};
  align-self: flex-end;
  position: absolute;
  top: 8px;
  right: 8px;
  &:hover {
    background-color: transparent;
    color: ${(props) => props.theme.colors.text.secondary};
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
  width: 45px;
  height: 45px;
  border: none;
  background-color: ${(props) => props.theme.colors.button.add};
  color: ${(props) => props.theme.colors.text.secondary};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  &:hover {
    background-color: ${(props) => props.theme.colors.button.add};
    opacity: 0.5;
  }
  @media (min-width: 768px) {
    border-radius: 30px;
    padding: 5px 25px;
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
export const StyledSaveBtn = styled.button`
  border-radius: 30px;
  padding: 5px 25px;
  border: none;
  background-color: ${(props) => props.theme.colors.button.save};
  color: ${(props) => props.theme.colors.text.secondary};
  p {
    font-size: 20px;
    font-weight: bold;
    margin: 0 5px 0 0;
  }
  &:hover {
    opacity: 0.5;
  }
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

//Forms
// interface InputProps {
//   readonly boder: string;
// }
// export const Field = styled.input<InputProps>`
//   border: ${props => props.border || "none" };
//   padding: 10px;
//   text-align: center;
//   height: 42px;
//   font-size: 30px;
//   flex-grow: 2;
//   background-color: ${(props) => props.theme.input.backgroundColor.primary};

// `
export const HelperText = styled(FormHelperText)`
  color: ${(props) => props.theme.colors.text.error};
`

export const GradientHeader = styled.h1`
  background: linear-gradient(to right, #30cfd0 20%, #12b886 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  /* padding-bottom: 1rem; */
  text-decoration: none;
`
