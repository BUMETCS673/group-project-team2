import { useEffect } from 'react' 
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import Typography from '@mui/material/Typography'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import ActivityContainer from '../Activity_Components/ActivityContainer'
import useMediaQuery from '@mui/material/useMediaQuery';
import BasicModal from '../BasicModal'
import CircularProgress from '@mui/material/CircularProgress'
// import { useAuth0 } from '@auth0/auth0-react'
// import { jobData } from '../../data/mockdata'
import {
  useFetchActivitiesQuery
} from '../../features/activities/activities-slice'
import { useDeleteJobMutation } from '../../features/jobs/jobs-api-slice'
import {useAppDispatch}  from '../../app/hooks'
import { setPriority } from '../../features/user/user-slice'

import { Button } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'

type CardProps = {
  companyName: string
  jobTitle: string
  status: string
  id: string | undefined
  priority: string | undefined
}
const JobCardNew: React.FC<CardProps> = ({
  companyName,
  jobTitle,
  status,
  id,
  priority
}: CardProps) => {
  const HIGH_PRIORITY = 3
  const MED_PRIORITY = 7
  const dispatch = useAppDispatch()
  const [deleteJob] = useDeleteJobMutation()
  const matches = useMediaQuery("(min-width:600px)")
  const { data = [], isLoading } = useFetchActivitiesQuery(id)
  const toTimestamp = (strDate:string) => {
    var datum = Date.parse(strDate);
    return datum;
  }
  const totalDays = (timestamp:number) => {
    const daysDiff = Math.ceil(timestamp / (1000 * 3600 * 24))
    return daysDiff
  }
  useEffect(() => {
    if (data.length > 0 ) {
      let newPriority = ''
      console.log('activity data', data)
      const todayTimestamp = + new Date()
      console.log('today timestamp', todayTimestamp)
      for (let i = 0; i < data.length; i++ ) {
          const startTimestamp = toTimestamp(data[i].start_date)
          console.log('start timestamp', startTimestamp)
          const timeDiff =  startTimestamp - todayTimestamp
          const daysDiff = totalDays(timeDiff)
          console.log('timestamp', daysDiff)
          if (daysDiff <= HIGH_PRIORITY)  {
            newPriority = 'high'
          } else if (daysDiff > HIGH_PRIORITY && daysDiff <= MED_PRIORITY) {
            newPriority = 'medium'
          }
      }
      console.log('newPriority', newPriority)
      dispatch(setPriority({jobId: id, priority: newPriority}))
    }
  
  }, [data, dispatch])

  function deleteHandler() {
    deleteJob({ ID: id })
  }
  if (isLoading) {
    return <div style = {{textAlign: 'center'}}><CircularProgress/> </div>
  } else{
    return  (
    <div
      style={{
        marginBottom: '4rem',
        width: '100%',
        gap: '2rem',
      }}
    >
      <Accordion sx = {{
        backgroundColor: 'rgb(70, 158, 84)',
        color: 'white',
        ...(priority == 'high' && {
          backgroundColor: 'rgb(207, 55, 55)'
        }),
        ...(priority == 'medium' && {
          backgroundColor: 'rgb(245, 190, 71)'
        })
      }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx = { {color: 'white'}}/>}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography fontSize={16} mr={2}>{`${id}`}</Typography>
          <Typography fontSize={16} mr={2}>{`${companyName}`}</Typography>
          <Typography fontSize={18}>{`|`}</Typography>
          <Typography fontSize={14} mr={2} ml={2}>
            {`${jobTitle}`}{' '}
          </Typography>
          <Typography fontSize={18}>{`|`}</Typography>

          <Typography fontSize={12} ml={2}>
            {`${status}`}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          {/* <ul>
            <li>Activity 1</li>
            <li>Activity 2</li>
            <li>Activity 3</li>
          </ul> */}
          <ActivityContainer jobId={id} />
          <div style={{ display: 'flex', gap: '1rem' }}>
            <div style={{ flexGrow: '1' }}>
              {' '}
              <BasicModal
                job_id={id}
                type = 'activity'
                title="add"
                buttonTitle="Add Activity"
                insideCard
                priority = {priority}
              />
            </div>

            <div style={{ display: 'flex', gap: '1rem' }}>
              {' '}
              <BasicModal
                type = 'job'
                job_id={id}
                title="edit"
                buttonTitle="Edit Job"
                insideCard
                priority = {priority}
              />
              <Button variant="contained" onClick={deleteHandler} sx = {{
                  backgroundColor: "rgb(23, 160, 160)",
                  ...(priority == 'high' && {
                    color: 'rgb(77, 77, 77)',
                    backgroundColor: "rgb(230, 99, 99)",
                  }),
                  ...(priority == 'medium' && {
                    color: 'rgb(77, 77, 77)',
                    backgroundColor: "rgb(216, 186, 88)",
                  }),
                  ...(priority == '' && {
                    color: 'rgb(77, 77, 77)',
                    backgroundColor: "rgb(100, 190, 115)",
                  }),
                  
                }}
                >
                <DeleteIcon />
                {matches && (
                  <Typography>
                    Delete Job
                  </Typography>
                  )}
                
                
              </Button>
            </div>
          </div>
        </AccordionDetails>
      </Accordion>
    </div>
  )
                }
}

export default JobCardNew
