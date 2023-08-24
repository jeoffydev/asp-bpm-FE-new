import { GridColDef } from "@mui/x-data-grid";
import { createTableGridColumns } from "./Helper";
import { act } from "react-dom/test-utils";
import HocWrapper from "../HocWrapper";
import { render, waitFor } from "@testing-library/react";
import App from "../App";
import OwnerUserTableAdvancedComponent from "../owner/common/OwnerUserTableAdvancedComponent";
import { IOwnerTypeView } from "../services/owner/ownerSliceApi";

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
            <OwnerUserTableAdvancedComponent confirmDeleteId={()=>{}} users={usersMockData} columns={columnsMockTest} />
        </HocWrapper>
    ));
});

test('createTableGridColumns test',  async () => {
   const columnTest = createTableGridColumns(columnsMockTest);
   expect(columnTest).toHaveLength(4); 

   if( columnTest ) {
    expect(columnTest[0].minWidth).toBe(200);
    expect(columnTest[1].field).toBe('headerName');
    }
});