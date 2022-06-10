import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Job }from '../../types/types'

interface UserState {
    token: string;
    jobs: Job[]
}


const initialState: UserState = {
    token: "",
    jobs: []
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
        addJob(state, action:PayloadAction<Job>) {
            state.jobs.concat(action.payload)
        }
    }
})
export const { setUserToken, receiveJobs, addJob } = userSlice.actions
export default userSlice.reducer