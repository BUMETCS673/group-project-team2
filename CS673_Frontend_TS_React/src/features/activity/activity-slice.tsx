import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface ActivityState {
  jobId: string
  category: string
  description: string
  startDate: string
  endDate: string
  status: string
}

const initialState: ActivityState = {
  jobId: '',
  category: '',
  description: '',
  startDate: '',
  endDate: '',
  status: '',
}

const activitySlice = createSlice({
  name: 'activity',
  initialState,
  reducers: {
    setActivity(state, action: PayloadAction<ActivityState>) {
      state.jobId = action.payload.jobId
      state.category = action.payload.category
      state.description = action.payload.description
      state.startDate = action.payload.startDate
      state.endDate = action.payload.endDate
      state.status = action.payload.status
    },
  },
})
export const { setActivity } = activitySlice.actions
export default activitySlice.reducer
