
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import OwnerLoginComponent from '../OwnerLoginComponent';
import HocWrapper from '../../HocWrapper';

beforeEach(() => {
    render(
        <HocWrapper>
            <OwnerLoginComponent />
        </HocWrapper>
    );
});

test('renders Owners login without any issue', async () => {
    
    const ownerElement = screen.getByRole('textbox');
    expect(ownerElement).toBeInTheDocument();
   
});

test('renders Owners login click button without textboxes values', async () => {
    const loginButton = screen.getByRole('button', {
        name: /enter/i
      });
      fireEvent.click(loginButton);
      await waitFor(() => {
        screen.getByText(/email field is required/i)
        screen.getByText(/password field is required/i)
      });
});

// test('renders add values to Login textboxes with values', async () => {
    
//     const emailTxtBox = screen.getByTestId('loginEmailOwner');
//     const pwTxtBox = screen.getByTestId('loginPwOwner');
//     fireEvent.change(emailTxtBox, { target: { value: 'jeoffy_hipolito@yahoo.com' } });
//     fireEvent.change(pwTxtBox, { target: { value: '1234567' } });
//     const loginButton = screen.getByRole('button', {
//         name: /enter/i
//       });
//       fireEvent.click(loginButton);
//       expect(emailTxtBox).toHaveValue('jeoffy_hipolito@yahoo.com');

// });


