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
justify-content: space-between;
align-items: center;
height: 100px;
background-color: ${(props) => props.theme.colors.nav.backgroundColor};
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
opacity: 1;
padding: 0 20px;
`

export const Logo = styled.div`
flex-grow: 2;
text-align: center;
`;