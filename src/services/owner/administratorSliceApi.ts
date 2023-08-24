import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { RootState } from '../../store/store';
import { apiAdministratorUrl, apiUrlNoresult } from '../../utils/Helper';




export interface IAdminTypeView {
    id: number,
    fullName: string,
    email: string,
    active: boolean,
    authRoleId: number,
    roleName: string,
    mobile: string,
    phone: string,
    organizationId: number,
    organizationName?: string
}



interface IAdminRegDefault {
  fullName: string,
  email: string,
  mobile?: string,
  phone?: string,
  roleId: number,
  password: string,
  confirmPassword: string,
  organizationId: number
}

export interface IAdminRegister extends IAdminRegDefault{
  active: string,
}

export interface IAdminRegisterSubmit extends IAdminRegDefault {
  active: boolean,
}

export interface IAdminEditSubmit {
  fullName: string,
  roleId: number,
  organizationId: number,
  mobile?: string,
  phone?: string,
  password: string,
  confirmPassword: string,
  active: boolean,
  id: number
}



export const administratorApiSlice =  createApi({
    reducerPath: 'adminsApi',
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

    tagTypes: ['allAdmins'],
    endpoints: (builder) => ({
      getAdminList: builder.query({
        query: (params) => {
            const { checkToken } = params;
            return checkToken ? `${apiAdministratorUrl}/Administrators` : `${apiUrlNoresult}`;
        },
        providesTags: ['allAdmins'],
      }),
      registerAdmin: builder.mutation({
        query: (payload) => { 
          return ({
              url: `${apiAdministratorUrl}/RegisterAdministrator`,
              method: 'POST',
              body: payload,
            })
        },
        invalidatesTags: ['allAdmins'],
      }),
      deleteAdmin: builder.mutation({
        query: (payload) => {
            const { id } = payload;
            return {
                url: `${apiAdministratorUrl}/DeleteAdministrator/${id}`,
                method: 'DELETE',
              } 
        },
        invalidatesTags: ['allAdmins'], 
    }),
    getAdminId: builder.query({
      query: (editId:number) => editId ? `${apiAdministratorUrl}/Administrator/${editId}` : `${apiUrlNoresult}`,
      providesTags: ['allAdmins'],
    }),
    updateAdmin: builder.mutation({
      query: (payload) => { 
        return {
          url: `${apiAdministratorUrl}/UpdateAdministrator`,
          method: 'PUT',
          body: payload,
        }
      },
      invalidatesTags: ['allAdmins'],
    }),
    getAdminByOrgId: builder.query({
        query: (editId:number) => editId ? `${apiAdministratorUrl}/AdministratorsByOrgId/${editId}` : `${apiUrlNoresult}`,
        providesTags: ['allAdmins'],
      }),
     
  }),
})
export const {
    useGetAdminIdQuery,
    useGetAdminListQuery,
    useDeleteAdminMutation,
    useRegisterAdminMutation,
    useUpdateAdminMutation,
    useGetAdminByOrgIdQuery
   
} = administratorApiSlice

