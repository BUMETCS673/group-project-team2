import {useEffect} from 'react'
import { useFetchJobsQuery } from '../../features/jobs/jobs-api-slice'
import JobCardNew from './JobCardNew'
import NoJobs from './NoJobs'

const JobCardList = () => {
    const {data = []} = useFetchJobsQuery()
    useEffect(()=> {
        
      }, [data])
      console.log(data)
    return (
        <div>
        {data.length !== 0 
            ? data.map((job) => {
                console.log('job', job)
                return(
              <JobCardNew
                key = {job.ID}
                companyName={job.companyname}
                jobTitle={job.jobtitle}
                status={job.status}
              />
              )}
            ) 
            : <NoJobs/> 
          }
        </div>
        
    )
}
export default JobCardList