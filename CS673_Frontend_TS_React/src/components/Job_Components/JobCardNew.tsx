import { useEffect, useState } from 'react' 
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
import { setPriority, deleteUserJob } from '../../features/user/user-slice'

import { Button } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'


type CardProps = {
  companyName: string
  jobTitle: string
  status: string
  description: string
  id: string | undefined
  priority: number | undefined
}
const JobCardNew: React.FC<CardProps> = ({
  companyName,
  jobTitle,
  status,
  id,
  description,
  priority
}: CardProps) => {
  const HIGH_PRIORITY = 3
  const MED_PRIORITY = 7
  const dispatch = useAppDispatch()
  const [deleteJob] = useDeleteJobMutation()
  const [daysToActivity, setDaysToActivity] = useState(-1)
  const [expired, setExpired] = useState(false)
  //const [started, setStarted] = useState(false)
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
  const getDaysDiff = (dateStr:string) => {
    const todayTimestamp = + new Date()
    const timestamp = toTimestamp(dateStr)
    const timestampDiffToNow = timestamp - todayTimestamp
    return totalDays(timestampDiffToNow)

  }
  
  useEffect(() => {
    
    if (data.length > 0 ) {
      // we want to find the activity with the closest start_date to now
      //first assume the first activity in the data array will be the closest and we set the daysToActivity equal to the days 
      //difference from now to the activity start date
      let daysTo = getDaysDiff(data[0].start_date)
      
      //now we loop through the array comparing the values
      for (let i = 1; i < data.length; i++ ) {
        const daysDiff = getDaysDiff(data[i].start_date)
        // we want to find the closest day, that is, the smallest days difference
        // if the daysDiff is less than 0, it means the date is passed and the activity is expired => find another one that is coming next
        if (daysDiff < 0 ) {
          setExpired(true)
          continue
        } else if (daysDiff < daysTo) {
          daysTo = daysDiff
          //setDaysToActivity(daysDiff)
        }
      }
      setDaysToActivity(daysTo)
      // after the loop, the daysToActivity state variable contains the closest day difference 
      
      // now, based on the closest day difference, we can set the card's priority 
      let newPriority = 3
      if ( daysTo <= HIGH_PRIORITY)  {
        newPriority = 1
      } else if (daysTo <= MED_PRIORITY) {
        newPriority = 2
      }
      dispatch(setPriority({jobId: id, priority: newPriority}))
    }
    
  
  }, [data, dispatch])

  function deleteHandler() {
    if (typeof id === "number") {
      dispatch(deleteUserJob(id))
    }
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
      <Accordion >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx = { {color: 'white'}}/>}
          aria-controls="panel1a-content"
          id="panel1a-header"
          sx = {{
            backgroundColor: 'rgb(70, 158, 84)',
            color: 'white',
            ...(priority == 1 && {
              backgroundColor: 'rgb(207, 55, 55)'
            }),
            ...(priority == 2 && {
              backgroundColor: 'rgb(245, 190, 71)'
            })
          }}
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
          {daysToActivity >= 0 && expired == false && (
            <Typography fontSize={12} ml={2}>
              {daysToActivity == 0 ? `Next activity today`: `Next activity in ${daysToActivity} ${daysToActivity == 1 ? "day": "days"}`}
            </Typography>
          )}
          { expired == true && (
            <Typography fontSize={12} ml={2}>
              {daysToActivity == 0 ? `Next activity today`: `Next activity in ${daysToActivity} ${daysToActivity == 1 ? "day": "days"}`}
            </Typography>
          )}
          
        </AccordionSummary>
        <AccordionDetails 
          sx = {{
            backgroundColor: 'rgba(70, 158, 85, 0.274)',
            color: 'white',
            ...(priority == 1 && {
              backgroundColor: 'rgba(207, 55, 55, 0.267)',
            }),
            ...(priority == 2 && {
              backgroundColor: 'rgba(245, 190, 71, 0.226)'
            })
          }}
        >
          {description && (
            <>
            <Typography variant = "overline" component = "h2" sx = {{color: 'gray' }}>
              Description
            </Typography>
            <Typography variant = "body1" display = "block" sx = {{color: 'gray' }}>
              {description}
            </Typography>
            </>
          )}
          
          <ActivityContainer jobId={id} />
          <div style={{ display: 'flex', gap: '1rem', marginTop: '20px' }}>
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
              <Button variant="contained" onClick={() =>deleteHandler()} sx = {{
                  backgroundColor: "rgb(23, 160, 160)",
                  ...(priority == 1 && {
                    color: 'rgb(77, 77, 77)',
                    backgroundColor: "rgb(230, 99, 99)",
                  }),
                  ...(priority == 2 && {
                    color: 'rgb(77, 77, 77)',
                    backgroundColor: "rgb(216, 186, 88)",
                  }),
                  ...(priority == 3 && {
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
