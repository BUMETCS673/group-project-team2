import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import Typography from '@mui/material/Typography'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import ActivityContainer from '../Activity_Components/ActivityContainer'

import BasicModal from '../BasicModal'
// import { useAuth0 } from '@auth0/auth0-react'
// import { jobData } from '../../data/mockdata'

import { useDeleteJobMutation } from '../../features/jobs/jobs-api-slice'

import { Button } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'

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

  

  function deleteHandler() {
    deleteJob({ ID: id })
  }

  return (
    <div
      style={{
        marginBottom: '4rem',
        width: '100%',
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
          <div style={{ display: 'flex', gap: '1rem' }}>
            <div style={{ flexGrow: '1' }}>
              {' '}
              <BasicModal
                job_id={id}
                type = 'activity'
                title="Add Activity"
                buttonTitle="Add Activity"
                
              />
            </div>

            <div style={{ display: 'flex', gap: '1rem' }}>
              {' '}
              <BasicModal
                type = 'job'
                job_id={id}
                title="Edit Job"
                buttonTitle="Edit Job"
                
              />
              <Button variant="outlined" onClick={deleteHandler}>
                <DeleteIcon />
                Delete Job
              </Button>
            </div>
          </div>
        </AccordionDetails>
      </Accordion>
    </div>
  )
}

export default JobCardNew
