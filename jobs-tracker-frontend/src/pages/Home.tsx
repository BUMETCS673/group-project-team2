import React from 'react'
// import JobCard from '../components/Job_Components/JobCard'
import { StyledCardsContainer } from '../styles/styles'
import HomePageHeader from '../components/HomePageHeader'
//import jobsService from '../services/jobs.service'
import JobCardNew from '../components/Job_Components/JobCardNew'
import { useAuth0 } from '@auth0/auth0-react'
//import {useAppDispatch, useAppSelector} from '../app/hooks'
import { useFetchJobsQuery } from '../features/jobs/jobs-api-slice'
import NoJobs from "../components/Job_Components/NoJobs"

export const Home = () => {
  const { user, isAuthenticated } = useAuth0()
  
  const {data = []} = useFetchJobsQuery()
  if (isAuthenticated && user) {
    // const [jobItems, setJobItems] = useState([]);
    // useEffect(() => {
    //   // const email = user?.email ?? 'none'
    //   jobsService.getAll().then((response: any) => {
    //     setJobItems(response.data)
    //   }).catch((e: Error) => {
    //     console.log(e);
    //   });
    // }, [])
    console.log(data)
  
    
    return (
      <StyledCardsContainer>
        <HomePageHeader />
        <br />
        <br />
        <br />
        {data.length !== 0 
          ? data.map((job) => (
            <JobCardNew
              key = {job.ID}
              companyName={job.companyName}
              jobTitle={job.jobTitle}
              status={job.status}
            />
            )
          ) 
          : <NoJobs/> 
        }
      </StyledCardsContainer>
        )
      }
      return (<div>not authenticated</div>)
    }