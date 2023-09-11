import { useEffect} from 'react';
import { useDispatch } from 'react-redux';
import { addAuthenticationUserToken } from "../services/user/userJwtTokenApi";
import { addAuthenticationUser } from "../services/user/userSliceApi";
import { useCookies } from 'react-cookie';

type Props = {
    cookiesAuth: string,
    isOwner: boolean
  }

const  useGlobalDispatchAuth = (props: Props) => {

    const { cookiesAuth, isOwner } = props;

    const dispatch = useDispatch();
    const [cookies, ] = useCookies([cookiesAuth]);
    const cookiesPath = isOwner ? cookies?.bpm_app_auth : cookies?.bpm_app_org_auth;
   
    useEffect(() => {

        if( cookiesPath?._isAuthenticated ) {
            dispatch(
              addAuthenticationUserToken(
                  {
                      token: cookiesPath._tokenKey
                  }
              )
            )
            dispatch(
              addAuthenticationUser(
                {
                    id: cookiesPath._id,
                    email: cookiesPath._email,
                    fullName: cookiesPath._fullName,
                    roleName: cookiesPath._roleName,
                    roleId: cookiesPath._roleId,
                    isAuthenticated: cookiesPath._isAthenticated
                }
              )
            )
        }    
    },
    [
        cookiesPath,
        dispatch,
    ]);

    
    return [cookiesPath?._isAuthenticated as boolean, cookiesPath?._roleName as string];
}

export default useGlobalDispatchAuth;