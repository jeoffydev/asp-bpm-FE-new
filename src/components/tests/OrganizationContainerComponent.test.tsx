import { fireEvent, render, screen, waitFor } from '@testing-library/react';

import HocWrapper from '../../HocWrapper';
import OrganizationContainerComponent from '../organization/OrganizationContainerComponent';

beforeEach(() => {
    render(
        <HocWrapper>
            <OrganizationContainerComponent>
                <></>
            </OrganizationContainerComponent>
        </HocWrapper>
    );
});

test('OrganizationContainerComponent() without any error', async () => {
    
    const sidebarMenu = screen.getByRole('button', {
        name: /menu/i
      })
    expect(sidebarMenu).toBeInTheDocument();
    fireEvent.click(sidebarMenu);
    await waitFor(() => {
        const sideBar = screen.getByTestId('sidebar-dashboard');
        expect(sideBar).toBeInTheDocument();
        fireEvent.click(screen.getByTestId('MenuIcon'));
        expect(sideBar).not.toBeInTheDocument();
    });
    
});
 



