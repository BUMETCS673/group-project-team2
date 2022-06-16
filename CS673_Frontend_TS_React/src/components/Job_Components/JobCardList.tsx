import { useEffect } from 'react'
import { useFetchJobsQuery } from '../../features/jobs/jobs-api-slice'
import JobCardNew from './JobCardNew'
import NoJobs from './NoJobs'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import Stack from '@mui/material/Stack'
import LinearProgress from '@mui/material/LinearProgress'
import { receiveJobs } from '../../features/user/user-slice'
import {Job} from '../../types/types'

const JobCardList = () => {
  //const [open, setOpen] = useState(false)
  const dispatch = useAppDispatch();
  const { data: jobsData = [], isLoading } = useFetchJobsQuery()
  
  useEffect(() => {
    console.log("jobs data length", jobsData.length)
     if (jobsData.length > 0) {
      let jobsWithPriority:Job[] = []
      jobsData.map((job: Job) => {
        console.log ("job aqui", job)
        const newJob = {
          ...job,
          priority: 3,
        }
        console.log('aqui', newJob)
        jobsWithPriority.push(newJob)
      })
      dispatch(receiveJobs(jobsWithPriority))
    }
      //if (typeof jobsWithPriority[0].priority != undefined) {jobsWithPriority.sort((a, b) => a.priority - b.priority)}
    
     
  }, [jobsData])

  

  console.log(jobsData)
  const jobsList = useAppSelector(state => state.user.jobs)

  if (isLoading)
    return (
      <Stack sx={{ width: '100%', color: 'grey.500' }} spacing={2}>
        <LinearProgress />
        <LinearProgress />
        <LinearProgress />
      </Stack>
    )
  return (
    <div>
      
      {jobsList.length !== 0 ? (
        jobsList.map((job) => {
          console.log('job', job)
          return (
            <JobCardNew
              key={job.ID}
              id={job.ID}
              companyName={job.companyname}
              jobTitle={job.jobtitle}
              status={job.status}
              priority = {job.priority}
            />
          )
        })
      ) : (
        <NoJobs />
      )}
    </div>
  )
}
export default JobCardList
