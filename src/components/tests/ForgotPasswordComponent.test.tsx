import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import HocWrapper from '../../HocWrapper';
import ForgotPasswordComponent from '../login/ForgotPasswordComponent';

beforeEach(() => {
    render(
        <HocWrapper>
            <ForgotPasswordComponent />
        </HocWrapper>
    );
});
 

test('Test forgot password', async () => {

    
        const forgotInput = screen.getByTestId('emailForgotOne');
        expect(forgotInput).toHaveValue('');
       
        const forgotBtn = screen.getByRole('button', {
            name: /reset password/i
        })
        fireEvent.click(forgotBtn);

        await waitFor(() => {
           const req = screen.getByText(/email address is required/i);
           expect(req).toBeInTheDocument();

           const forgotInput = screen.getByTestId('emailForgotOne');
           fireEvent.change(forgotInput, { target: { value: 'jeoffy@email.com' } });
            expect(forgotInput).toHaveValue('jeoffy@email.com');
        });
      
});
 



