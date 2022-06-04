import React from 'react'
import Typography from '@mui/material/Typography';
import {StyledBox,  StyledModalHeader, StyledModalFooter, StyledAddBtn, StyledCloseButton, StyledSaveBtn} from '../styles/styles'
import { MdAdd } from 'react-icons/md'
import { IoCloseCircleOutline } from "react-icons/io5";
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';


const BasicModal = () => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (
        <div>
            <button  onClick = {handleOpen}>
                <p>New</p>
                <MdAdd size={25} />
            </button>
            <Modal
                open = {open}
                onClose = {handleClose}
                title = "modal"
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box>
                        <button onClick = {handleClose} title = "close">
                            <IoCloseCircleOutline size = {30} color= 'white' />
                        </button>
                        <button>
                            <p>
                                Save
                            </p>
                        </button>
                </Box>
            </Modal>    
        </div>

    )
}
export default BasicModal