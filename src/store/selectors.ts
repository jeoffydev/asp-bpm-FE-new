
import { RootState } from './store';


export const selectUserAuth = (state: RootState) => state.userAuthentication.userAuth;
export const selectUserToken = (state: RootState) => state.userJwtToken.userAuthToken.token;

