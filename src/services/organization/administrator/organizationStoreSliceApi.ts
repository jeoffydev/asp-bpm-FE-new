import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit' 

 
 

export interface IStateOrgDetails {  
    id: number,
    companyName: string,
    businessDetails?: string,
    address: string,
    phoneNumber?: string,
    mobileNumber: string,
    contactPerson: string,
    contactEmail: string,
    website?: string,
    active:  boolean,
}



  
export const initialState: IStateOrgDetails = {
        id: 0,
        companyName: "",
        businessDetails: "",
        address: "",
        phoneNumber: "",
        mobileNumber: "",
        contactPerson: "",
        contactEmail: "",
        active:  false,
}
 

export const organizationStoreSliceApi = createSlice({
  name: 'orgStoreSliceApi',
  initialState,
  reducers: {
    addOrgStoreDetails: (state, action: PayloadAction<IStateOrgDetails>) => {  
        state.id = action.payload.id;
        state.companyName = action.payload.companyName;
        state.businessDetails = action.payload.businessDetails;
        state.contactEmail = action.payload.contactEmail;
        state.contactPerson = action.payload.contactPerson;
        state.phoneNumber = action.payload.phoneNumber;
        state.mobileNumber = action.payload.mobileNumber;
        state.active = action.payload.active;
        state.website = action.payload.website;
    }, 
  },
})

// Action creators are generated for each case reducer function
export const { 
    addOrgStoreDetails
} = organizationStoreSliceApi.actions 

export default organizationStoreSliceApi.reducer