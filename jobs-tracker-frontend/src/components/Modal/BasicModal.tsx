import React from 'react'
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import {StyledBox,  StyledModalHeader, StyledModalFooter, StyledAddBtn, StyledCloseButton, StyledSaveBtn} from '../../styles/styles'
import { MdAdd } from 'react-icons/md'
import { IoCloseCircleOutline } from "react-icons/io5";

const BasicModal = () => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (
        <div>
            {/*<AddBtn onClick = {handleOpen}/>*/}
            <StyledAddBtn onClick = {handleOpen}>
                <p>New</p>
                <MdAdd size={25} />
            </StyledAddBtn>
            <Modal
                open = {open}
                onClose = {handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <StyledBox>
                    <StyledModalHeader >
                        <Typography id="modal-modal-title" variant="h6" component="h2">
                            Text in a modal
                        </Typography>
                        <StyledCloseButton onClick = {handleClose}>
                            <IoCloseCircleOutline size = {30} color= 'white'/>
                        </StyledCloseButton>
                    </StyledModalHeader>
                    
                    <Typography id="modal-modal-description" sx={{ m: 2 }}>
                        Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                    </Typography>
                    <StyledModalFooter>
                        <StyledSaveBtn>
                            <p>
                                Save
                            </p>
                        </StyledSaveBtn>
                        
                    </StyledModalFooter>

                </StyledBox>


            </Modal>
        </div>

    )
}
export default BasicModal