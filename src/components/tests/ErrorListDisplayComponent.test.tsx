import {  render, screen } from '@testing-library/react';

import HocWrapper from '../../HocWrapper';
import ErrorListDisplayComponent from '../common/ErrorListDisplayComponent';

const errorsTestArray = [
    'Error 1', 'Error 2', 'Error 3'
];

test('ErrorListDisplayComponent with array of errors', () => {
    
    render(
        <HocWrapper>
            <ErrorListDisplayComponent errors={errorsTestArray} />
        </HocWrapper>
    );
    const list = screen.getAllByRole('listitem');
    expect(list).toBeTruthy();
    expect(screen.getByText(/error 2/i)).toBeInTheDocument()
}); 

test('ErrorListDisplayComponent with custom error', () => {
    
    render(
        <HocWrapper>
            <ErrorListDisplayComponent errors={['']} customMessage={'This is the error'} />
        </HocWrapper>
    );
    expect(screen.getByText(/this is the error/i)).toBeInTheDocument()
}); 




