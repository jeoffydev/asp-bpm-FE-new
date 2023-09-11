
import { createSelector } from '@reduxjs/toolkit';
import { RootState } from './store';


export const selectUserAuth = (state: RootState) => state.userAuthentication.userAuth;
export const selectUserToken = (state: RootState) => state.userJwtToken?.userAuthToken.token;
export const selectOrganizationDetails = (state: RootState) => state.orgStoreDetails;
export const selectOrganizationUsers = (state: RootState) => state.orgUsersStoreDetails;
