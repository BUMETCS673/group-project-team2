import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Job }from '../../types/types'
interface UserState {
    token: string
    jobs: Job[]
}

const initialState: UserState = {
    token: "",
    jobs:[]
}
interface Priority {
    jobId: string | number | undefined,
    priority: number | undefined,

}


const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUserToken(state, action: PayloadAction<string>) {
            state.token = action.payload
        },
        receiveJobs(state, action:PayloadAction<Job[]>) {
            state.jobs = action.payload
        }, 
        setPriority(state, action:PayloadAction<Priority>) {

            state.jobs.filter(job => job.ID == action.payload.jobId)[0].priority = action.payload.priority 
        },
        deleteUserJob(state, action:PayloadAction<number>) {
            state.jobs = state.jobs.filter( job => job.ID != action.payload)
        }
    }
})
export const { setUserToken, receiveJobs, setPriority, deleteUserJob } = userSlice.actions
export default userSlice.reducer