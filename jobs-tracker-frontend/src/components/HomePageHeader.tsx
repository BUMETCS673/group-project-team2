import {StyledHomeHeaderContainer} from '../styles/styles'
import AddBtn from './AddBtn'
import SortBySelect from './SortBySelect'
const HomePageHeader = () => (
    <StyledHomeHeaderContainer>
        <h1>Jobs</h1>
        <div>
            <SortBySelect/>
            <AddBtn/>
        </div>
        

    </StyledHomeHeaderContainer>
)
export default HomePageHeader