import { Navigate, useOutlet} from "react-router-dom";
import OwnerDashboardComponent from "./OwnerDashboardComponent";
import useGlobalDispatchAuth from "../hooks/useGlobalDisptachAuth";
import { ownerRole } from "../utils/Helper";
import OwnerHeaderComponent from "./common/OwnerHeaderComponent";
import OwnerFooterComponent from "./common/OwnerFooterComponent";

export const ProtectedOwnerRouteComponent  = () => {
  // This is where the authentication begin ***************************** 
  const outlet = useOutlet();

  const [isAuthenticated, isRoleName] = useGlobalDispatchAuth();
  console.log("IS AUTH ", isAuthenticated)
  console.log("IS ROLE NAME ", isRoleName)

  if ((!isAuthenticated as boolean || !isAuthenticated) && ((isRoleName && (isRoleName as string).toLowerCase().match(ownerRole.toLowerCase())) || !isRoleName)) {
      return <Navigate to="/owner" />;
  }

  return (
    <>
    <OwnerHeaderComponent />
    {
       outlet ? outlet : (
        <>
          <OwnerDashboardComponent />
        </>
       )
    }
    <OwnerFooterComponent />
    </>
  );
};