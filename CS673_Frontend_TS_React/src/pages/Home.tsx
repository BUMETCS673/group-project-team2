import React, {useEffect} from 'react'
import { StyledCardsContainer } from '../styles/styles'
import HomePageHeader from '../components/HomePageHeader'
import { useAuth0 } from '@auth0/auth0-react'
import {useAppDispatch, useAppSelector} from '../app/hooks'
import { setUserToken } from '../features/user/user-slice'
import JobCardList from '../components/Job_Components/JobCardList'
//import CircularProgress from '@mui/material/CircularProgress';



export const Home = () => {
  const { user, isAuthenticated, getAccessTokenSilently } = useAuth0()
  const dispatch = useAppDispatch()
  useEffect(()=> {
    if (isAuthenticated && user) {
    const getClaims = async () => {
      const claims = await getAccessTokenSilently()
      console.log('token', claims)
      dispatch(setUserToken(claims))
    }
    getClaims()}
  }, [isAuthenticated])
  const userToken = useAppSelector(state => state.user.token)
  console.log("userToken", userToken)
  console.log("userToken length", userToken.length)
  return (
    <StyledCardsContainer>
      {userToken.length != 0  && (
        <>
          <HomePageHeader />
          <br />
          <br />
          <br />
          <JobCardList/>
        </>
      )}
    </StyledCardsContainer>
  )

}