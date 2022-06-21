import { configureStore } from '@reduxjs/toolkit'
import jobReducer from '../slices/model/job'
import userReducer from '../slices/model/user'
import activityReducer from '../slices/model/activity'
import uiReducer from '../slices/model/ui'
import { apiSlice } from '../slices/api/jobs'
import { activitySlice } from '../slices/api/activities'

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
