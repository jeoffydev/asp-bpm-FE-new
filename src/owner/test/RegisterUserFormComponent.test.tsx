
import { act, fireEvent, render, screen, waitFor } from '@testing-library/react';
import OwnerLoginComponent from '../OwnerLoginComponent';
import HocWrapper from '../../HocWrapper';
import RegisterUserFormComponent from '../../global/RegisterUserFormComponent';
import { SubmitHandler } from 'react-hook-form';

const mockFn = jest.fn();
beforeEach( async () => {
    await act( async () => render(
        <HocWrapper>
            <RegisterUserFormComponent  onSubmitHandle={mockFn} />
        </HocWrapper>
    ));
});

test('renders owner registration form without any issues', async () => {
    const regNameOwner = screen.getByTestId('regNameOwner');
    expect(regNameOwner).toBeInTheDocument();
    const regEmailOwner = screen.getByTestId('regEmailOwner');
    expect(regEmailOwner).toBeInTheDocument();
    const regActiveOwner = screen.getByTestId('regActiveOwner');
    expect(regActiveOwner).toBeInTheDocument();
    const regPw1Owner = screen.getByTestId('regPw1Owner');
    expect(regPw1Owner).toBeInTheDocument();
    const regPw2Owner = screen.getByTestId('regPw2Owner');
    expect(regPw2Owner).toBeInTheDocument();
   
});

test('renders owner registration form with validation', async () => {
    act(() => {
        const regButton = screen.getByRole('button', {
            name: /submit/i
          });
          fireEvent.click(regButton); 
      });
    
      await waitFor(() => {
        screen.getByText(/name field is required/i)
        screen.getByText(/email field is required/i)
        screen.getByText(/password field is required/i)
        screen.getByText(/confirm password is required/i)
      });
   
});

test('Owner registration form with values and submit', async () => {

    const regNameOwner = screen.getAllByTestId('regNameOwner');
    fireEvent.change(regNameOwner[0], { target: { value: 'Test owner' } });
    const regEmailOwner = screen.getAllByTestId('regEmailOwner');
    fireEvent.change(regEmailOwner[0], { target: { value: 'test@owner.com' } });
    const regActiveOwner = screen.getAllByTestId('regActiveOwner');
    fireEvent.change(regActiveOwner[0], { target: { value: 'true' } });
    const regPw1Owner = screen.getAllByTestId('regPw1Owner');
    fireEvent.change(regPw1Owner[0], { target: { value: '123456' } });
    const regPw2Owner = screen.getAllByTestId('regPw2Owner');
    fireEvent.change(regPw2Owner[0], { target: { value: '123456' } });
    const regButton = screen.getByRole('button', {
        name: /submit/i
      });
      fireEvent.click(regButton);
     
   
});