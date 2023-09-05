import { fireEvent, render, screen, waitFor } from '@testing-library/react';

import HocWrapper from '../../HocWrapper';
import BodyContentComponent from '../body/BodyContentComponent';
import BannerComponent from '../common/BannerComponent';

beforeEach(() => {
    render(
        <HocWrapper>
            <BodyContentComponent />
        </HocWrapper>
    );
});

test('renders Body Content Component with input email type', async () => {
    
    const title = screen.getByText(/build\./i)
    expect(title).toBeInTheDocument();

    const emailInput = screen.getByRole('textbox', {
        name: /email address/i
      })
    expect(emailInput).toBeInTheDocument();

    const safety = screen.getByTestId('MasksIcon');
    expect(safety).toBeInTheDocument();
   
});

test('input email type on homepage without value', async () => {
    const sendButton = screen.getByTestId('SendIcon');
      fireEvent.click(sendButton);
      await waitFor(() => {
        const emailInput = screen.getByRole('textbox', {
            name: /email address/i
          })
          expect(emailInput).toHaveValue('');
      });
});

test('Banner COmponent title render', async () => {
    render(
        <HocWrapper>
            <BannerComponent firstWord={'Build.'} secondWord={'Assign.'} thirdWord={'Track'}>
                Sub-title text
            </BannerComponent>
        </HocWrapper>
    );

    const title = screen.getAllByTestId('thirdWord')
    expect(title).toBeTruthy();
    const subtitle = screen.getAllByTestId('subTitle')
    expect(subtitle).toBeTruthy();

    
});




