import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { useNavigate } from 'react-router-dom';

export default function MuiTab() {
  const [value, setValue] = React.useState(' ');
  const nav = useNavigate();

  const handleChange = (event, newValue) => {
    nav(newValue);
  };

  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{  borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="Item One"  value="/first"/>
            <Tab label="Item Two" value="/second" />
            <Tab label="Item Three" value="/third" />
          </TabList>
        </Box>
      </TabContext>
    </Box>
  );
}

export function ItemOne(){
    return<>
    <p>Item One</p>
    </>
}
export function ItemTwo(){
    return<>
    <p>Item Two</p>
    </>
}
export function ItemThree(){
    return<>
    <p>Item Three</p>
    </>
}