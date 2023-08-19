
import { act, fireEvent, render, screen, waitFor } from '@testing-library/react';
import OwnerLoginComponent from '../OwnerLoginComponent';
import HocWrapper from '../../HocWrapper';
import OwnerUserTableAdvancedComponent from '../common/OwnerUserTableAdvancedComponent';
import { GridColDef } from '@mui/x-data-grid';
import { IOwnerTypeView } from '../../services/owner/ownerSliceApi';

const usersMockData: IOwnerTypeView[] = [
    {
        "id": 1006,
        "fullName": "Doris owner",
        "email": "doris_owner@yahoo.com",
        "active": true,
        "authRoleId": 1,
        "roleName": "Owner"
    },
    {
        "id": 1001,
        "fullName": "Jeoffy Hipolito",
        "email": "jeoffy_hipolito@yahoo.com",
        "active": true,
        "authRoleId": 1,
        "roleName": "Owner"
    }
];

const columnsMockTest: GridColDef[] = [
    { field: 'id', headerName: 'Id', flex: 1, minWidth: 10 },
    { field: 'fullName', headerName: 'Full Name', flex: 1, minWidth: 140 },
    { field: 'email', headerName: 'Email', flex: 1, minWidth: 150 },
    { field: 'roleName', headerName: 'Role Name', flex: 1, minWidth: 150 },
    { field: 'active', headerName: 'Active', flex: 1, minWidth: 150 },
];


beforeEach(async () => {
    await act( async () => render(
        <HocWrapper>
            <OwnerUserTableAdvancedComponent users={usersMockData} columns={columnsMockTest} />
        </HocWrapper>
    ));
});

test('Renders Owner Table Grid without any issues with column headers', async () => {
    
    const id = screen.getByText(/id/i);
    expect(id).toBeInTheDocument();
    const fullName = screen.getByText(/full name/i);
    expect(fullName).toBeInTheDocument();
    const email = screen.getByText(/email/i);
    expect(email).toBeInTheDocument();
   
});

test('Renders Owner Table Grid with the datas', async () => {
    
    const userOne = screen.getByRole('cell', {
        name: /doris owner/i
      })
    expect(userOne).toBeInTheDocument();

    const userTwo = screen.getByRole('cell', {
        name: /jeoffy hipolito/i
      })
    expect(userTwo).toBeInTheDocument();
   
});



test('Row Grid click on any users for edit and delete', async () => {
    
    const userOne = screen.getByRole('cell', {
        name: /doris owner/i
      })
      fireEvent.click(userOne); 

      await waitFor(() => {
        const editButton = screen.getByRole('button', {
            name: /edit/i
          })
        expect(editButton).toBeInTheDocument();

        const deleteButton = screen.getByRole('button', {
            name: /delete/i
          })
          expect(deleteButton).toBeInTheDocument(); 
      });
   
});