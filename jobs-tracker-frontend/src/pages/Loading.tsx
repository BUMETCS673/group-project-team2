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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
          explicabo quia, unde facere aliquid quasi eum quod? Molestiae
          architecto enim excepturi unde nobis totam, sit, harum possimus
          debitis exercitationem ea{' '}
        </LandingPageSubContentRight>

        <LandingPageSubContentLeft>
          The process of applying for jobs is as challenging as ever and our
          mission is to drastically improve the entire process.{' '}
        </LandingPageSubContentLeft>

        <LandingPageSubContentRight>
          {' '}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
          explicabo quia, unde facere aliquid quasi eum quod? Molestiae
          architecto enim excepturi unde nobis totam, sit, harum possimus
          debitis exercitationem ea{' '}
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
