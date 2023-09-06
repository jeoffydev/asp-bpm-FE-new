import { fireEvent, render, screen, waitFor } from '@testing-library/react';

import HocWrapper from '../../HocWrapper';
import LoginPageComponent from '../login/LoginPageComponent';

beforeEach(() => {
    render(
        <HocWrapper>
            <LoginPageComponent />
        </HocWrapper>
    );
});

test('renders Login Page Component with tabs', async () => {
    
    const contractor = screen.getByRole('tab', {
        name: /contractor/i
    })
    expect(contractor).toBeInTheDocument();

    const portal = screen.getByRole('tab', {
        name: /portal/i
    })
    expect(portal).toBeInTheDocument();
   
});

test('Test Contractor job number field', async () => {

    const contractor = screen.getByRole('tab', {
        name: /contractor/i
    })
        fireEvent.click(contractor);
        await waitFor(() => {
            const contractorInput = screen.getByTestId('beimsValueContractor');
            expect(contractorInput).toHaveValue('');
        });
        const contractorBtn = screen.getByRole('button', {
            name: /verify/i
        })
        fireEvent.click(contractorBtn);

        await waitFor(() => {
           const req = screen.getByText(/job number is required/i);
           expect(req).toBeInTheDocument(); 

           const contractorInput = screen.getByTestId('beimsValueContractor');
           fireEvent.change(contractorInput, { target: { value: 'JobNumber123' } });
            expect(contractorInput).toHaveValue('JobNumber123');
           
        });

        
       

});



test('Test Portal email address field', async () => {

    const portal = screen.getByRole('tab', {
        name: /portal/i
    })
        fireEvent.click(portal);
        await waitFor(() => {
            const portalInput = screen.getByTestId('emailPortalLogin');
            expect(portalInput).toHaveValue('');
        });
        const portalBtn = screen.getByRole('button', {
            name: /email a login link/i
        })
        fireEvent.click(portalBtn);

        await waitFor(() => {
           const req = screen.getByText(/email address is required/i);
           expect(req).toBeInTheDocument();

           const portalInput = screen.getByTestId('emailPortalLogin');
           fireEvent.change(portalInput, { target: { value: 'jeoffy@email.com' } });
            expect(portalInput).toHaveValue('jeoffy@email.com');
        });

       
      
});
 



