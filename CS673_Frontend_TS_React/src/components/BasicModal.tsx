import React from 'react'
import Typography from '@mui/material/Typography'
import {
  StyledBox,
  StyledModalHeader,
  StyledCloseButton,
} from '../styles/styles'
import { IoCloseCircleOutline } from 'react-icons/io5'
import Modal from '@mui/material/Modal'
import { Button } from '@mui/material'
import AddIcon from '@mui/icons-material/Add'
// import { useAppDispatch, useAppSelector } from '../app/hooks'
// import { openBasicModal, closeBasicModal } from '../features/UI/ui_slice'
//import { useState } from 'react'
 import JobForm from './Job_Components/JobForm'
 import ActivityForm from './Activity_Components/ActivityForm'
 import EditIcon from '@mui/icons-material/Edit';
 import useMediaQuery from '@mui/material/useMediaQuery';
 import {Activity} from '../types/types'

type ModalProps = {
  type: string 
  title: string
  buttonTitle: string
  job_id?: string | undefined
  insideCard?: boolean
  priority? : number
  currentActivity? : Activity,
 
}

const BasicModal: React.FC<ModalProps> = ({
  type,
  title,
  buttonTitle,
  job_id,
  insideCard,
  priority,
  currentActivity,
  
}: ModalProps) => {
  const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const matches = useMediaQuery("(min-width:600px)");

  return (
    <div>
      <Button 
        variant="contained" 
        onClick={handleOpen} 
        data-testid = "modal-btn" 
        
        sx = {{
          backgroundColor: "rgb(23, 160, 160)",
          ...(insideCard && priority == 1 && {
            color: 'rgb(77, 77, 77)',
            backgroundColor: "rgb(230, 99, 99)",
          }),
          ...(insideCard && priority == 2 && {
            color: 'rgb(77, 77, 77)',
            backgroundColor: "rgb(216, 186, 88)",
          }),
          ...(insideCard && priority == 3 && {
            color: 'rgb(77, 77, 77)',
            backgroundColor: "rgb(100, 190, 115)",
          }),
          
        }}
        >
        {title == "add" ? (<> 
          <AddIcon />
          <Typography>
            {buttonTitle}
          </Typography>
        </>) : ( <>
          <EditIcon/> 
          {matches && (
            <Typography>
            {buttonTitle}
          </Typography>
          )}
        </>) }
      </Button>

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
              {title}
            </Typography>
            <StyledCloseButton onClick={handleClose} title="close-modal" data-testid = "close-modal-btn">
              <IoCloseCircleOutline size={30} color="white" />
            </StyledCloseButton>
          </StyledModalHeader>

          {/* <JobForm /> */}
          {type == 'job' ? <JobForm job_id = {job_id} closePopup = {handleClose} /> : <ActivityForm job_id = {job_id} closePopup = {handleClose} currentActivity = {currentActivity}/> }
        </StyledBox>
      </Modal>
    </div>
  )
}
export default BasicModal
