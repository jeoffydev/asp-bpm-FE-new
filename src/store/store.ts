import {   configureStore } from '@reduxjs/toolkit'
import { ownerApiSlice } from '../services/owner/ownerSliceApi';
import { userSliceApi } from '../services/user/userSliceApi';
import { userJwtTokenApiSlice } from '../services/user/userJwtTokenApi';

export const store = configureStore({
  reducer: {
    userAuthentication: userSliceApi.reducer,
    userJwtToken: userJwtTokenApiSlice.reducer,
    [ownerApiSlice.reducerPath]: ownerApiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(
    ownerApiSlice.middleware,
    ),
}) 
 

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>

// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch