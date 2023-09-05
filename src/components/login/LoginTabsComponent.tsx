import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import { themeColours } from '../../utils/Helper';


import Button from '@mui/material/Button';
import { useIntl } from 'react-intl';
import * as msg from '../../utils/messages'; 


interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

const BoxTab = styled(Box)(() => ({
  padding: '1.5rem 0'
}));

const BoxTabBtn = styled(Tab)(() => ({
  width: '50%',
  color: themeColours.black,
  fontWeight: '700',
  fontSize: '1rem',
 
}));

const BoxTabWrapper = styled(Tabs)(() => ({
 '& .MuiTabs-indicator': {
  backgroundColor: themeColours.black
 },
 '& button.Mui-selected': {
    color: themeColours.black
 }
 
}));

const ButtonLogin = styled(Button)(() => ({
  width: '100%',
  borderRadius: '5px',
  boxShadow: "none",
 }));


function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

 
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <BoxTab>
          {children}
        </BoxTab>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function LoginTabsComponent() {
  const intl = useIntl();
  const [value, setValue] = React.useState(0);
  


  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <BoxTabWrapper value={value} onChange={handleChange} >
          <BoxTabBtn label="Contractor" {...a11yProps(0)} />
          <BoxTabBtn label="Portal" {...a11yProps(1)} />
        </BoxTabWrapper>
      </Box>
      <CustomTabPanel value={value} index={0}>
        Item One <br />
        <ButtonLogin className='theme-button' variant="contained"> {intl.formatMessage(msg.loginMessage.contractorLogin)} </ButtonLogin>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        Item Two
      </CustomTabPanel>
    </Box>
  );
}