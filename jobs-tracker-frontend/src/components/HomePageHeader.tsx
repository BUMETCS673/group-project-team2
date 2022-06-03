import { StyledHomeHeaderContainer } from '../styles/styles'

import SortBySelect from './SortBySelect'
import BasicModal from './Modal/BasicModal'
const HomePageHeader = () => (
  <StyledHomeHeaderContainer>
    <h1>Jobs</h1>
    <div>
      <SortBySelect />
      <BasicModal/>
      {/*<AddBtn />*/}
    </div>
  </StyledHomeHeaderContainer>
)
export default HomePageHeader
