
import { IOwnerRegisterSubmit, IOwnerTypeView, useAddOwnerMutation, useGetOwnerListQuery, useGetOwnerUserListQuery, useRegisterOwnerMutation } from './ownerSliceApi';
import { store } from '../../store/store';
import { setupServer } from "msw/node";  
import { rest } from 'msw';
import OwnerUserComponent from '../../owner/OwnerUserComponent';
import { act, fireEvent, render, renderHook, screen, waitFor, within } from '@testing-library/react';
import HocWrapper from '../../HocWrapper';
import fetchMock from 'jest-fetch-mock';
import nock from 'nock';
import { addAuthenticationUserToken } from '../../services/user/userJwtTokenApi';
import { renderWithProviders } from '../../owner/test/test-utils';




const baseUrlApi = 'http://localhost:5015/api/OwnerApi';

export const userMock = [
    
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

  const addOwner: IOwnerRegisterSubmit = {
    fullName: "test",
    email: "testOwner@owner.com",
    active: true,
    roleId: 2,
    password: "jan12dj22",
    confirmPassword: "jan12dj223"
}


// describe('OwnerUserComponent', () => {
//   it('handles OwnerUserComponent()', async () => {

//       jest.useFakeTimers();
//       const { container } = renderWithProviders(<OwnerUserComponent />);
//       await screen.findByRole('heading', { name: /providers/i })
//       act(() => jest.advanceTimersByTime(2000))
//       await container.getElementsByClassName('MuiCircularProgress-root');

//   })
  
// })




  const handlersRequest = (req?: string) => { 

          let handleRequest;
    
         
            handleRequest = [
              rest.get(`${baseUrlApi}/owners/1`, (_, res, ctx) =>
                res(ctx.status(200), ctx.json<IOwnerTypeView[]>(userMock), ctx.delay(30))
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

       // handlersRequest();

        it('Should initially set Owners  from API', async () => {
            const state = await store.getState().ownersApi;
            const isEmpty = Object.keys(state.queries).length === 0;
            expect(isEmpty).toBeTruthy(); 
        }) 

}); 




// describe('Login owner slice API', () => {

//   //handlersRequest();

//     it('Should ', async ()=>{

      // const { result } =renderHook(() => useGetOwnerListQuery({ checkToken: 'token' }), { wrapper: HocWrapper });
    
      // expect(result.current).toMatchObject({
      //   status: 'pending',
      //   endpointName: 'getOwnerList',
      //   isLoading: true,
      //   isSuccess: false,
      //   isError: false,
      //   isFetching: true,
      // });

      // act(() => jest.advanceTimersByTime(2000))

      // console.log("EXPECT ", result) 

      // console.log("FETCH MOCK ", fetchMock)
      // console.log("`${baseUrlApi}/owners/1`", `${baseUrlApi}/owners/1`)

      

    //   const { result } =renderHook(() => addAuthenticationUserToken({
    //     token: 'eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJuYW1laWQiOiIxMDAxIiwidW5pcXVlX25hbWUiOiJqZW9mZnlfaGlwb2xpdG9AeWFob28uY29tIiwicm9sZSI6Ik93bmVyIiwibmJmIjoxNjkyODQ4ODAyLCJleHAiOjE2OTI5MzUyMDIsImlhdCI6MTY5Mjg0ODgwMn0.PPABMCAiiHx5hMuxQgLFitJRBgG_VIaTj41yC5bf0JwFjl0oZWL2aKvtO0_b2-ZUmf-sGv1f_y1LTzgMZi1Asg'
    // }), { wrapper: HocWrapper });
     
    //   console.log("RESULT1 ", result)

     
    
                // await waitFor(() => {
                //       const { result: ownerList } =renderHook(() => useGetOwnerListQuery({ checkToken: 'token' }), { wrapper: HocWrapper });
                //           expect(ownerList.current).toMatchObject({
                //               status: 'pending',
                //               endpointName: 'getOwnerList',
                //               isLoading: true,
                //               isSuccess: false,
                //               isError: false,
                //               isFetching: true,
                //             });
                    
                //             console.log("ownerList111 ", ownerList)
                              
                //   });


            // await store.dispatch(
            //   addAuthenticationUserToken({
            //     token: 'eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJuYW1laWQiOiIxMDAxIiwidW5pcXVlX25hbWUiOiJqZW9mZnlfaGlwb2xpdG9AeWFob28uY29tIiwicm9sZSI6Ik93bmVyIiwibmJmIjoxNjkyOTMwNDg5LCJleHAiOjE2OTMwMTY4ODksImlhdCI6MTY5MjkzMDQ4OX0.HkYTHdkTQLDosoxKz-ukHybgvp9NZoww1T4mDimMjvUtLLc-Wflu6zEwYg1EhLHlknhhndFyzE_HApQRGwmOCQ'
            //   })
            // )
            // let state = await store.getState().userJwtToken;
            // console.log("STATE ", state)


            // const { result: stateOWNERS } =renderHook(() => useGetOwnerUserListQuery({ checkToken: 'token' }), { wrapper: HocWrapper });
            // console.log("STATE OWNERS111 ", stateOWNERS)
           
            // nock(`${baseUrlApi}`, {
            //     reqheaders: {
            //       authorization: 'Bearer eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJuYW1laWQiOiIxMDAxIiwidW5pcXVlX25hbWUiOiJqZW9mZnlfaGlwb2xpdG9AeWFob28uY29tIiwicm9sZSI6Ik93bmVyIiwibmJmIjoxNjkyOTM0Nzg4LCJleHAiOjE2OTMwMjExODgsImlhdCI6MTY5MjkzNDc4OH0.dwnSEwHdfYW9OTv2ypJHI8gExSNgqKomRP4d4BCzie7HrT5dILseGcbAK20uFm2zRi4MpeO-1h1NJe5BFevFzw',
            //     },
            //   })
            //     .get('/owners/1')
            //     .reply(200, userMock)

                // let stateOwnerList = store.getState().ownersApi;
                // console.log("stateOwnerList111222 ", stateOwnerList)


           
              // const { result: ownerList } =renderHook(() => useGetOwnerListQuery({ checkToken: 'token' }), { wrapper: HocWrapper });
              //     expect(ownerList.current).toMatchObject({
              //         status: 'pending',
              //         endpointName: 'getOwnerList',
              //         isLoading: true,
              //         isSuccess: false,
              //         isError: false,
              //         isFetching: true,
              //       });
            
              //       console.log("ownerList111 ", ownerList)

              //       const handleRequest = [
              //         rest.get(`/owners/1`, (_, res, ctx) =>
              //           res(ctx.status(200), ctx.json<IOwnerTypeView[]>(userMock), ctx.delay(3000))
              //         ),
              //       ]; 
                  
            
              //     const server = setupServer(...handleRequest); 
              //           console.log("server serverserver", server)

                        
       
                   
              //         let stateOwnerList = await store.getState().ownersApi;
              //         console.log("stateOwnerList LAST ", stateOwnerList)

             
//     })
// })
