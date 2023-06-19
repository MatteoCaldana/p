import React, { useState } from 'react';

import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

const TabPanel = (props) => {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {children}
    </div>
  );
}

const allyProps = (index) => {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const BasicTabs = ({labels, tabs}) => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs variant="scrollable" scrollButtons allowScrollButtonsMobile 
          value={value} onChange={handleChange} textColor="inherit"
        >
          {labels.map((l, i) => <Tab label={l} key={i} {...allyProps(i)} />)}
        </Tabs>
      </Box>
      {tabs.map((t, i) => 
        <TabPanel value={value} index={i} key={i}>
          <t.component/>
        </TabPanel>
      )}
    </Box>
  );
}

export default BasicTabs;