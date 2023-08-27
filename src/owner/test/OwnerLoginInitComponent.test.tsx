

import { act, fireEvent, render, screen, waitFor } from '@testing-library/react';

import HocWrapper from '../../HocWrapper';
import OwnerLoginInitComponent from '../OwnerLoginInitComponent';

beforeEach(() => {
    render(
        <HocWrapper>
            <OwnerLoginInitComponent />
        </HocWrapper>
    );
});


test('renders Owners initial login without any issue', async () => {
    
    const ownerElement = screen.getByRole('textbox');
    expect(ownerElement).toBeInTheDocument();
    const ownerInitBtn = screen.getByRole('button');
    expect(ownerInitBtn).toBeInTheDocument(); 
   
});

test('renders Owners login click button without textboxes values', async () => {
    act(() => {
    const loginButton = screen.getByRole('button', {
        name: /email a login link/i
      });
      fireEvent.click(loginButton);
    });
      await waitFor(() => {
        screen.getByText(/email field is required/i)
      });
});

test('renders add values to Login textboxes with values', async () => {
    
    const emailTxtBox = screen.getByTestId('loginEmailInitOwner');
    fireEvent.change(emailTxtBox, { target: { value: 'jeoffy_hipolito@yahoo.com' } });
    act(() => {
    const loginButton = screen.getByRole('button', {
        name: /email a login link/i
      });
      fireEvent.click(loginButton);
    });
      expect(emailTxtBox).toHaveValue('jeoffy_hipolito@yahoo.com');

});