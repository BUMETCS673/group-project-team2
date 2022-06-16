import { StyledHomeHeaderContainer, GradientHeader } from '../styles/styles'
// import SortBySelect from './SortBySelect'
import BasicModal from './BasicModal'
//import JobForm from './Job_Components/JobForm'
//import { useState } from 'react'
import { useFetchJobsQuery } from '../features/jobs/jobs-api-slice'
const HomePageHeader = () => {
const {  refetch } = useFetchJobsQuery()
  
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
        <button onClick = {() => refetch()}>
          refetch
        </button>
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
