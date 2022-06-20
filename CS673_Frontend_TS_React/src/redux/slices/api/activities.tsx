import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import type { RootState } from '../../app/store'

export interface Activity {
  ID: number | undefined
  job_id: string
  category: string
  description: string
  start_date: string
  end_date: string
  status: string
}

export type DeleteActivity = {
  ID: number | undefined
}


export const activitySlice = createApi({
  reducerPath: 'activityapi',
  tagTypes: ['Activity', 'Job'],
  baseQuery: fetchBaseQuery({
    baseUrl:
      'https://x3pmfzyrll.execute-api.us-east-1.amazonaws.com/default/cs673_activity',
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
      fetchActivities: builder.query<Activity[], string | undefined>({
        query: (jobId: string | undefined) => {
          return `?job_id=${jobId}`
        },
        providesTags: ['Activity', 'Job'],
      }),
      createActivity: builder.mutation<Activity, Activity | void>({
        query: (activity) => ({
          headers: {
            'Content-type': 'application/json',
          },
          url: '',
          method: 'POST',
          body: activity,
        }),
        invalidatesTags: ['Activity', 'Job'],
      }),
      updateActivity: builder.mutation<Activity, Activity | void>({
        query: (activity) => ({
          headers: {
            'Content-type': 'application/json',
          },
          url: '',
          method: 'PUT',
          body: activity,
        }),
        invalidatesTags: ['Activity', 'Job'],
      }),
      deleteActivity: builder.mutation<Activity, DeleteActivity | void>({
        query: (id) => ({
          headers: {
            'Content-type': 'application/json',
          },
          url: '',
          method: 'DELETE',
          body: id,
        }),
        invalidatesTags: ['Activity'],
      }),
    }
  },
})

export const {
  useFetchActivitiesQuery,
  useCreateActivityMutation,
  useUpdateActivityMutation,
  useDeleteActivityMutation,
} = activitySlice
