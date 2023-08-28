import { combineReducers, configureStore } from '@reduxjs/toolkit'
import type { PreloadedState } from '@reduxjs/toolkit'
import { ownerApiSlice } from '../../services/owner/ownerSliceApi'
import { organizationApiSlice } from '../../services/owner/organizationSliceApi'
import { administratorApiSlice } from '../../services/owner/administratorSliceApi'


const rootReducer = combineReducers({
  [ownerApiSlice.reducerPath]: ownerApiSlice.reducer,
  [organizationApiSlice.reducerPath]: organizationApiSlice.reducer,
  [administratorApiSlice.reducerPath]: administratorApiSlice.reducer,
})

export const setupStore = (preloadedState?: PreloadedState<RootState>) => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      // adding the api middleware enables caching, invalidation, polling and other features of `rtk-query`
      getDefaultMiddleware().concat(
        ownerApiSlice.middleware,
        organizationApiSlice.middleware,
        administratorApiSlice.middleware,
        ),
    preloadedState,
  })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']