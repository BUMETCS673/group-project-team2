import {configureStore} from '@reduxjs/toolkit'
import jobReducer from "../features/job/job-slice"
import userReducer from "../features/user/user-slice"


export const store = configureStore({
    reducer: {
        job: jobReducer,
        user: userReducer,
    }
})
export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>