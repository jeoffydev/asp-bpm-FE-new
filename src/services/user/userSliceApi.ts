import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit' 


export interface IStateUser {  
    id: number,
    email: string,
    fullName: string,
    roleName: string,
    roleId: number,
    isAuthenticated: boolean
}

export type IActionUser  =  { 
    id: number,
    email: string,
    fullName: string,
    roleName: string,
    roleId: number,
    isAuthenticated: boolean
}

export interface AuthenticationUserState {
    userAuth: IStateUser
}
  
export const initialState: AuthenticationUserState = {
    userAuth: {
        id: 0,
        email: '',
        fullName: '',
        roleName: '',
        roleId: 0,
        isAuthenticated: false
    }
}

export const emptyUserAuthState: IActionUser = {
    id: 0,
  email: '',
  fullName: '',
  roleName: '',
  roleId: 0,
  isAuthenticated: false
}

export const userSliceApi = createSlice({
  name: 'userAuth',
  initialState,
  reducers: {
    addAuthenticationUser: (state, action: PayloadAction<IActionUser>) => {   
        state.userAuth.id = action.payload.id;
        state.userAuth.email = action.payload.email;
        state.userAuth.fullName = action.payload.fullName;
        state.userAuth.roleName = action.payload.roleName;
        state.userAuth.roleId = action.payload.roleId;
        state.userAuth.isAuthenticated = action.payload.isAuthenticated;
    }, 
  },
})

// Action creators are generated for each case reducer function
export const { addAuthenticationUser } = userSliceApi.actions

export default userSliceApi.reducer