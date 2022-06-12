import React from 'react'
import Typography from '@mui/material/Typography'
import {
  StyledBox,
  StyledModalHeader,
  StyledAddBtn,
  StyledCloseButton,
} from '../styles/styles'
import { MdAdd } from 'react-icons/md'
import { IoCloseCircleOutline } from 'react-icons/io5'
import Modal from '@mui/material/Modal'
// import { useAppDispatch, useAppSelector } from '../app/hooks'
// import { openBasicModal, closeBasicModal } from '../features/UI/ui_slice'
//import { useState } from 'react'
// import JobForm from './Job_Components/JobForm'

type JobCard = {
  form: React.ReactNode
  title: string
  buttonTitle: string
  open: boolean
  setOpen: (state: boolean) => void
}

const BasicModal: React.FC<JobCard> = ({
  form,
  title,
  buttonTitle,
  open,
  setOpen,
}: JobCard) => {
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  return (
    <div>
      <StyledAddBtn onClick={handleOpen} title="add">
        <p>{buttonTitle}</p>
        <MdAdd size={25} />
      </StyledAddBtn>
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
            <StyledCloseButton onClick={handleClose} title="close-modal">
              <IoCloseCircleOutline size={30} color="white" />
            </StyledCloseButton>
          </StyledModalHeader>

          {/* <JobForm /> */}
          {form}
        </StyledBox>
      </Modal>
    </div>
  )
}
export default BasicModal
