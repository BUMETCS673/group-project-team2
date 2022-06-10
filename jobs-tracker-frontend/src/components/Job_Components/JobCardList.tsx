import {useEffect} from 'react'
import { useFetchJobsQuery } from '../../features/api/api-slice'
import JobCardNew from './JobCardNew'
import NoJobs from './NoJobs'
import {useAppDispatch} from '../../app/hooks'
import { receiveJobs } from '../../features/user/user-slice'

const JobCardList = () => {
    const {data = []} = useFetchJobsQuery()
    const dispatch = useAppDispatch()
    useEffect(()=> {
        dispatch(receiveJobs(data))
      }, [dispatch, data])
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