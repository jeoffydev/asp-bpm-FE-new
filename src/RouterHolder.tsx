


import { Routes, Route, } from "react-router-dom";
import HomepageComponent from "./components/HomepageComponent";
import { ProtectedOwnerRouteComponent } from "./owner/ProtectedOwnerRouteComponent";
import OwnerCustomerComponent from "./owner/OwnerCustomerComponent";
import OwnerUserComponent from "./owner/OwnerUserComponent";
import { ownerUrl } from "./utils/Helper";
import OwnerEditComponent from "./owner/OwnerEditComponent";
import OwnerLoginInitComponent from "./owner/OwnerLoginInitComponent";
import OwnerLoginFinalComponent from "./owner/OwnerLoginFinalComponent";
import OwnerCustomerDetailsComponent from "./owner/OwnerCustomerDetailsComponent";
import OwnerCustomerEditComponent from "./owner/OwnerCustomerEditComponent";
import OwnerAdminEditComponent from "./owner/OwnerAdminEditComponent";
import OwnerCypressFinalLogin from "./owner/OwnerCypressFinalLogin";


const RouteHolder = () => {
    
   
  return (
    <Routes>
        <Route path="/" element={<HomepageComponent />} />
        <Route path="/owner" element={<OwnerLoginInitComponent />} />
        <Route path="/owner/login/:secret" element={<OwnerLoginFinalComponent />} />
        <Route path="/owner/cypress/:secret" element={<OwnerCypressFinalLogin />} />

      <Route path={ownerUrl} element={<ProtectedOwnerRouteComponent/>}>
        <Route path="customers" element={<OwnerCustomerComponent />} />
        <Route path="customers/:id" element={<OwnerCustomerDetailsComponent />} />
        <Route path="customers/edit/:id" element={<OwnerCustomerEditComponent />} />
        <Route path="customers/administrator/edit/:id" element={<OwnerAdminEditComponent />} />
        <Route path="owners" element={<OwnerUserComponent />} />
        <Route path="owner/:id" element={<OwnerEditComponent />}  />
      </Route>
      
        <Route path="*" element={"ERROR PAGE"} />
    </Routes>
  )
}

export default RouteHolder;
