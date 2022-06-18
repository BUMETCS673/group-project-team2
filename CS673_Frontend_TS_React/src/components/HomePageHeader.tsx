import * as React from 'react'
import { StyledHomeHeaderContainer, GradientHeader } from '../styles/styles'

import Backdrop from '@mui/material/Backdrop'
import Box from '@mui/material/Box'
import Modal from '@mui/material/Modal'
import Fade from '@mui/material/Fade'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import BasicModal from './BasicModal'
import { Paper } from '@mui/material'

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
}

const HomePageHeader = () => {
  const [open, setOpen] = React.useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  return (
    <StyledHomeHeaderContainer>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <GradientHeader>Jobs</GradientHeader>
        <Button onClick={handleOpen}>Card Legend</Button>
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          open={open}
          onClose={handleClose}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Fade in={open}>
            <Box sx={style}>
              <Typography
                id="transition-modal-title"
                variant="h6"
                component="h2"
                fontWeight={700}
              >
                Job Card Color Schema
              </Typography>

              <Paper
                elevation={3}
                sx={{
                  marginTop: '0.5rem',
                  marginBottom: '1rem',
                  padding: '1rem',
                  bgcolor: '#ffe8cc',
                }}
              >
                Activity is coming up within 7 days
              </Paper>

              <Paper
                elevation={3}
                sx={{
                  marginBottom: '1rem',
                  padding: '1rem',
                  bgcolor: '#ebfbee',
                }}
              >
                No Upcoming Activities within 7 days
              </Paper>

              <Paper
                elevation={3}
                sx={{
                  marginBottom: '1rem',
                  padding: '1rem',
                  bgcolor: '#ffe3e3',
                }}
              >
                Activity is past the due date
              </Paper>

              {/* <table style={{ marginTop: '1rem', padding: '1rem' }}>
                <tr style={{ backgroundColor: '#ffe8cc' }}>
                  <td>Yellow</td>
                  <td>Activity is coming up within 7 days</td>
                </tr>
                <tr style={{ backgroundColor: '#ebfbee' }}>
                  <td>Green</td>
                  <td>No Upcoming Activities within 7 days</td>
                </tr>
                <tr style={{ backgroundColor: '#ffe3e3' }}>
                  <td>Red</td>
                  <td>Activity is past the due date</td>
                </tr>
              </table> */}
            </Box>
          </Fade>
        </Modal>
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'flex-end',
          marginRight: '10%',
        }}
      >
        {/* <SortBySelect /> */}
        <BasicModal type="job" title="add" buttonTitle="Add Job" />

        {/*<AddBtn />*/}
      </div>
    </StyledHomeHeaderContainer>
  )
}
export default HomePageHeader
