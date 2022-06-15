import { useEffect, useState } from 'react'
import {
  useFetchActivitiesQuery,
  Activity,
} from '../../features/activities/activities-slice'
// import Activity from '../Activity_Components/Activity'
import { DataGrid, GridColDef, GridCellParams } from '@mui/x-data-grid'
import ActivityForm from '../Activity_Components/ActivityForm'
import EditIcon from '@mui/icons-material/Edit'
import { Button, Modal, Typography } from '@mui/material'
import {
  StyledBox,
  StyledCloseButton,
  StyledModalHeader,
} from '../../styles/styles'
import { IoCloseCircleOutline } from 'react-icons/io5'
import {useAppDispatch}  from '../../app/hooks'
import { setPriority } from '../../features/user/user-slice'

type ActivitiesProps = {
  jobId: string | undefined
}

const ActivityContainer: React.FC<ActivitiesProps> = ({
  jobId,
}: ActivitiesProps) => {
  const HIGH_PRIORITY = 3
  const MED_PRIORITY = 7
  const { data = [], isLoading } = useFetchActivitiesQuery(jobId)
  //const jobsList = useAppSelector(state => state.user.jobs)
  //const job = jobsList.filter( job => job.ID = jobId)[0]
  const [open, setOpen] = useState(false)
  const [currentActivity, setCurrentActivity] = useState<Activity>()
  const dispatch = useAppDispatch()
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)
  const closePopup = () => {
    setOpen(false)
  }
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
      let priority = ''
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
            priority = 'high'
          } else if (daysDiff > HIGH_PRIORITY && daysDiff <= MED_PRIORITY) {
            priority = 'medium'
          }
      }
      console.log('priority', priority)
      dispatch(setPriority({jobId, priority}))
    }
  
  }, [data])

  const DoEdit = (activity: Activity): void => {
    console.log(activity)
    setCurrentActivity(activity)
    setOpen(true)
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
      <Modal
        open={open}
        onClose={handleOpen}
        title="modal"
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <StyledBox>
          <StyledModalHeader>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Edit Activity
            </Typography>
            <StyledCloseButton onClick={handleClose} title="close-modal">
              <IoCloseCircleOutline size={30} color="white" />
            </StyledCloseButton>
          </StyledModalHeader>
          <ActivityForm
            job_id={jobId}
            currentActivity={currentActivity}
            closePopup={closePopup}
          />
        </StyledBox>
      </Modal>
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
