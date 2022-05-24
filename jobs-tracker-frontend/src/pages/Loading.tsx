import React from 'react'
import User from '../components/User'
import Login from '../components/Login'
import { Container } from '../styles/styles'

export const Loading = () => {
  return (
    <React.Fragment>
      <h3>Welcome to Job Tracker</h3>

      <Container>
        {' '}
        <User />
      </Container>
      <div>Login to the Application!</div>
      <Login />
    </React.Fragment>
  )
}

export default Loading
