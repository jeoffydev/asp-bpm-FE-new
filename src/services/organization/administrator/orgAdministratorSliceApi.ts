import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { apiAdministratorUrl, apiOrganizationUrl, apiUrlNoresult } from '../../../utils/Helper';
import { RootState } from '../../../store/store';

export const orgAdministratorSliceApi =  createApi({
    reducerPath: 'orgAdminsApi',
    baseQuery: fetchBaseQuery({ 
        baseUrl: `${process.env.REACT_APP_BPM_BASEURL}`,
        prepareHeaders: (headers, { getState }) => {
            const token = (getState() as RootState).userJwtToken.userAuthToken.token;
            // If we have a token set in state, let's assume that we should be passing it.

            if (token) {
              headers.set('authorization', `Bearer ${token}`)
            }
        
            return headers
          },
    }),

    tagTypes: ['orgAdmins'],
    endpoints: (builder) => ({

        loginOrgUser: builder.mutation({
            query: (payload) => { 
              return ({
                  url: `${apiAdministratorUrl}/LoginAdministrator`,
                  method: 'POST',
                  body: payload,
                })
            },
            invalidatesTags: ['orgAdmins'],
        }),

        checkAdminEmailLogin: builder.mutation({
            query: (payload) => { 
              return {
                url: `${apiAdministratorUrl}/CheckLoginEmail`,
                method: 'POST',
                body: payload,
              }
            },
            invalidatesTags: ['orgAdmins'],
          }),
          finalizeLogin: builder.query({
            query: (secretKey: string) => {
              return secretKey ? `${apiAdministratorUrl}/FinalizedLogin/${secretKey}` : `${apiUrlNoresult}`
            },
            providesTags: ['orgAdmins'],
          }),
          getUserOrganization: builder.query({
            query: () => {
              return   `${apiOrganizationUrl}/GetUserOrganization`
            },
            providesTags: ['orgAdmins'],
          }),
          updateUserDetails: builder.mutation({
            query: (payload) => { 
              const { ...body } = payload;
              return {
                url: `${apiAdministratorUrl}/UpdateUserDetailsByClaims`,
                method: 'PUT',
                body,
              }
            },
            invalidatesTags: ['orgAdmins'],
          }),
          updateUserPassword: builder.mutation({
            query: (payload) => { 
              const { ...body } = payload;
              return {
                url: `${apiAdministratorUrl}/UpdateUserPasswordByClaims`,
                method: 'PUT',
                body,
              }
            },
            invalidatesTags: ['orgAdmins'],
          }),
       
  }),
})
export const {
   useCheckAdminEmailLoginMutation,
   useFinalizeLoginQuery,
   useLoginOrgUserMutation,
   useGetUserOrganizationQuery,
   useUpdateUserDetailsMutation,
   useUpdateUserPasswordMutation
} = orgAdministratorSliceApi

