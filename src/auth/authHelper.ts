import { appSessionStorageVar } from "../utils/Helper";


export const saveAuthToStorage = (record: any) => {
    sessionStorage.setItem(appSessionStorageVar, record); 
}

export const retrieveAuthToStorage = () => {
    var getSession = sessionStorage.getItem(appSessionStorageVar);
    return JSON.parse(getSession as string);
}