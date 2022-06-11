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
import { useState } from 'react'
// import JobForm from './Job_Components/JobForm'

type JobCard = {
  form: React.ReactNode
  title: string
  buttonTitle: string
}

const BasicModal: React.FC<JobCard> = ({
  form,
  title,
  buttonTitle,
}: JobCard) => {
  const [localOpen, localSetOpen] = useState(false)

  // const dispatch = useAppDispatch()

  // const open = useAppSelector((state) => state.ui.basicModalOpen)

  const handleLocalOpen = () => localSetOpen(true)
  const handleLocalClose = () => localSetOpen(false)

  // const handleOpen = () => dispatch(openBasicModal())
  // const handleClose = () => dispatch(closeBasicModal())
  // console.log(open, localOpen)
  // if (open != localOpen) {
  //   localSetOpen(open)
  // }
  return (
    <div>
      <StyledAddBtn onClick={handleLocalOpen} title="add">
        <p>{buttonTitle}</p>
        <MdAdd size={25} />
      </StyledAddBtn>
      <Modal
        open={localOpen}
        onClose={handleLocalOpen}
        title="modal"
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <StyledBox>
          <StyledModalHeader>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              {title}
            </Typography>
            <StyledCloseButton onClick={handleLocalClose} title="close-modal">
              <IoCloseCircleOutline size={30} color="white" />
            </StyledCloseButton>
          </StyledModalHeader>
          {/* <button onClick={handleLocalClose}></button>
          <button onClick={handleLocalOpen}></button> */}

          {/* <JobForm /> */}
          {form}
        </StyledBox>
      </Modal>
    </div>
  )
}
export default BasicModal
