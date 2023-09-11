
import { store } from '../../../store/store';
import { addOrgStoreDetails } from './organizationStoreSliceApi';

const testOrg = {
    id: 1,
    companyName: "DCC Government",
    businessDetails: "This is for DCC dunedin",
    address: "City Town Centre 123 Address",
    phoneNumber: "027-5837432",
    mobileNumber: "027-5681212",
    contactPerson: "Doris Hipolito",
    contactEmail: "dorisdae12@yahoo.com",
    website: "https://www.test111.com",
    active: true,
}


/* 

"getAdministratorDtos": [
        {
            "id": 2002,
            "fullName": "Admin Test",
            "email": "admin@admin.com",
            "mobile": "",
            "phone": "",
            "active": true,
            "secretKey": "",
            "authRoleId": 2,
            "roleName": "Admin",
            "organizationId": 1,
            "organizationName": ""
        },
        {
            "id": 2003,
            "fullName": "Jeoffy Admin",
            "email": "jeoffyhipolito12@gmail.com",
            "mobile": "0275837432",
            "phone": "",
            "active": true,
            "secretKey": "",
            "authRoleId": 2,
            "roleName": "Admin",
            "organizationId": 1,
            "organizationName": ""
        }
    ]

    */
describe('Organization Details RTK without any issue', () => {
    it('handles org dispatch', async () => {
            store.dispatch(
                addOrgStoreDetails(testOrg)
            );
            const state = await store.getState().orgStoreDetails;
            expect(state.companyName).toBe('DCC Government');
            expect(state.contactEmail).toBe('dorisdae12@yahoo.com');
    }) 
})
  