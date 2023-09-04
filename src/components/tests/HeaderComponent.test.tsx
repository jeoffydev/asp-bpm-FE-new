import { fireEvent, render, screen, waitFor } from '@testing-library/react';

import HocWrapper from '../../HocWrapper';
import HeaderComponent from './../header/HeaderComponent';

beforeEach(() => {
    render(
        <HocWrapper>
            <HeaderComponent />
        </HocWrapper>
    );
});

test('renders Header Component  with login button and without any issue', async () => {
    
    const productElement = screen.getByRole('button', {
        name: /product/i
      })
      const loginElement = screen.getByRole('button', {
        name: /login/i
      })
     expect(loginElement).toBeInTheDocument(); 
     expect(productElement).toBeInTheDocument(); 
   
});

