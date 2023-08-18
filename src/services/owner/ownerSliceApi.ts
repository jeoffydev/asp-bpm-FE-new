import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { RootState } from '../../store/store';
import { apiUrl, apiUrlNoresult } from '../../utils/Helper';




export interface IOwnerTypeView {
    id: number,
    fullName: string,
    email: string,
    active: boolean,
    authRoleId: number,
    roleName: string
}
export interface OwnerState {
    data: IOwnerTypeView[],
    success: boolean,
    message: string
}

export interface IOwnerAdminAuthState {
    id: number,
    email: string,
    fullName: string,
    tokenKey?: string,
    roleName: string,
    roleId: number
}

interface IOwnerRegDefault {
  fullName: string,
  email: string,
  roleId: number,
  password: string,
  confirmPassword: string
}

export interface IOwnerRegister extends IOwnerRegDefault{
  active: string,
}

export interface IOwnerRegisterSubmit extends IOwnerRegDefault {
  active: boolean,
}

export interface IOwnerEditSubmit {
  fullName: string,
  roleId: number,
  password: string,
  confirmPassword: string,
  active: boolean,
  id: number
}

export const emptyOwnerAdminState: IOwnerAdminAuthState = {
    id: 0,
    email: '',
    fullName: '',
    roleName: '',
    roleId: 0
};

export const initialState: OwnerState  = {
    data: [],
    success: true,
    message: ""
}


export const ownerApiSlice =  createApi({
    reducerPath: 'ownersApi',
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

    tagTypes: ['allOwners'],
    endpoints: (builder) => ({
      getOwnerList: builder.query({
        query: (params) => {
            const { checkToken } = params;
            return checkToken ? `${apiUrl}/owners` : `${apiUrlNoresult}`;
        },
        providesTags: ['allOwners'],
      }),
      getOwnerUserList: builder.query({
        query: (params) => {
            const { checkToken } = params;
            return checkToken ? `${apiUrl}/owners/1` : `${apiUrlNoresult}`;
        },
        providesTags: ['allOwners'],
      }),
      getAdminUserList: builder.query({
        query: (params) => {
            const { checkToken } = params;
            return checkToken ? `${apiUrl}/owners/2` : `${apiUrlNoresult}`;
        },
        providesTags: ['allOwners'],
      }),
      getOwnerUser: builder.query({
        query: () => `${apiUrl}/owneruser`,
        providesTags: ['allOwners'],
      }),
      addOwner: builder.mutation({
        query: (payload) => { 
          return ({
              url: `${apiUrl}/loginOwner`,
              method: 'POST',
              body: payload,
            })
        },
        invalidatesTags: ['allOwners'],
      }),
      registerOwner: builder.mutation({
        query: (payload) => { 
          return ({
              url: `${apiUrl}/RegisterOwner`,
              method: 'POST',
              body: payload,
            })
        },
        invalidatesTags: ['allOwners'],
      }),
      deleteOwner: builder.mutation({
        query: (payload) => {
            const { id } = payload;
            return {
                url: `${apiUrl}/DeleteOwner/${id}`,
                method: 'DELETE',
              } 
        },
        invalidatesTags: ['allOwners'], 
    }),
    getOwnerId: builder.query({
      query: (editId:number) => editId ? `${apiUrl}/owner/${editId}` : `${apiUrlNoresult}`,
      providesTags: ['allOwners'],
    }),
    updateOwner: builder.mutation({
      query: (payload) => { 
        return {
          url: `${apiUrl}/updateOwner`,
          method: 'PUT',
          body: payload,
        }
      },
      invalidatesTags: ['allOwners'],
    }),
     
  }),
})
export const {
   useGetOwnerListQuery,
   useAddOwnerMutation,
   useGetOwnerUserQuery,
   useGetAdminUserListQuery,
   useGetOwnerUserListQuery,
   useRegisterOwnerMutation,
   useDeleteOwnerMutation,
   useGetOwnerIdQuery,
   useUpdateOwnerMutation
} = ownerApiSlice

