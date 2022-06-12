import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import type { RootState } from '../../app/store'

interface Job {
  ID?: string
  companyname: string
  jobtitle: string
  description: string
  status: string
  createdAt?: Date
  updatedAt?: Date
}

interface DeleteJob {
  ID: string | undefined
}
// const token =
//   'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6Ik9aRXppaDlYaUdBR21WYW9NR2JqVCJ9.eyJodHRwczovL2NzNjczand0YmFja2VuZC5jb20vZW1haWwiOiJjaGlubWF5eUBidS5lZHUiLCJpc3MiOiJodHRwczovL2Rldi15cncwdDBmeS51cy5hdXRoMC5jb20vIiwic3ViIjoiZ29vZ2xlLW9hdXRoMnwxMDU1NTQ5MTYxMzk0MzgzNjIxNDIiLCJhdWQiOlsiaHR0cHM6Ly9jczY3My1hcGktYXV0aDAuY29tIiwiaHR0cHM6Ly9kZXYteXJ3MHQwZnkudXMuYXV0aDAuY29tL3VzZXJpbmZvIl0sImlhdCI6MTY1NDY1NzU5NSwiZXhwIjoxNjU0NzQzOTk1LCJhenAiOiJscXh0S0JkRG9VSEpqZEFLT1RUUUFGV2RONVNuRmt2YyIsInNjb3BlIjoib3BlbmlkIHByb2ZpbGUgZW1haWwifQ.Ur3x6XsPJsdm4pjKpkttPPPXJ0mJMtyxlM-re8qMa8P7dYxu7N2bHdNrNWFRsBMjQ0NKiamhww0GJ3Z-jqRsO6sXQhfQEF-5k7oVxjPwtouJtA-7Kb5kZOkc7i_-a5BRKnMVQcAPLYRUnTztBDMvtRwUv0ZTsQKFS-6HQthQrIptyoJh4RyrstZxuOqPs5S3jk2Jtk7tCGB99LzTOAtoFucjula1hssBAPP4uH76KDZl7dvVmkuUirwjsUO5WPxmu1eMkqGiUD6U7GNAyapF7NoVeEBb3rnzP0c8cxNSlBzbl2uOmBDB6aLRKoRXMfqM1puU3jqhpc14HNlUB7TrIw'

export const apiSlice = createApi({
  reducerPath: 'api',
  tagTypes: ['Job'],
  baseQuery: fetchBaseQuery({
    baseUrl:
      'https://x3pmfzyrll.execute-api.us-east-1.amazonaws.com/default/cs673_job',
    prepareHeaders: (headers, { getState }) => {
      const token = (getState() as RootState).user.token
      console.log('token 2', token)
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

export const { useFetchJobsQuery, useCreateJobMutation, useDeleteJobMutation } =
  apiSlice
