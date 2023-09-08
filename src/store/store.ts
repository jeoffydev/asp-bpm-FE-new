import {   configureStore } from '@reduxjs/toolkit'
import { ownerApiSlice } from '../services/owner/ownerSliceApi';
import { userSliceApi } from '../services/user/userSliceApi';
import { userJwtTokenApiSlice } from '../services/user/userJwtTokenApi';
import { organizationApiSlice } from '../services/owner/organizationSliceApi';
import { administratorApiSlice } from '../services/owner/administratorSliceApi';
import { orgAdministratorSliceApi } from '../services/organization/administrator/orgAdministratorSliceApi';

export const store = configureStore({
  reducer: {
    userAuthentication: userSliceApi.reducer,
    userJwtToken: userJwtTokenApiSlice.reducer,
    [ownerApiSlice.reducerPath]: ownerApiSlice.reducer,
    [organizationApiSlice.reducerPath]: organizationApiSlice.reducer,
    [administratorApiSlice.reducerPath]: administratorApiSlice.reducer,
    [orgAdministratorSliceApi.reducerPath]: orgAdministratorSliceApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(
    ownerApiSlice.middleware,
    organizationApiSlice.middleware,
    administratorApiSlice.middleware,
    orgAdministratorSliceApi.middleware
    ),
}) 
 

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>

// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch