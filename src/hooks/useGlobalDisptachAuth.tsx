import { useEffect} from 'react';
import { useDispatch } from 'react-redux';
import { addAuthenticationUserToken } from "../services/user/userJwtTokenApi";
import { addAuthenticationUser } from "../services/user/userSliceApi";
import { retrieveAuthToStorage } from '../auth/authHelper';

const  useGlobalDispatchAuth = () => {
    const dispatch = useDispatch();
    const auth  = retrieveAuthToStorage();
    console.log("AUTH ", auth)
   
    useEffect(() => {

        if( auth?._isAuthenticated ) {
            dispatch(
              addAuthenticationUserToken(
                  {
                      token: auth._tokenKey
                  }
              )
            )
            dispatch(
              addAuthenticationUser(
                {
                    id: auth._id,
                    email: auth._email,
                    fullName: auth._fullName,
                    roleName: auth._roleName,
                    roleId: auth._roleId,
                    isAuthenticated: auth._isAthenticated
                }
              )
            )
        }    
    },
    [
        auth,
        dispatch,
    ]);

    
    return [auth?._isAuthenticated as boolean, auth?._roleName as string];
}

export default useGlobalDispatchAuth;