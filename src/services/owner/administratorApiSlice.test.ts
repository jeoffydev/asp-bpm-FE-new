

import { store } from '../../store/store';
import { setupServer } from "msw/node";  
import { rest } from 'msw';
import { IAdminTypeView } from './administratorSliceApi';

const baseUrlApi = 'http://localhost:5015/api/AdministratorApi';

const userMock = [
    {
        id: 1,
        fullName: "Jeoffy Admin",
        email: "jeof@admin.com",
        mobile: "",
        phone: "123456",
        active: true,
        secretKey: "",
        authRoleId: 2,
        roleName: "Admin",
        organizationId: 2,
        organizationName: ""
    },
    {
        id: 2,
        fullName: "Test Admin",
        email: "test@admin.com",
        mobile: "",
        phone: "123456",
        active: true,
        secretKey: "",
        authRoleId: 2,
        roleName: "Admin",
        organizationId: 2,
        organizationName: ""
    }
    
  ];

  const handlersRequest = (req?: string) => { 

          let handleRequest;
    
         
            handleRequest = [
              rest.get(`${baseUrlApi}/Administrators`, (_, res, ctx) =>
                res(ctx.status(200), ctx.json<IAdminTypeView[]>(userMock))
              ),
            ]; 
          
    
          const server = setupServer(...handleRequest); 
    
          beforeAll(() => { 
            server.listen();
          });
            
          afterEach(() => { 
            server.resetHandlers();
          });
            
          afterAll(() => { 
            server.close();
          });
    } 

describe('Correct Administrators slice API', () => {

        handlersRequest();

        it('Should initially set Admin  from API', async () => {
            const state = await store.getState().adminsApi;
            const isEmpty = Object.keys(state.queries).length === 0;
            expect(isEmpty).toBeTruthy(); 
        }) 

}); 