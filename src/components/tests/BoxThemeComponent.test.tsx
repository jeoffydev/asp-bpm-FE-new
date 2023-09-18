import { render, screen } from '@testing-library/react';

import HocWrapper from '../../HocWrapper';
import BoxThemeComponent from '../organization/body/common/BoxThemeComponent';

beforeEach(() => {
    render(
        <HocWrapper>
            <BoxThemeComponent buttonText='View Projects' handleClick={()=>{}}>
                 Sample Text
            </BoxThemeComponent>
        </HocWrapper>
    );
});

test('renders BoxThemeComponent', async () => {
    
    const bodyText = screen.getByTestId('box-theme-component-test')
    expect(bodyText).toHaveTextContent(/sample text/i);

    const buts = screen.getByRole('button', {
        name: /view projects/i
      })
    expect(buts).toBeInTheDocument();
 
});
 




