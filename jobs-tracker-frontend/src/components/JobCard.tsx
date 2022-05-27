import {StyledCardWrapper, StyledCardHeader, StyledCardBody, StyledCardFooter } from '../styles/styles'


const JobCard = () => (
    <StyledCardWrapper>
        <StyledCardHeader>
            <p> header</p>
        </StyledCardHeader>
        <StyledCardBody>
            <h1>COMPANY</h1>
            <h2>JOB TITLE</h2>
        </StyledCardBody>
        <StyledCardFooter>
            <p>
                Next activity date: MM/DD/YYYY
            </p>
            <p>
                5 days ago
            </p>
        </StyledCardFooter>
    </StyledCardWrapper>
)
export default JobCard