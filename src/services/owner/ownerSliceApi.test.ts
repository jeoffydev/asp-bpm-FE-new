
import { IOwnerTypeView } from './ownerSliceApi';
import { store } from '../../store/store';
import { setupServer } from "msw/node";  
import { rest } from 'msw';

const baseUrlApi = 'http://localhost:5015/api/OwnerApi';

const userMock = [
    
    {
        id: 1,
        fullName: "owner",
        email: "owner@owner.com",
        active: true,
        authRoleId: 1,
        roleName: "Owner"
    },
    {
        id: 2,
        fullName: "Jeoffy Hipolito",
        email: "owner@yahoo.com",
        active: true,
        authRoleId: 1,
        roleName: "Owner"
    }
    
  ];

  const handlersRequest = (req?: string) => { 

          let handleRequest;
    
         
            handleRequest = [
              rest.get(`${baseUrlApi}/owners`, (_, res, ctx) =>
                res(ctx.status(200), ctx.json<IOwnerTypeView[]>(userMock))
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

describe('Correct Owner slice API', () => {

        handlersRequest();

        it('Should initially set Owners  from API', async () => {
            const state = await store.getState().ownersApi;
            const isEmpty = Object.keys(state.queries).length === 0;
            expect(isEmpty).toBeTruthy(); 
        }) 

}); 