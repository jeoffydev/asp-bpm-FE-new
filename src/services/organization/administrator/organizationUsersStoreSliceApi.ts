import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit' 

 

export interface IUserOrgs {
    id: number,
    fullName: string,
    email: string,
    mobile: string,
    phone: string,
    active: boolean,
    secretKey?: string,
    authRoleId: number,
    roleName: string,
    organizationId: number,
    organizationName: string
}

export interface IStateOrgDetails {   
    getAdministratorDtos: IUserOrgs[]
}



  
export const initialState: IStateOrgDetails = {
        getAdministratorDtos: []
}
 
 

export const organizationUsersStoreSliceApi = createSlice({
  name: 'orgUsersStoreSliceApi',
  initialState,
  reducers: {
    addOrgUsersStoreDetails: (state, action: PayloadAction<IStateOrgDetails>) => { 
       state.getAdministratorDtos = action.payload.getAdministratorDtos
    }, 
  },
})

// Action creators are generated for each case reducer function
export const { 
    addOrgUsersStoreDetails
} = organizationUsersStoreSliceApi.actions 

export default organizationUsersStoreSliceApi.reducer