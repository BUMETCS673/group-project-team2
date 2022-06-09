import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface JobState {
    ID?: string,
    companyName : string,
    jobTitle: string,
    description: string,
    status: string,
    createdAt?: string,
    updatedAt?: string, 
}

const initialState: JobState = {
    ID: "",
    companyName : "",
    jobTitle: "",
    description: "",
    status: "",
    createdAt: "",
    updatedAt: "", 
}

const jobSlice = createSlice({
    name: 'job',
    initialState,
    reducers: {
        setJob(state, action: PayloadAction<JobState>) {
            state.ID = action.payload.ID
            state.companyName = action.payload.companyName
            state.jobTitle = action.payload.jobTitle
            state.status = action.payload.status
            state.description = action.payload.description
            state.createdAt = action.payload.createdAt
            state.updatedAt = action.payload.updatedAt
        }
    }
})
export const { setJob } = jobSlice.actions
export default jobSlice.reducer