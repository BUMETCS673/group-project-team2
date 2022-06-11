type ActivityProps = {
  jobId: string
  category: string
  description: string
  startDate: string
  endDate: string
  status: string
}

const Activity: React.FC<ActivityProps> = ({
  jobId,
  category,
  description,
  startDate,
  endDate,
  status,
}: ActivityProps) => {
  console.log(jobId, category, description, startDate, endDate, status)
  return (
    <ul>
      <li>Job ID : {jobId}</li>
      <li>Category : {category}</li>
      <li>Description : {description}</li>
      <li>Start Date : {startDate}</li>
      <li>End Date : {endDate}</li>
      <li>Status : {status}</li>
    </ul>
  )
}

export default Activity
