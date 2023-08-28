
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { IOwnerAdminAuthState, emptyOwnerAdminState } from '../services/owner/ownerSliceApi';
import { addAuthenticationUser } from '../services/user/userSliceApi';
import { addAuthenticationUserToken } from '../services/user/userJwtTokenApi';
import { useNavigate } from "react-router-dom";
import { cookieUserLimit, cookiesAuth_bpm } from '../auth/authHelper';
import { useCookies } from 'react-cookie';
import { ownerUrl } from '../utils/Helper';


type IProps = {
    responseAuth: IOwnerAdminAuthState,
    responseSuccess: boolean
}
 

const  useAuthenticationUser = (props: IProps) => {
    const { responseAuth, responseSuccess } = props;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [userData, ] = useState<IOwnerAdminAuthState>(emptyOwnerAdminState);
  const [, setCookie, ] = useCookies([cookiesAuth_bpm]);

  const [tokenKey, ]= useState('')

  useEffect(() => {

        if( responseSuccess ) {

            var record = JSON.stringify({
                _id: responseAuth.id,
                _email: responseAuth.email,
                _fullName: responseAuth.fullName,
                _roleName: responseAuth.roleName,
                _roleId: responseAuth.roleId,
                _isAuthenticated: true,
                _tokenKey:responseAuth.tokenKey
            });
            
            setCookie(cookiesAuth_bpm, record, { path: '/', expires: cookieUserLimit.toDate()})
           
            dispatch(
                addAuthenticationUser(
                    {
                        id: responseAuth.id,
                        email: responseAuth.email,
                        fullName: responseAuth.fullName,
                        roleName: responseAuth.roleName,
                        roleId: responseAuth.roleId,
                        isAuthenticated: true
                    }
                )
            );
            navigate(`${ownerUrl}`)
        }
  },
  [
    responseSuccess,
    responseAuth,
    dispatch,
    navigate,
    setCookie
  ]);

  useEffect(() => {
        if(responseSuccess) {
            dispatch(
                addAuthenticationUserToken(
                    {
                        token: responseAuth.tokenKey ?? ''
                    }
                )
            )
        }
    },
    [
        responseSuccess,
        responseAuth,
        dispatch
    ]);

    return [userData, tokenKey];
}

export default useAuthenticationUser;