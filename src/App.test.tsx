import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import HocWrapper from './HocWrapper';



test('renders App with Redux', () => {
  render(
    <HocWrapper>
      <App />
    </HocWrapper>
  ); 
});

