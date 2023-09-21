import { fireEvent, render, screen, waitFor } from '@testing-library/react';

import HocWrapper from '../../HocWrapper';
import EditFullnameComponent from '../organization/body/common/edit-account/EditFullnameComponent';

beforeEach(() => {
    render(
        <HocWrapper>
            <EditFullnameComponent />
        </HocWrapper>
    );
});

test('renders EditFullnameComponent', async () => {
    
    const bodyText = screen.getByRole('textbox', {
        name: /full name/i
      })
    expect(bodyText).toBeInTheDocument();

    const buts = screen.getByRole('button', {
        name: /update details/i
      })
    expect(buts).toBeInTheDocument();
 
});

test('renders EditFullnameComponent form', async () => {
    
    const buts = screen.getByRole('button', {
        name: /update details/i
      })
    fireEvent.click(buts);


        await waitFor(() => {
            expect(screen.getByTestId('loading-test')).toBeInTheDocument();
        });
        
});
 




