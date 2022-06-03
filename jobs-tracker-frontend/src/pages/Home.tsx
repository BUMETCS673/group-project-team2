import React, { useEffect,useState } from 'react'
// import JobCard from '../components/Job_Components/JobCard'
import { StyledCardsContainer } from '../styles/styles'
import HomePageHeader from '../components/HomePageHeader'
import jobsService from '../services/jobs.service'
import JobCardNew from '../components/Job_Components/JobCardNew'
import { useAuth0 } from '@auth0/auth0-react'

export const Home = () => {
  const { user,isAuthenticated } = useAuth0()
  if (isAuthenticated && user) {
    const [jobItems, setJobItems] = useState([]);
    useEffect(() => {
      // const email = user?.email ?? 'none'
      jobsService.getAll().then((response: any) => {
        setJobItems(response.data)
      }).catch((e: Error) => {
        console.log(e);
      });
    }, [])
    if (jobItems)
    return (
      <StyledCardsContainer>
      <HomePageHeader />
      <br />
      <br />
      <br />
      {jobItems && jobItems.map((item: any) => {
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
        else return (<div>None</div>)
      }
      return (<div>None</div>)
    }
    