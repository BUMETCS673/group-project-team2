import { useEffect } from 'react'
import { useFetchJobsQuery } from '../../redux/slices/api/jobs'
import JobCardNew from './JobCardNew'
import NoJobs from './NoJobs'
import { useAppDispatch, useAppSelector } from '../../redux/app/hooks'
import Stack from '@mui/material/Stack'
import LinearProgress from '@mui/material/LinearProgress'
import { receiveJobs } from '../../redux/slices/model/user'
import {Job} from '../../types/types'

const JobCardList = () => {
  //const [open, setOpen] = useState(false)
  const dispatch = useAppDispatch();
  const { data: jobsData = [], isLoading } = useFetchJobsQuery()
  const jobsList = useAppSelector(state => state.user.jobs) 
  const compareFn = (a:Job, b:Job) => {
    if (typeof a.priority === 'number' && typeof b.priority === 'number' ) {
      if (a.priority > b.priority) {
          return 1
      }
      if (a.priority < b.priority) {
          return -1
      }
    }
    return 0 
  }
  
  useEffect(() => {
    if (jobsData.length > 0) {
      let jobsWithPriority:Job[] = []
      jobsData.map((job) => {
        const existingJob = jobsList.filter(item => item.ID == job.ID)[0]
          const newJob = {
            ...job,
            priority: existingJob ? existingJob.priority: 3
          }
          //console.log('aqui', newJob)
          jobsWithPriority.push(newJob)
        })
      dispatch(receiveJobs(jobsWithPriority))
    }
  }, [jobsData, dispatch])

  //Sort jobsList to show the cards according to priority
  const sortedjobsList = [...jobsList]
  sortedjobsList.sort(compareFn)
 
  if (isLoading)
    return (
      <Stack sx={{ width: '100%', color: 'grey.500' }} spacing={2}>
        <LinearProgress />
        <LinearProgress />
        <LinearProgress />
      </Stack>
    )
  return (
    <div >
      {jobsList.length !== 0 ? (
        sortedjobsList.map((job) => {
          // console.log('job', job)
          return (
            <JobCardNew
              key={job.ID}
              id={job.ID}
              companyName={job.companyname}
              jobTitle={job.jobtitle}
              status={job.status}
              description = {job.description}
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
