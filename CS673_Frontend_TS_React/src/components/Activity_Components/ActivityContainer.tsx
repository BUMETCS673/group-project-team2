import { useState } from 'react'
import {
  useFetchActivitiesQuery,
  Activity,
} from '../../features/activities/activities-slice'
// import Activity from '../Activity_Components/Activity'
import { DataGrid, GridColDef, GridCellParams } from '@mui/x-data-grid'
import EditIcon from '@mui/icons-material/Edit'
import { Button } from '@mui/material'
import BasicModal from '../BasicModal'
// import {useAppDispatch}  from '../../app/hooks'
// import { setPriority } from '../../features/user/user-slice'

type ActivitiesProps = {
  jobId: string | undefined
}

const ActivityContainer: React.FC<ActivitiesProps> = ({
  jobId,
}: ActivitiesProps) => {
  const { data = [], isLoading } = useFetchActivitiesQuery(jobId)

  const [currentActivity, setCurrentActivity] = useState<Activity>()

  const DoEdit = (activity: Activity): void => {
    console.log(activity)
    setCurrentActivity(activity)
  }

  const columns: GridColDef[] = [
    // { field: 'JobID', headerName: 'JobID', width: 70 },
    { field: 'Category', headerName: 'Category' },
    { field: 'Description', headerName: 'Description' },
    {
      field: 'StartDate',
      headerName: 'StartDate',
      type: 'date',
    },
    {
      field: 'EndDate',
      headerName: 'End Date',
      description: 'This column has a value getter and is not sortable.',
      sortable: true,
    },
    {
      field: 'Status',
      headerName: 'Status',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
    },
    {
      field: 'EditActivity',
      headerName: 'Edit',

      renderCell(params: GridCellParams) {
        return (
          <Button variant="outlined" onClick={() => DoEdit(params.value)}>
            <EditIcon />
          </Button>
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

  const renderModal = () => {
    return (
      <BasicModal job_id = {jobId} type = 'activity' title = 'edit' buttonTitle = 'Edit' currentActivity = {currentActivity}/>
    )
  }

  return (
    <div>
      {data.length !== 0 ? (
        <DataGrid
          autoHeight
          rows={rows}
          columns={columns}
          pageSize={10}
          rowsPerPageOptions={[5, 10]}
          checkboxSelection={false}
          getRowId={(row) => row.ID}
          // style={{ height: '500px' }}
        />
      ) : (
        <div style={{ marginBottom: '2rem' }}>
          <em>No activities</em>
        </div>
      )}
      {renderModal()}
    </div>
  )
}

export default ActivityContainer
