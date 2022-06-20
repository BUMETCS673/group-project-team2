import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface JobState {
  ID?: string
  companyname: string
  jobtitle: string
  description: string
  status: string
  createdAt?: string
  updatedAt?: string
}

const initialState: JobState = {
  ID: '',
  companyname: '',
  jobtitle: '',
  description: '',
  status: '',
  createdAt: '',
  updatedAt: '',
}

const jobSlice = createSlice({
  name: 'job',
  initialState,
  reducers: {
    setJob(state, action: PayloadAction<JobState>) {
      state.ID = action.payload.ID
      state.companyname = action.payload.companyname
      state.jobtitle = action.payload.jobtitle
      state.status = action.payload.status
      state.description = action.payload.description
      state.createdAt = action.payload.createdAt
      state.updatedAt = action.payload.updatedAt
    },
  },
})
export const { setJob } = jobSlice.actions
export default jobSlice.reducer
