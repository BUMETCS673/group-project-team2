import { configureStore } from '@reduxjs/toolkit'
import jobReducer from '../features/job/job-slice'
import userReducer from '../features/user/user-slice'
import activityReducer from '../features/activity/activity-slice'
import uiReducer from '../features/UI/ui_slice'
import { apiSlice } from '../features/jobs/jobs-api-slice'
import { activitySlice } from '../features/activities/activities-slice'

export const store = configureStore({
  reducer: {
    job: jobReducer,
    user: userReducer,
    activity: activityReducer,
    ui: uiReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
    [activitySlice.reducerPath]: activitySlice.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(
      apiSlice.middleware,
      activitySlice.middleware
    )
  },
})
export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
