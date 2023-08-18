


import { Routes, Route, } from "react-router-dom";
import HomepageComponent from "./components/HomepageComponent";
import OwnerLoginComponent from "./owner/OwnerLoginComponent";
import { ProtectedOwnerRouteComponent } from "./owner/ProtectedOwnerRouteComponent";
import OwnerCustomerComponent from "./owner/OwnerCustomerComponent";
import OwnerUserComponent from "./owner/OwnerUserComponent";
import { ownerUrl } from "./utils/Helper";
import OwnerEditComponent from "./owner/OwnerEditComponent";


const RouteHolder = () => {
    
   
  return (
    <Routes>
        <Route path="/" element={<HomepageComponent />} />
        <Route path="/owner" element={<OwnerLoginComponent />} />

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
