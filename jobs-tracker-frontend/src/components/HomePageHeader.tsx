import { StyledHomeHeaderContainer } from '../styles/styles'
import AddBtn from './Job_Components/AddBtn'
import SortBySelect from './SortBySelect'
const HomePageHeader = () => (
  <StyledHomeHeaderContainer>
    <h1>Jobs</h1>
    <div>
      <SortBySelect />
      <AddBtn />
    </div>
  </StyledHomeHeaderContainer>
)
export default HomePageHeader
