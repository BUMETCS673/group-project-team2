import { useState } from 'react'
import {
  useFetchActivitiesQuery,
  useDeleteActivityMutation,
} from '../../redux/slices/api/activities'
import { Activity } from '../../types/types'
import { DataGrid, GridColDef, GridCellParams } from '@mui/x-data-grid'
import ActivityForm from '../Activity_Components/ActivityForm'
import EditIcon from '@mui/icons-material/Edit'
import DeleteIcon from '@mui/icons-material/Delete'
import { Button, Modal, Typography } from '@mui/material'
import {
  StyledBox,
  StyledCloseButton,
  StyledModalHeader,
} from '../../styles/styles'
import { IoCloseCircleOutline } from 'react-icons/io5'


type ActivitiesProps = {
  jobId: string | undefined
}

const ActivityContainer: React.FC<ActivitiesProps> = ({
  jobId,
}: ActivitiesProps) => {
  const { data = [], isLoading } = useFetchActivitiesQuery(jobId)
  const [open, setOpen] = useState(false)
  const [currentActivity, setCurrentActivity] = useState<Activity>()

  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)
  const closePopup = () => {
    setOpen(false)
  }

  const [deleteActivity] = useDeleteActivityMutation()

  const deleteHandler = (activity: Activity) => {
    console.log(activity)
    deleteActivity({ ID: activity.ID })
  }

  const DoEdit = (activity: Activity): void => {
    setCurrentActivity(activity)
    setOpen(true)
  }

  const columns: GridColDef[] = [
    { field: 'Category', headerName: 'Category' },
    { field: 'Description', headerName: 'Description' },
    {
      field: 'StartDate',
      headerName: 'StartDate',
      description: 'Start Date of Activity',

      type: 'date',
      flex: 1,
      minWidth: 150,
    },
    {
      field: 'EndDate',
      headerName: 'End Date',
      description: 'Start Date of Activity',

      sortable: true,
      flex: 1,
      minWidth: 150,
    },
    {
      field: 'Status',
      headerName: 'Status',
      description: 'Status of Activity',
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
    {
      field: 'DeleteActivity',
      headerName: 'Delete',

      renderCell(params: GridCellParams) {
        return (
          <Button
            variant="outlined"
            onClick={() => deleteHandler(params.value)}
          >
            <DeleteIcon />
          </Button>
        )
      },
    },
  ]

  if (isLoading) return <div>Is loading</div>

  const rows = data.map((activity) => {
    return {
      ID: activity.ID,
      Category: activity.category,
      Description: activity.description,
      StartDate: activity.start_date,
      EndDate: activity.end_date,
      Status: activity.status,
      EditActivity: activity,
      DeleteActivity: activity,
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
    <div style={{ marginTop: 15 }}>
      <Typography variant="overline" component="h2" sx={{ color: 'gray' }}>
        Activities
      </Typography>
      {data.length !== 0 ? (
        <DataGrid
          autoHeight
          rows={rows}
          columns={columns}
          pageSize={10}
          rowsPerPageOptions={[5, 10]}
          checkboxSelection={false}
          getRowId={(row) => row.ID}
          sx={{
            boxShadow: 1,
            marginBottom: 3,
            backgroundColor: '#f2f2f2',
          }}
        />
      ) : (
        <div style={{ marginBottom: '2rem', color: 'gray' }}>
          <em>No activities</em>
        </div>
      )}
      {renderModal()}
    </div>
  )
}

export default ActivityContainer
