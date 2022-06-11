import { useEffect } from 'react'
import { useFetchActivitiesQuery } from '../../features/activities/activities-slice'
import Activity from '../Activity_Components/Activity'

type ActivitiesProps = {
  jobId: string | undefined
}

const ActivityContainer: React.FC<ActivitiesProps> = ({
  jobId,
}: ActivitiesProps) => {
  const { data = [], isLoading } = useFetchActivitiesQuery(jobId, {
    skip: jobId === undefined,
  })

  useEffect(() => {}, [data])
  console.log(data)
  if (isLoading) return <div>Is loading</div>
  if (data) console.log(data)
  return (
    <div>
      {data.length !== 0 ? (
        data.map((activity) => {
          console.log('activity', activity)
          return (
            <Activity
              jobId={activity.job_id}
              category={activity.category}
              description={activity.description}
              startDate={activity.start_date}
              endDate={activity.end_date}
              status={activity.status}
            />
          )
        })
      ) : (
        <div>No activities</div>
      )}
    </div>
  )
}

export default ActivityContainer
