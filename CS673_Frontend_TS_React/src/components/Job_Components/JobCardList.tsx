import { useEffect } from 'react'
import { useFetchJobsQuery } from '../../features/jobs/jobs-api-slice'
import JobCardNew from './JobCardNew'
import NoJobs from './NoJobs'

import Stack from '@mui/material/Stack'
import LinearProgress from '@mui/material/LinearProgress'

const JobCardList = () => {
  // const [open, setOpen] = useState(false)

  const { data = [], isLoading } = useFetchJobsQuery()
  useEffect(() => {}, [data])
  console.log(data)

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
      {data.length !== 0 ? (
        data.map((job) => {
          console.log('job', job)
          return (
            <JobCardNew
              key={job.ID}
              id={job.ID}
              companyName={job.companyname}
              jobTitle={job.jobtitle}
              status={job.status}
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
