import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import type { RootState } from '../../app/store'
import { Job } from '../../../types/types'
interface DeleteJob {
  ID: string | undefined
}

export const apiSlice = createApi({
  reducerPath: 'api',
  tagTypes: ['Job', 'Activity'],
  baseQuery: fetchBaseQuery({
    baseUrl:
      'https://x3pmfzyrll.execute-api.us-east-1.amazonaws.com/default/cs673_job',
    prepareHeaders: (headers, { getState }) => {
      const token = (getState() as RootState).user.token
      if (token) {
        headers.set('Authorization', `Bearer ${token}`)
      }
      return headers
    },
  }),
  endpoints(builder) {
    return {
      fetchJobs: builder.query<Job[], number | void>({
        query() {
          return ``
        },
        providesTags: ['Job'],
      }),
      createJob: builder.mutation<Job, Job | void>({
        query: (job) => ({
          headers: {
            'Content-type': 'application/json',
          },
          url: '',
          method: 'POST',
          body: job,
        }),
        invalidatesTags: ['Job'],
      }),
      updateJob: builder.mutation<Job, Job | void>({
        query: (job) => ({
          headers: {
            'Content-type': 'application/json',
          },
          url: '',
          method: 'PUT',
          body: job,
        }),
        invalidatesTags: ['Job'],
      }),
      deleteJob: builder.mutation<Job, DeleteJob | void>({
        query: (id) => ({
          headers: {
            'Content-type': 'application/json',
          },
          url: '',
          method: 'DELETE',
          body: id,
        }),
        invalidatesTags: ['Job'],
      }),
    }
  },
})

export const { useFetchJobsQuery, useCreateJobMutation, useDeleteJobMutation, useUpdateJobMutation } =
  apiSlice
