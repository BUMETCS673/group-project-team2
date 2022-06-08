import {configureStore} from '@reduxjs/toolkit'
import jobReducer from "../features/job/job-slice"
import userReducer from "../features/user/user-slice"
import {apiSlice} from '../features/jobs/jobs-api-slice'


export const store = configureStore({
    reducer: {
        job: jobReducer,
        user: userReducer,
        [apiSlice.reducerPath]: apiSlice.reducer
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware().concat(apiSlice.middleware)
    }
})
export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>