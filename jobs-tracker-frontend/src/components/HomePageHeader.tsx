import { StyledHomeHeaderContainer } from '../styles/styles'

import SortBySelect from './SortBySelect'
import BasicModal from './BasicModal'
import JobForm from './Job_Components/JobForm'
// import { useState } from 'react'

const HomePageHeader = () => {
  // const [open, setOpen] = useState(false)
  return (
    <StyledHomeHeaderContainer>
      <h1>Jobs</h1>
      <div>
        <SortBySelect />
        <BasicModal
          form={<JobForm />}
          title="Add New Job"
          buttonTitle="Add Job"
        />
        {/*<AddBtn />*/}
      </div>
    </StyledHomeHeaderContainer>
  )
}
export default HomePageHeader
