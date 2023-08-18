import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
export const schedApiSlice = createApi({
  reducerPath: 'scheduleApiSlice',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:9001/api',
  }),
  tagTypes: ['Schedule'],
  endpoints: (builder) => ({
    getScheds: builder.query({
      query: () => '/scheds',
      providesTags: ['Schedule'],
    }),
    addNewSched: builder.mutation({
      query: (payload) => { 
        return ({
            url: '/sched',
            method: 'POST',
            body: payload,
            headers: {
              'Content-type': 'application/json; charset=UTF-8',
            },
          })
      },
      invalidatesTags: ['Schedule'],
    }),
    updateSched: builder.mutation({
      query: (payload) => { 
        const { id, ...body } = payload
        return {
          url: `/sched/${id}`,
          method: 'PATCH',
          body,
        }
      },
      invalidatesTags: ['Schedule'],
    }),
    deleteSched: builder.mutation({
        query: (payload) => {
            const { id, ...body } = payload
            debugger
            return {
                url: `/sched/${id}`,
                method: 'DELETE',
                body,
                credentials: 'include',
              } 
        },
        invalidatesTags: ['Schedule'], 
    }),
  }),
})
export const {
  useGetSchedsQuery,
  useAddNewSchedMutation,
  useUpdateSchedMutation,
  useDeleteSchedMutation,
} = schedApiSlice