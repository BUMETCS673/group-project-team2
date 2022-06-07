import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface JobState {
    id: number,
    userId: number,
    companyName : string,
    jobTitle: string,
    description: string,
    status: string,
    link: string,
    createdAt: Date,
    updatedAt: Date, 
}

const initialState: JobState = {
    id: 0,
    userId: 0,
    companyName : "",
    jobTitle: "",
    description: "",
    status: "",
    link: "",
    createdAt: new Date(),
    updatedAt: new Date(), 
}

const jobSlice = createSlice({
    name: 'job',
    initialState,
    reducers: {
        addJob(state, action: PayloadAction<JobState>) {
            state.id = action.payload.id
            state.companyName = action.payload.companyName
            state.jobTitle = action.payload.jobTitle
            state.link = action.payload.link
            state.status = action.payload.status
            state.userId = action.payload.userId
            state.description = action.payload.description
            state.createdAt = action.payload.createdAt
            state.updatedAt = action.payload.updatedAt
        }
    }
})
export const { addJob } = jobSlice.actions
export default jobSlice.reducer