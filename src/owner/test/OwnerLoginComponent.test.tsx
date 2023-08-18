import React from 'react';
import { render, screen } from '@testing-library/react';
import OwnerLoginComponent from '../OwnerLoginComponent';
import HocWrapper from '../../HocWrapper';


test('renders Owners login without any issue', () => {
    render(
        <HocWrapper>
            <OwnerLoginComponent />
        </HocWrapper>
    );
    const ownerElement = screen.getByText(/provider/);
    expect(ownerElement).toBeInTheDocument();
});