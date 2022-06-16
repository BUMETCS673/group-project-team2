import { StyledHomeHeaderContainer, GradientHeader } from '../styles/styles'

// import SortBySelect from './SortBySelect'
import BasicModal from './BasicModal'
//import JobForm from './Job_Components/JobForm'
//import { useState } from 'react'

const HomePageHeader = () => {
  
  return (
    <StyledHomeHeaderContainer>
      <GradientHeader>Jobs</GradientHeader>

      <div
        style={{
          display: 'flex',
          justifyContent: 'flex-end',
          marginRight: '10%',
        }}
      >
        {/* <SortBySelect /> */}
        <BasicModal
          type = 'job'
          title="add"
          buttonTitle="Add Job"
        />
        {/*<AddBtn />*/}
      </div>
    </StyledHomeHeaderContainer>
  )
}
export default HomePageHeader
