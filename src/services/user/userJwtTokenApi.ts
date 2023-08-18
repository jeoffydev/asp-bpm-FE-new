import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit' 


export interface IStateUserToken {  
    token: string,
}

export type IActionUser  =  { 
    token: string,
}

export const emptyToken: IActionUser = {
    token: ''
} 

export interface AuthenticationUserTokenState {
    userAuthToken: IStateUserToken
}
  
export const initialState: AuthenticationUserTokenState = {
    userAuthToken: {
        token: sessionStorage.getItem('_auth') as string
    }
}
 

export const userJwtTokenApiSlice = createSlice({
  name: 'userAuthToken',
  initialState,
  reducers: {
    addAuthenticationUserToken: (state, action: PayloadAction<IActionUser>) => {   
        state.userAuthToken.token = action.payload.token;
    }, 
  },
})

// Action creators are generated for each case reducer function
export const { addAuthenticationUserToken } = userJwtTokenApiSlice.actions

export default userJwtTokenApiSlice.reducer