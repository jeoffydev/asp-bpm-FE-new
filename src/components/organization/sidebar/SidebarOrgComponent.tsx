import React, { useState} from 'react'; 
import { useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux'
import { selectUserAuth } from '../../../store/selectors';
import { cookiesOrgAuth_bpm  } from '../../../auth/authHelper';
import SignOut from '../../../auth/SignOut';
import { selectOrganizationDetails } from './../../../store/selectors';

 

function SidebarOrgComponent() {
    const navigate = useNavigate();
    const [logout, setLogout] = useState(false);
    const userDetails = useSelector(selectUserAuth);
    const orgDetails = useSelector(selectOrganizationDetails);

    SignOut({
      isSignOut: logout,
      cookiesAuth: cookiesOrgAuth_bpm,
      urlRedirect: '/login'
   }); 
     
  return (
   <>
     [SIDEBAR]
     welcome, {userDetails?.fullName}<br />
     Organization: {orgDetails?.companyName} <br />
     <span onClick={()=>setLogout(true)}>Logout</span><br />
   </>
  );
}

export default SidebarOrgComponent;
