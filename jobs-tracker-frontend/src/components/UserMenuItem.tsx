import {UserContainer, FlexContainer} from '../styles/styles'
import { useAuth0 } from '@auth0/auth0-react'
import Login from './Login'
import Logout from './Logout'


const UserMenuItem = () => {
  const { user, isAuthenticated } = useAuth0()

  if (isAuthenticated && user)
    return (
      <FlexContainer menu>
        <UserContainer>
            <img src={user.picture}/>
            <p>{`Hello, ${user.given_name}!`}</p>
        </UserContainer>
        <Logout/>
      </FlexContainer>
    )

  return <Login/>
}

export default UserMenuItem
