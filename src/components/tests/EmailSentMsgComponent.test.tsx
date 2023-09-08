import {  render, screen } from '@testing-library/react';

import HocWrapper from '../../HocWrapper';
import EmailSentMsgComponent from '../common/EmailSentMsgComponent';



test('EmailSentMsgComponent without props', () => {
    
    render(
        <HocWrapper>
            <EmailSentMsgComponent />
        </HocWrapper>
    );
    expect(screen.getByText(/email sent/i)).toBeInTheDocument()
}); 

test('EmailSentMsgComponent with props', () => {
    
    render(
        <HocWrapper>
            <EmailSentMsgComponent messageOne='email one' messageTwo='message two' />
        </HocWrapper>
    );
    expect(screen.getByText(/email one/i)).toBeInTheDocument()
    const headingTwo = screen.getByRole('heading', {
        name: /message two/i
    })
    expect(headingTwo).toBeInTheDocument()
}); 




