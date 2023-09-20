import { useEffect} from 'react';
import { Navigate, useOutlet} from "react-router-dom";
import { orgRole } from "../../utils/Helper";
import { cookiesOrgAuth_bpm } from "../../auth/authHelper";
import useGlobalDispatchAuth from "../../hooks/useGlobalDisptachAuth";
import { useGetUserOrganizationQuery } from "../../services/organization/administrator/orgAdministratorSliceApi";
import LoadingComponent from "../../global/LoadingComponent";
import { useDispatch } from 'react-redux';
import { addOrgStoreDetails } from '../../services/organization/administrator/organizationStoreSliceApi';
import { addOrgUsersStoreDetails } from '../../services/organization/administrator/organizationUsersStoreSliceApi';
import OrganizationContainerComponent from './OrganizationContainerComponent';
import DashboardComponent from './body/DashboardComponent';
import { addAuthenticationUser } from '../../services/user/userSliceApi';

export const ProtectedOrgRouteComponent  = () => {
  // This is where the authentication begin ***************************** 
  const outlet = useOutlet();
  const dispatch = useDispatch();

  const [isAuthenticated, isRoleName] = useGlobalDispatchAuth(
    {
        cookiesAuth: cookiesOrgAuth_bpm,
        isOwner: false
    }
  );
  const { data, isLoading  } =  useGetUserOrganizationQuery( 
    { 
        refetchOnMountOrArgChange: true  
    });


    useEffect(() => {
        if( data?.data?.organizationDetails?.data &&  data?.data?.userDetails?.data) {
            dispatch(
                addOrgStoreDetails(data.data.organizationDetails.data)
            )
            dispatch(
                addOrgUsersStoreDetails(data.data.organizationDetails.data)
            )
            dispatch(
                addAuthenticationUser(
                    {
                        id: data?.data?.userDetails?.data?.id,
                        email: data?.data?.userDetails?.data?.email,
                        fullName: data?.data?.userDetails?.data?.fullName,
                        roleName: data?.data?.userDetails?.data?.roleName,
                        roleId: data?.data?.userDetails?.data?.authRoleId,
                        isAuthenticated: true
                    }
                )
            )
        }    
    },
    [
        dispatch,
        data?.data?.organizationDetails?.data,
        data?.data?.userDetails?.data
    ]);

  if ((!isAuthenticated as boolean || !isAuthenticated) 
  && ((isRoleName && (isRoleName as string).toLowerCase().match(orgRole.toLowerCase())) || !isRoleName)) {
      return <Navigate to="/login" />;
  }

  return (
    <>

    {
        isLoading ? <LoadingComponent isLoading={isLoading} /> : (
                <>
                <OrganizationContainerComponent>
                    {
                        outlet ? outlet : (
                            <>
                                <DashboardComponent />
                            </>
                        )
                    }
                </OrganizationContainerComponent>
                </>
        )
    }
    
    </>
  );
};