
import { store } from '../../store/store';
import { addAuthenticationUserToken } from '../../services/user/userJwtTokenApi';


describe('User Token RTK', () => {
    it('handles user token dispatch', async () => {
            store.dispatch(addAuthenticationUserToken({
            token: '12345'
            }));
    
            const state = await store.getState().userJwtToken;
            expect(state.userAuthToken.token).toBe('12345')
  
    })
    
  })
  