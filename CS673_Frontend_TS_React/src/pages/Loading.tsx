import React from 'react'
// import User from '../components/User'
import Login from '../components/Login'
// import { Container } from '../styles/styles'
import Waves from '../components/Landing_Page_Components/Waves'

import {
  LandingPageContent,
  LandingPageSubContentLeft,
  LandingPageSubContentRight,
} from '../styles/styles'

export const Loading = () => {
  return (
    <React.Fragment>
      <Waves />
      <LandingPageContent>
        <h3>Improving the Job Application Process!</h3>
        <LandingPageSubContentLeft>
          The process of applying for jobs is as challenging as ever and our
          mission is to drastically improve the entire process.{' '}
        </LandingPageSubContentLeft>

        <LandingPageSubContentRight>
          {' '}
          We provide a free application for users all throughout the world to
          easily track and update jobs and associated activities through a
          Simple interface! Accessibility and ease of use is very important for
          us and we want to create a responsive app experience for all of our
          users!{' '}
        </LandingPageSubContentRight>

        <LandingPageSubContentLeft>
          We are proud to offer free resources for users to enhance their
          careers and our team is constantly looking for ways to add new
          features! :){' '}
        </LandingPageSubContentLeft>

        <LandingPageSubContentRight>
          {' '}
          The FollowUp Team is open to any suggestions to improve our product
          and we are looking forward to helping our users through every step of
          the job search process!{' '}
        </LandingPageSubContentRight>

        {/* /* <Container>
        {' '}
        <User />
      </Container>
      <div>Login to the Application!</div>*/}
      </LandingPageContent>
      <Login />
    </React.Fragment>
  )
}

export default Loading
