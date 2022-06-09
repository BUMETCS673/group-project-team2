import { useFetchJobsQuery } from '../../features/jobs/jobs-api-slice'
import JobCardNew from './JobCardNew'
import NoJobs from './NoJobs'

const JobCardList = () => {
    const {data = []} = useFetchJobsQuery()

    return (
        <div>
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
        </div>
        
    )
}
export default JobCardList