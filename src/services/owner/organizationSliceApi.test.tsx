
import { store } from '../../store/store';
import { setupServer } from "msw/node";  
import { rest } from 'msw';
import { IOrgTypeView } from './organizationSliceApi';
import { renderWithProviders } from '../../owner/test/test-utils';
import OwnerCustomerComponent from '../../owner/OwnerCustomerComponent';
import { act, fireEvent, render, renderHook, screen, waitFor, within } from '@testing-library/react';

const baseUrlApi = 'http://localhost:5015/api/OrganizationApi';

const orgMock = [
    
    {
        id: 1,
        companyName: "DCC Government",
        businessDetails: "This is for DCC dunedin",
        address: "City Town Centre 123 Address",
        phoneNumber: "027-5837432",
        mobileNumber: "027-5681212",
        contactPerson: "Doris Hipolito",
        contactEmail: "dorisdae12@yahoo.com",
        website: "https://www.test.com",
        active: false
    }
    
  ];

  const handlersRequest = (req?: string) => { 

          let handleRequest;
    
         
            handleRequest = [
              rest.get(`${baseUrlApi}/GetAllOrganizations`, (_, res, ctx) =>
                res(ctx.status(200), ctx.json<IOrgTypeView[]>(orgMock))
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

describe('Correct Org slice API', () => {

        handlersRequest();

        it('Should initially set Orgs  from API', async () => {
            const state = await store.getState().orgsApi;
            const isEmpty = Object.keys(state.queries).length === 0;
            expect(isEmpty).toBeTruthy(); 
        }) 

}); 
 