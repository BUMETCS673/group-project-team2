import React from 'react'
import Typography from '@mui/material/Typography';
import {StyledBox,  StyledModalHeader, StyledAddBtn, StyledCloseButton} from '../styles/styles'
import { MdAdd } from 'react-icons/md'
import { IoCloseCircleOutline } from "react-icons/io5";
import Modal from '@mui/material/Modal';
import JobForm from "./JobForm"


const BasicModal = () => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (
        <div>
            <StyledAddBtn  onClick = {handleOpen} title = "add">
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
                        <StyledCloseButton onClick = {handleClose} title = "close-modal">
                            <IoCloseCircleOutline size = {30} color= 'white' />
                        </StyledCloseButton>
                    </StyledModalHeader>
                    
                    <JobForm/>

                        
                </StyledBox>
            </Modal>    
        </div>

    )
}
export default BasicModal