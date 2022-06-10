import React from 'react'
import Typography from '@mui/material/Typography';
import {StyledBox,  StyledModalHeader, StyledAddBtn, StyledCloseButton} from '../styles/styles'
import { MdAdd } from 'react-icons/md'
import { IoCloseCircleOutline } from "react-icons/io5";
import Modal from '@mui/material/Modal';
import JobForm from "./Job_Components/JobForm"


const BasicModal = () => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (
        <div>
            <StyledAddBtn  onClick = {handleOpen} data-testid = "add-job-btn">
                <p>New</p>
                <MdAdd size={25} />
            </StyledAddBtn>
            <Modal
                open = {open}
                onClose = {handleClose}
                title = "modal"
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <StyledBox>
                    <StyledModalHeader>
                        <Typography id="modal-modal-title" variant="h6" component="h2">
                            Text in a modal
                        </Typography>
                        <StyledCloseButton onClick = {handleClose} data-testid = "close-modal-btn">
                            <IoCloseCircleOutline size = {30} color= 'white' />
                        </StyledCloseButton>
                    </StyledModalHeader>
                    
                    <JobForm onHandleClose = {handleClose}/>

                        
                </StyledBox>
            </Modal>    
        </div>

    )
}
export default BasicModal