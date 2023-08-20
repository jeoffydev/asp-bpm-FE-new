import { appSessionStorageVar } from "../utils/Helper";

export const cookiesAuth_bpm= 'bpm_app_auth';

export const saveAuthToStorage = (record: any) => {
    sessionStorage.setItem(appSessionStorageVar, record); 
}

export const retrieveAuthToStorage = () => {
    var getSession = sessionStorage.getItem(appSessionStorageVar);
    return JSON.parse(getSession as string);
}


export const logoutExpiresCookies = () => {
        const cookies = document.cookie.split(";");
        for (let i = 0; i < cookies.length; i++) {
            const cookie = cookies[i];
            const eqPos = cookie.indexOf("=");
            const name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
            document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
        }
    console.log("document.cookie LOGOUT ", document.cookie)
}