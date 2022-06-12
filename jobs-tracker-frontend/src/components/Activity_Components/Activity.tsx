import BasicModal from '../BasicModal'
import ActivityForm from './ActivityForm'

import { Activity as ActivityType } from '../../features/activities/activities-slice'
import { useState } from 'react'

type ActivityProps = {
  jobId: string
  category: string
  description: string
  startDate: string
  endDate: string
  status: string
  ID: number | undefined
}

const Activity: React.FC<ActivityProps> = ({
  jobId,
  category,
  description,
  startDate,
  endDate,
  status,
  ID,
}: ActivityProps) => {
  const [open, setOpen] = useState(false)
  const closePopup = () => setOpen(false)

  return (
    <>
      <ul>
        <li>Job ID : {jobId}</li>
        <li>Category : {category}</li>
        <li>Description : {description}</li>
        <li>Start Date : {startDate}</li>
        <li>End Date : {endDate}</li>
        <li>Status : {status}</li>
      </ul>

      {/* <BasicModal
        form={
          <ActivityForm
            job_id={jobId}
            currentActivity={activity}
            closePopup={closePopup}
          />
        }
        title="Edit Activity"
        buttonTitle="Edit"
        open={open}
        setOpen={setOpen}
      /> */}
    </>
  )
}

export default Activity
