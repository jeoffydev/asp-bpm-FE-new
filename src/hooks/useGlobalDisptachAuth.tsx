import { useEffect} from 'react';
import { useDispatch } from 'react-redux';
import { addAuthenticationUserToken } from "../services/user/userJwtTokenApi";
import { addAuthenticationUser } from "../services/user/userSliceApi";
import { cookiesAuth_bpm  } from '../auth/authHelper';
import { useCookies } from 'react-cookie';

const  useGlobalDispatchAuth = () => {
    const dispatch = useDispatch();
    const [cookies, ] = useCookies([cookiesAuth_bpm]);
   
    useEffect(() => {

        if( cookies?.bpm_app_auth?._isAuthenticated ) {
            dispatch(
              addAuthenticationUserToken(
                  {
                      token: cookies.bpm_app_auth._tokenKey
                  }
              )
            )
            dispatch(
              addAuthenticationUser(
                {
                    id: cookies.bpm_app_auth._id,
                    email: cookies.bpm_app_auth._email,
                    fullName: cookies.bpm_app_auth._fullName,
                    roleName: cookies.bpm_app_auth._roleName,
                    roleId: cookies.bpm_app_auth._roleId,
                    isAuthenticated: cookies.bpm_app_auth._isAthenticated
                }
              )
            )
        }    
    },
    [
        cookies?.bpm_app_auth,
        dispatch,
    ]);

    
    return [cookies?.bpm_app_auth?._isAuthenticated as boolean, cookies?.bpm_app_auth?._roleName as string];
}

export default useGlobalDispatchAuth;