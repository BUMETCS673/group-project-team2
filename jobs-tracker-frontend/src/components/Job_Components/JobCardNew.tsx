import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import Typography from '@mui/material/Typography'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
// import { useAuth0 } from '@auth0/auth0-react'
// import { jobData } from '../../data/mockdata'

type CardProps = {
  companyName: string
  jobTitle: string
  status: string
}
const JobCardNew: React.FC<CardProps> = ({
  companyName,
  jobTitle,
  status,
}: CardProps) => {
  return (
    <div style={{ marginBottom: '2rem' }}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography fontSize = {16} mr= {2}>{`${companyName}`}</Typography>
          <Typography fontSize = {18}>{`|`}</Typography>
          <Typography fontSize = {14} mr= {2} ml= {2}>{`${jobTitle} `} </Typography>
          <Typography fontSize = {18}>{`|`}</Typography>
          <Typography fontSize = {12} ml= {2}>{`${status}`}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <ul>
              <li>Activity 1</li>
              <li>Activity 2</li>
              <li>Activity 3</li>
            </ul>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  )
}

export default JobCardNew
