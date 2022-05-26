import styled from 'styled-components'

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
    display: flex;
    align-self:center;
    border: 1px solid ${props => props.theme.colors.text.main};
    color: ${props => props.theme.colors.text.main};
    padding: 8px;
    border-radius: 10px;
    @media (min-width: 768px) {
        display: none;
    }
`