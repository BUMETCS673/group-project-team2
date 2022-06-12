import { StyledHomeHeaderContainer } from '../styles/styles'

import SortBySelect from './SortBySelect'
import BasicModal from './BasicModal'
import JobForm from './Job_Components/JobForm'
import { useState } from 'react'

const HomePageHeader = () => {
  const [open, setOpen] = useState(false)
  const closePopup = () => {
    setOpen(false)
  }
  return (
    <StyledHomeHeaderContainer>
      <h1>Jobs</h1>
      <div>
        <SortBySelect />
        <BasicModal
          form={<JobForm closePopup={closePopup} />}
          title="Add New Job"
          buttonTitle="Add Job"
          open={open}
          setOpen={setOpen}
        />
        {/*<AddBtn />*/}
      </div>
    </StyledHomeHeaderContainer>
  )
}
export default HomePageHeader
