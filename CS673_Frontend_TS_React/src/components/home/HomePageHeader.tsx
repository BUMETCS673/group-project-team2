import * as React from 'react'
import { StyledHomeHeaderContainer, GradientHeader } from '../../styles/styles'

import Backdrop from '@mui/material/Backdrop'
import Box from '@mui/material/Box'
import Modal from '@mui/material/Modal'
import Fade from '@mui/material/Fade'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import BasicModal from '../general/BasicModal'
import { Paper } from '@mui/material'
import { LegendToggle } from '@mui/icons-material'

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
        <Button sx= {{":focus": {backgroundColor: "transparent"}}} onClick={handleOpen}><LegendToggle /></Button>
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
                  marginBottom: '1rem',
                  padding: '1rem',
                  bgcolor: '#ffe3e3',
                }}
              >
                Activity coming up within 3 days
              </Paper>
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
        <BasicModal type="job" title="add" buttonTitle="Add Job" />

      </div>
    </StyledHomeHeaderContainer>
  )
}
export default HomePageHeader
