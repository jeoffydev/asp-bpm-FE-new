import { GridColDef } from "@mui/x-data-grid";

export const appSessionStorageVar = "_authBpm_v"
export const apiUrl = '/api/OwnerApi';
export const apiOrganizationUrl = '/api/OrganizationApi';
export const apiAdministratorUrl ='/api/AdministratorApi';
export const apiUrlNoresult = '/api/NullApi';
export const ownerRole = 'Owner';
export const adminRole = 'Admin';
export const orgRole = 'Organization';
export const ownerEmailAddress = 'jhipolito.saas@gmail.com'

export const colours = {
    primaryOrange: '#FF5733',
    bodyColour: '#4444444',
    primaryBlue: '#00395b',
    lightGrey: '#e5e5e5',
    lightestBlue: '#F3FAFF',
    white: '#FFFFFF',
    danger: '#E74C3C'
}


export const themeColours = {
    violet: '#7525D1',
    purple: '#8D43BE',
    pink: '#EA40D5',
    yellow: '#F5C347',
    blue: '#2D66F4',
    lightGrey: '#EDF0F6',
    darkGrey: '#D9D9D9',
    black: '#181818',
    beige: '#F1EDE7',
    white: '#FFFFFF'
}



// Owners link

export const ownerUrl = '/owner/dashboard';
export const portalUrl = '/portal/dashboard';



export const createTableGridColumns  = (datas: any[]) : GridColDef[] | undefined => {
    /* Sample  output
        const columns: GridColDef[] = [
            { field: 'id', headerName: 'Id', flex: 1, minWidth: 10 },
            { field: 'fullName', headerName: 'Name', flex: 1, minWidth: 140 },
            { field: 'email', headerName: 'Email', flex: 1, minWidth: 150 },
            { field: 'roleName', headerName: 'Role', flex: 1, minWidth: 150 },
            { field: 'active', headerName: 'Active', flex: 1, minWidth: 150 },
        ];
    */
    if ( datas ) {
        var dataLength = Object.keys(datas[0]).length - 1;
        var getMinWidth = Math.floor(600/dataLength);

        var dataToArray = [datas[0]];
        var gridFinal = dataToArray.map((f: any) => {
            var fKeys = Object.keys(f);
            return fKeys.map((k) => {
                const kSplit = k.split(/(?=[A-Z])/);
                return {
                    field: k,
                    headerName: kSplit.join(' ').toUpperCase(),
                    flex: 1,
                    minWidth: getMinWidth
                }
            })
        })
        return gridFinal[0];
    }
  }


  function stringToColor(string: string) {
    let hash = 0;
    let i;
  
    /* eslint-disable no-bitwise */
    for (i = 0; i < string.length; i += 1) {
      hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }
  
    let color = '#';
  
    for (i = 0; i < 3; i += 1) {
      const value = (hash >> (i * 8)) & 0xff;
      color += `00${value.toString(16)}`.slice(-2);
    }
    /* eslint-enable no-bitwise */
  
    return color;
  }
  
  export const stringAvatar = (name: string) => {
    return {
      sx: {
        bgcolor: stringToColor(name),
      },
      children: name ? `${name.split(' ')[0][0]}`: '',
    };
  }


  
