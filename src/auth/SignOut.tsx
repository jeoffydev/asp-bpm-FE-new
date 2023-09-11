import React, { useEffect} from 'react'; 
import { useNavigate } from "react-router-dom";
import {  useDispatch } from 'react-redux'
import { addAuthenticationUserToken, emptyToken } from '../services/user/userJwtTokenApi';
import { addAuthenticationUser, emptyUserAuthState } from '../services/user/userSliceApi';
import { useCookies } from 'react-cookie';

interface IProps {
    isSignOut: boolean,
    cookiesAuth: string,
    urlRedirect: string
}

function SignOut( props: IProps) {

    const { isSignOut, cookiesAuth,  urlRedirect }= props;
   
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [, , removeCookie] = useCookies([cookiesAuth]);

    useEffect(()=>{
        if( isSignOut ) {

             dispatch(
                addAuthenticationUserToken(
                    emptyToken
                )
              )
              dispatch(
                addAuthenticationUser(
                  emptyUserAuthState
                )
              )
              sessionStorage.clear();
              removeCookie(cookiesAuth, { path: '/' });
              navigate(urlRedirect);

        }

    },[
        urlRedirect,
        dispatch,
        cookiesAuth,
        emptyToken,
        emptyUserAuthState,
        isSignOut
    ])

  return <></>;
}

export default SignOut;
