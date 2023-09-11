
import { store } from '../../../store/store';
import { addOrgStoreDetails } from './organizationStoreSliceApi';
import { addOrgUsersStoreDetails } from './organizationUsersStoreSliceApi';

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
    getAdministratorDtos: [
        {
            id: 2002,
            fullName: "Admin Test",
            email: "admin@admin.com",
            mobile: "",
            phone: "",
            active: true,
            secretKey: "",
            authRoleId: 2,
            roleName: "Admin",
            organizationId: 1,
            organizationName: ""
        },
        {
            id: 2003,
            fullName: "Jeoffy Admin",
            email: "jeoffyhipolito12@gmail.com",
            mobile: "0275837432",
            phone: "",
            active: true,
            secretKey: "",
            authRoleId: 2,
            roleName: "Admin",
            organizationId: 1,
            organizationName: ""
        }
    ]
}


describe('Organization Users Details RTK without any issue', () => {
    it('handles org dispatch', async () => {
            store.dispatch(
                addOrgUsersStoreDetails(testOrg)
            );
            const state = await store.getState().orgUsersStoreDetails;
            expect(state.getAdministratorDtos[0].email).toBe('admin@admin.com');
            expect(state.getAdministratorDtos[1].fullName).toBe('Jeoffy Admin');
    }) 
})
  