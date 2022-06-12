import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import Typography from '@mui/material/Typography'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import ActivityContainer from '../Activity_Components/ActivityContainer'
import ActivityForm from '../Activity_Components/ActivityForm'
import BasicModal from '../BasicModal'
// import { useAuth0 } from '@auth0/auth0-react'
// import { jobData } from '../../data/mockdata'
import { useState } from 'react'
import { useDeleteJobMutation } from '../../features/jobs/jobs-api-slice'
import JobForm from './JobForm'

type CardProps = {
  companyName: string
  jobTitle: string
  status: string
  id: string | undefined
}

const JobCardNew: React.FC<CardProps> = ({
  companyName,
  jobTitle,
  status,
  id,
}: CardProps) => {
  const [deleteJob] = useDeleteJobMutation()

  const [activityOpen, setActivityOpen] = useState(false)
  const [jobOpen, setJobOpen] = useState(false)

  const closePopup = () => {
    setJobOpen(false)
    setActivityOpen(false)
  }

  function deleteHandler() {
    deleteJob({ ID: id })
  }

  return (
    <div
      style={{
        marginBottom: '4rem',
        display: 'flex',
        gap: '2rem',
      }}
    >
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
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
          <BasicModal
            form={<ActivityForm job_id={id} closePopup={closePopup} />}
            title="Add Activity"
            buttonTitle="Add Activity"
            open={activityOpen}
            setOpen={setActivityOpen}
          />
          <BasicModal
            form={<JobForm job_id={id} closePopup={closePopup} />}
            title="Edit Job"
            buttonTitle="Edit Job"
            open={jobOpen}
            setOpen={setJobOpen}
          />
        </AccordionDetails>
      </Accordion>
      <div style={{ justifySelf: 'flex-end' }}>
        Delete Job
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="22"
          viewBox="0 0 24 24"
          width="22"
          // style={{ position: 'absolute', top: 0, right: 100 }}
          onClick={deleteHandler}
        >
          <path d="M0 0h24v24H0z" fill="none" />
          <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z" />
        </svg>
      </div>
    </div>
  )
}

export default JobCardNew
