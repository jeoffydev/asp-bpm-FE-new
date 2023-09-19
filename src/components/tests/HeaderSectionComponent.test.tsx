import { render, screen  } from '@testing-library/react';
import AddIcon from '@mui/icons-material/Add';
import HocWrapper from '../../HocWrapper';
import HeaderSectionComponent from '../organization/header/HeaderSectionComponent';

beforeEach(() => {
    render(
        <HocWrapper>
            <HeaderSectionComponent handleClick={()=>{}} message='Add Project' showButton={true}> <AddIcon /> </HeaderSectionComponent>
        </HocWrapper>
    );
});

test('renders Header Section Component with header button', async () => {
    
    const buttonMessage = screen.getByRole('button', {
        name: /add project/i
      })
    expect(buttonMessage).toBeInTheDocument();
   
});

test('renders Header Section Component with search and active job buttons', async () => {
    expect(screen.getByTestId('test-header-button')).toBeInTheDocument();
    expect(screen.getByTestId('test-header-activejob')).toBeInTheDocument();
    expect(screen.getByTestId('test-header-search')).toBeInTheDocument();
});

