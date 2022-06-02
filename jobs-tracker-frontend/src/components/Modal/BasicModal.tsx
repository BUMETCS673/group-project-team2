import React from 'react'
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

import {StyledBox,  StyledModalHeader, StyledModalFooter} from '../../styles/styles'
import Button from '@mui/material/Button';

const BasicModal = () => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (
        <div>
            {/*<AddBtn onClick = {handleOpen}/>*/}
            <Button onClick={handleOpen}>Open modal</Button>
            <Modal
                open = {open}
                onClose = {handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <StyledBox>
                    <StyledModalHeader id="modal-modal-title">
                        <Typography variant="h6" component="h2">
                            Text in a modal
                        </Typography>
                    </StyledModalHeader>
                    
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                    </Typography>
                    <StyledModalFooter>
                        button
                    </StyledModalFooter>

                </StyledBox>


            </Modal>
        </div>

    )
}
export default BasicModal