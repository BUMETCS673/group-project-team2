import { createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import type {RootState} from '../../app/store'

interface Job {
    id: string,
    userId: string,
    companyName : string,
    jobTitle: string,
    description: string,
    status: string,
    link: string,
    createdAt: Date,
    updatedAt: Date, 
}

export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://x3pmfzyrll.execute-api.us-east-1.amazonaws.com/default/cs673_job',
        prepareHeaders: (headers, {getState}) => {
            const token = (getState() as RootState).user.token
            if (token) {
                headers.set('authorization', `Bearer ${token}` )
                
            }
            return headers
        }
    }),
    endpoints(builder) {
        return {
            fetchJobs: builder.query<Job[], number|void>({
                query(limit = 10) {
                    return `/jobs?limit=${limit}`
                }
            }) 
        }
    }
})

export const {useFetchJobsQuery} = apiSlice
