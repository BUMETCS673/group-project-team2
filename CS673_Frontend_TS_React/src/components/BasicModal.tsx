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

type ModalProps = {
  type: string 
  title: string
  buttonTitle: string
  job_id?: string | undefined
}

const BasicModal: React.FC<ModalProps> = ({
  type,
  title,
  buttonTitle,
  job_id
}: ModalProps) => {
  const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

  return (
    <div>
      <Button variant="outlined" onClick={handleOpen} title="add" data-testid = "add-btn">
        <AddIcon />
        {buttonTitle}
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
          {type == 'job' ? <JobForm job_id = {job_id} closePopup = {handleClose} /> : <ActivityForm job_id = {job_id} closePopup = {handleClose} /> }
        </StyledBox>
      </Modal>
    </div>
  )
}
export default BasicModal
