import { fireEvent, render, screen, waitFor } from '@testing-library/react';

import HocWrapper from '../../HocWrapper';
import EditPasswordComponent from '../organization/body/common/edit-account/EditPasswordComponent';

beforeEach(() => {
    render(
        <HocWrapper>
            <EditPasswordComponent />
        </HocWrapper>
    );
});

test('renders EditPasswordComponent', async () => {
    
    const bodyPw1 = screen.getByTestId('pw-edit1');
    expect(bodyPw1).toBeInTheDocument();

    const bodyPw2 = screen.getByTestId('pw-edit2');
    expect(bodyPw2).toBeInTheDocument();

    const buts = screen.getByRole('button', {
        name: /update password/i
      })
    expect(buts).toBeInTheDocument();
 
});

test('renders EditPassword form', async () => {
    
    const buts = screen.getByRole('button', {
        name: /update password/i
      })
    fireEvent.click(buts);
        await waitFor(() => {
            expect(screen.getByTestId('loading-test')).toBeInTheDocument();
    });
});





