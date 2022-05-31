import React from 'react'
// import JobCard from '../components/Job_Components/JobCard'
import JobCardNew from '../components/Job_Components/JobCardNew'
import { StyledCardsContainer } from '../styles/styles'
import HomePageHeader from '../components/HomePageHeader'
// import Counter from '../components/counter/Counter'
import { useAuth0 } from '@auth0/auth0-react'
import { jobData } from '../data/mockdata'
import NoJobs from '../components/Job_Components/NoJobs'
// import { Jobs } from '../types/types'

// type JobItems = {
//   [key: string]: Jobs[]
// }

export const Home = () => {
  const { user, isAuthenticated } = useAuth0()

  if (isAuthenticated && user) {
    const email = user?.email ?? 'none'
    const jobItems = jobData[email as keyof typeof jobData]

    if (jobItems)
      return (
        <StyledCardsContainer>
          <HomePageHeader />

          {/* <JobCard /> */}
          <br />
          <br />
          <br />
          {jobItems.map((item: any) => {
            return (
              <JobCardNew
                companyName={item.companyName}
                jobTitle={item.jobTitle}
                status={item.status}
              />
            )
          })}
        </StyledCardsContainer>
      )
    else return <NoJobs />
  }

  return <div>None</div>
}
