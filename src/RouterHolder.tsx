


import { Routes, Route, } from "react-router-dom";
import HomepageComponent from "./components/HomepageComponent";
import OwnerLoginComponent from "./owner/OwnerLoginComponent";
import { ProtectedOwnerRouteComponent } from "./owner/ProtectedOwnerRouteComponent";
import OwnerCustomerComponent from "./owner/OwnerCustomerComponent";
import OwnerUserComponent from "./owner/OwnerUserComponent";
import { ownerUrl } from "./utils/Helper";
import OwnerEditComponent from "./owner/OwnerEditComponent";
import OwnerLoginInitComponent from "./owner/OwnerLoginInitComponent";
import OwnerLoginFinalComponent from "./owner/OwnerLoginFinalComponent";


const RouteHolder = () => {
    
   
  return (
    <Routes>
        <Route path="/" element={<HomepageComponent />} />
        {/* <Route path="/owners" element={<OwnerLoginComponent />} />  */}
        <Route path="/owner" element={<OwnerLoginInitComponent />} />
        <Route path="/owner/login/:secret" element={<OwnerLoginFinalComponent />} />

      <Route path={ownerUrl} element={<ProtectedOwnerRouteComponent/>}>
        <Route path="customers" element={<OwnerCustomerComponent />} />
        <Route path="owners" element={<OwnerUserComponent />} />
        <Route path="owner/:id" element={<OwnerEditComponent />}  />
      </Route>
      
        <Route path="*" element={"ERROR PAGE"} />
    </Routes>
  )
}

export default RouteHolder;
