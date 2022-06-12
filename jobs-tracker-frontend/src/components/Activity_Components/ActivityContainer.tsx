import { useEffect, useState } from 'react'
import { useFetchActivitiesQuery } from '../../features/activities/activities-slice'
// import Activity from '../Activity_Components/Activity'
import { DataGrid, GridColDef, GridCellParams } from '@mui/x-data-grid'
import BasicModal from '../BasicModal'
import ActivityForm from '../Activity_Components/ActivityForm'

type ActivitiesProps = {
  jobId: string | undefined
}

const ActivityContainer: React.FC<ActivitiesProps> = ({
  jobId,
}: ActivitiesProps) => {
  const [open, setOpen] = useState(false)
  const closePopup = () => setOpen(false)

  const { data = [], isLoading } = useFetchActivitiesQuery(jobId)

  useEffect(() => {}, [data])
  const columns: GridColDef[] = [
    // { field: 'JobID', headerName: 'JobID', width: 70 },
    { field: 'Category', headerName: 'Category', width: 130 },
    { field: 'Description', headerName: 'Description', width: 130 },
    {
      field: 'StartDate',
      headerName: 'StartDate',
      type: 'date',
      width: 90,
    },
    {
      field: 'EndDate',
      headerName: 'End Date',
      description: 'This column has a value getter and is not sortable.',
      sortable: true,
      width: 90,
    },
    {
      field: 'Status',
      headerName: 'Status',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 90,
    },
    {
      field: 'EditActivity',
      headerName: 'EditActivity',
      width: 150,
      renderCell(params: GridCellParams) {
        return (
          <BasicModal
            form={
              <ActivityForm
                job_id={jobId}
                currentActivity={params}
                closePopup={closePopup}
              />
            }
            title="Edit Activity"
            buttonTitle="Edit"
            open={open}
            setOpen={setOpen}
          />
        )
      },
    },
  ]

  console.log(data)
  if (isLoading) return <div>Is loading</div>
  if (data) console.log(data)

  const rows = data.map((activity) => {
    return {
      ID: activity.ID,
      // JobID: activity.job_id,
      Category: activity.category,
      Description: activity.description,
      StartDate: activity.start_date,
      EndDate: activity.end_date,
      Status: activity.status,
      EditActivity: activity,
    }
  })

  return (
    <div style={{ height: '500px', width: '50vw' }}>
      {data.length !== 0 ? (
        // data.map((activity) => {
        //   console.log('activity', activity)
        //   return (
        //     <>
        //       <Activity
        //         jobId={activity.job_id}
        //         category={activity.category}
        //         description={activity.description}
        //         startDate={activity.start_date}
        //         endDate={activity.end_date}
        //         status={activity.status}
        //         ID={activity.ID}
        //       />

        //     </>
        //   )
        // }
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          checkboxSelection={true}
          getRowId={(row) => row.ID}
        />
      ) : (
        <div>No activities</div>
      )}
    </div>
  )
}

export default ActivityContainer
