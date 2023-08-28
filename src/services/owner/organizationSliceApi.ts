import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { RootState } from '../../store/store';
import { apiOrganizationUrl,  apiUrlNoresult } from '../../utils/Helper';




export interface IOrgTypeView {
    id: number,
    companyName: string,
    businessDetails: string,
    address: string,
    active: boolean,
    contactEmail: string,
    contactPerson: string,
    mobileNumber: string,
    phoneNumber: string,
    website: string
}
export interface OrgState {
    data: IOrgTypeView[],
    success: boolean,
    message: string
}



interface IOrgRegDefault {
    companyName: string,
    businessDetails: string,
    address: string,
    contactEmail: string,
    contactPerson: string,
    mobileNumber: string,
    phoneNumber: string,
    website: string
}

export interface IOrgRegister extends IOrgRegDefault{
  active: string,
}

export interface IOrgRegisterSubmit extends IOrgRegDefault {
  active: boolean,
}



export const emptyOrgState: IOrgTypeView = {
    id: 0,
    companyName: '',
    businessDetails: '',
    address: '',
    active: false,
    contactEmail: '',
    contactPerson: '',
    mobileNumber: '',
    phoneNumber: '',
    website: '',
};

export const initialState: OrgState  = {
    data: [],
    success: true,
    message: ""
}


export const organizationApiSlice =  createApi({
    reducerPath: 'orgsApi',
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

    tagTypes: ['allOrgs'],
    endpoints: (builder) => ({
      getOrgList: builder.query({
        query: (params) => {
            const { checkToken } = params;
            return checkToken ? `${apiOrganizationUrl}/GetAllOrganizations` : `${apiUrlNoresult}`;
        },
        providesTags: ['allOrgs'],
      }),
      registerOrgs: builder.mutation({
        query: (payload) => { 
          return ({
              url: `${apiOrganizationUrl}/RegisterOrganization`,
              method: 'POST',
              body: payload,
            })
        },
        invalidatesTags: ['allOrgs'],
      }),
      deleteOrg: builder.mutation({
        query: (payload) => {
            const { id } = payload;
            return {
                url: `${apiOrganizationUrl}/DeleteOrganization/${id}`,
                method: 'DELETE',
              } 
        },
        invalidatesTags: ['allOrgs'], 
    }),
    getOrgById: builder.query({
      query: (id:number) => id ? `${apiOrganizationUrl}/Organization/${id}` : `${apiUrlNoresult}`,
      providesTags: ['allOrgs'],
    }),
    updateOrg: builder.mutation({
      query: (payload) => { 
        return {
          url: `${apiOrganizationUrl}/UpdateOrganization`,
          method: 'PUT',
          body: payload,
        }
      },
      invalidatesTags: ['allOrgs'],
    })
     
  }),
})
export const {
    useGetOrgListQuery,
    useRegisterOrgsMutation,
    useDeleteOrgMutation,
    useGetOrgByIdQuery,
    useUpdateOrgMutation
} = organizationApiSlice

