import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'

const User = () => {
  const { user, isAuthenticated } = useAuth0()

  if (isAuthenticated && user)
    return (
      <div>
        <h3>Info</h3>
        <img src={user.picture}></img>
        <h4>{user.email}</h4>
        <h4>{user.given_name}</h4>
      </div>
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
