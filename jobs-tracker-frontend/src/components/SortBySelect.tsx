import { StyledSortByContainer, StyledSelect } from "../styles/styles"

const SortBySelect = () => (
    <StyledSortByContainer>
        <p>
            Sort by: 
        </p>
        <StyledSelect>
            <option value = "" >
                one
            </option>
            <option value = "1" >
                dd
            </option>
        </StyledSelect>
    
        
    </StyledSortByContainer>
)
export default SortBySelect