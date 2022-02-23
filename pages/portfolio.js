import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import alrasm from "../public/1612547269_55-p-serii-neon-fon-86.jpg"
import Image from 'next/image';

function TabPanel(props) {
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
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function Portfolio() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="portfolio">
    <div className="aboutHeader"> <h1>PORTFOLIO</h1></div>


    <Box sx={{ width: '100%' }}>
      <Box  sx={{ borderBottom: 1, borderColor: 'divider', color: 'secondary', display: 'flex',
  alignItems: 'center',
  justifyContent: 'center', }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="ALL" {...a11yProps(0)} />
          <Tab label="CODED" {...a11yProps(1)} />
          <Tab label="DESIGNED" {...a11yProps(2)} />
        </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
        <div className='allbolim'>
            <div className='allrasmlar'>
            <div className="pngrasmla">
                        <Image src={alrasm} />
                    </div>
                    <div className="pngrasmla">
                        <Image
                          src={alrasm}
                        />
                    </div>
                    <div className="pngrasmla">
                        <Image src={alrasm} />
                    </div>
                    <div className="pngrasmla">
                        <Image src={alrasm} />
                    </div>
                    <div className="pngrasmla">
                        <Image src={alrasm} />
                    </div>
                    <div className="pngrasmla">
                        <Image src={alrasm} />
                    </div>
                    
            </div>
        </div>
        </TabPanel>
        <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
    </Box>
    </div>
  );
}
