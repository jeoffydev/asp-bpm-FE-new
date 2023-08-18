
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { IOwnerAdminAuthState, emptyOwnerAdminState } from '../services/owner/ownerSliceApi';
import { addAuthenticationUser } from '../services/user/userSliceApi';
import { addAuthenticationUserToken } from '../services/user/userJwtTokenApi';
import { useNavigate } from "react-router-dom";
import { appSessionStorageVar } from '../utils/Helper';
import { saveAuthToStorage } from '../auth/authHelper';

type IProps = {
    responseAuth: IOwnerAdminAuthState,
    responseSuccess: boolean
}

const  useAuthenticationUser = (props: IProps) => {
    const { responseAuth, responseSuccess } = props;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [userData, ] = useState<IOwnerAdminAuthState>(emptyOwnerAdminState);

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
            saveAuthToStorage(record);
              
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
            navigate(`/owner/dashboard`)
        }
  },
  [
    responseSuccess,
    responseAuth,
    dispatch,
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