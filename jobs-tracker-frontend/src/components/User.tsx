import {UserContainer} from '../styles/styles'
import { useAuth0 } from '@auth0/auth0-react'

const User = () => {
  const { user, isAuthenticated } = useAuth0()

  if (isAuthenticated && user)
    return (
      <UserContainer>
        <img src={user.picture}/>
        <p>{`Hello, ${user.given_name}!`}</p>
      </UserContainer>
    )

  return <div>Not Logged In</div>
}

export default User

// 1st test - check call if user authenticated
// const {  isAuthenticated } = useAuth0()
// if isAuthenticated {
//   test1()
// }
// // 2nd test - req should fail is user unauthenticated
// const {  isAuthenticated } = useAuth0()

// if !isAuthenticated {
//   test2()
// }
