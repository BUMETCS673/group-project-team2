import React from 'react'
import JobCard from '../components/JobCard'
import {StyledCardsContainer} from '../styles/styles'
import HomePageHeader from '../components/HomePageHeader'
// import Counter from '../components/counter/Counter'

export const Home= () => {
  return (
    <StyledCardsContainer>
      <HomePageHeader/>
      
      <JobCard/>
    </StyledCardsContainer>
  )
}
