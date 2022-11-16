import React from 'react'
import Login from '../components/navbar/Login'
import Waves from '../components/landingpage/Waves'
import Job from '../assets/images/job.jpg'
import JobProtal from '../assets/images/jobProtal.jpg'
import JobCard from '../assets/images/jobCard.jpg'
import JobFuture from '../assets/images/jobfuture.jpg'
import {
  LandingPageContent,
  LandingPageSubContentLeft,
  LandingPageSubContentRight,
  GradientHeader,
} from '../styles/styles'

export const Loading = () => {
  return (
    <React.Fragment>
      <Waves />
      <LandingPageContent>
        <h3>Improving the Job Application Process</h3>
        <li style={{ fontSize: '1.4rem', listStyle: 'none' }}>
          {' '}
          Our mission is to drastically improve the job appliction process.{' '}
        </li>
        <li style={{ fontSize: '1.4rem', listStyle: 'none' }}>
          Follow up wants to work with you on the challenging travel to get
          reach the final destination{' '}
        </li>

        <LandingPageSubContentLeft style={{ whiteSpace: 'break-spaces' }}>
          <div>
            <GradientHeader>The start of Follow Up</GradientHeader>
            Nowadays, it is not unusual to apply for multiple jobs at a time.
            However, handling many applications at once can be challenging. Our
            team， which is all faceing with this challenging wanted a
            application to help us solve this problem.{'\n'}
            FollowUp aims to help job candidates better manage the status and
            next steps of their applications.
          </div>
          {
            <img
              src={Job}
              style={{ width: '600px', height: 'auto', padding: '40px' }}
              alt={'Job image'}
            />
          }
        </LandingPageSubContentLeft>

        <LandingPageSubContentLeft style={{ whiteSpace: 'break-spaces' }}>
          {
            <img
              src={JobProtal}
              style={{
                width: '600px',
                height: 'auto',
                padding: '40px',
                marginRight: '15%',
              }}
              alt={'JobProtal image'}
            />
          }
          <div>
            <GradientHeader> Organize your search </GradientHeader>
            We provide a free application for users all throughout the {'\n'}
            world to easily track and update jobs that can associated {'\n'}
            activities through a Simple interface! {'\n'}
            Accessibility and ease of use is very important for us and {'\n'}
            we want to create a responsive app experience for all of {'\n'}
            our users!
          </div>
        </LandingPageSubContentLeft>

        <LandingPageSubContentRight style={{ whiteSpace: 'break-spaces' }}>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              flexDirection: 'column',
            }}
          >
            <GradientHeader>Free for all Users </GradientHeader>
            Follow Up is all free application. User can add jobs that will show
            in a job card. Each job can customize its activities with the
            deadline. Our application will show different color based on the
            deadline. Also, these job and activites all are editable after you
            first add that.{' '}
          </div>
        </LandingPageSubContentRight>

        {
          <img
            src={JobCard}
            style={{
              width: '85%',
              height: 'auto',
              padding: '40px',
              marginBottom: '5%',
            }}
            alt={'JobProtal image'}
          />
        }

        <LandingPageSubContentLeft style={{ whiteSpace: 'break-spaces' }}>
          <div>
            <GradientHeader>Our Future</GradientHeader>
            The FollowUp Team is open to any suggestions to improve our product.
            We are proud to offer free resources for users to enhance their
            careers and our team is constantly looking for ways to add new
            features! we are looking forward to helping our users through every
            step of the job search process!
          </div>
          {
            <img
              src={JobFuture}
              style={{ width: '600px', height: 'auto', padding: '40px' }}
              alt={'JobFuture image'}
            />
          }
        </LandingPageSubContentLeft>
      </LandingPageContent>
      <Login />
    </React.Fragment>
  )
}

export default Loading
