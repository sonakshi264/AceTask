import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function CustomTabPanel(props) {
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

CustomTabPanel.propTypes = {
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

export default function Section2() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
    <h3 style={{color:'grey',marginTop:'100px',textAlign:'center'}}>Browse Job By Area</h3>
    <Box sx={{ width: '80%',margin:'auto' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Job By Title" {...a11yProps(0)} />
          <Tab label="Job By Skill" {...a11yProps(1)} />
          <Tab label="Job By Category" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <table cellPadding={5} cellSpacing={10}>
            <tr>
                <td>Project Manager</td>
                <td>Andriod Developer</td>
                <td>Devops Engineer</td>
                <td>PHP Developer</td>
                <td>PHP Developer</td>
            </tr>
            <tr>
                <td>Data Analyst</td>
                <td>Program Manager</td>
                <td>Game Developer</td>
                <td>Python Developer</td>
                <td>Python Developer</td>
            </tr>
            <tr>
                <td>Web Developer</td>
                <td>SQL Developer</td>
                <td>Network Administrator</td>
                <td>Mobile Developer</td>
                <td>Mobile Developer</td>
            </tr>
            <tr>
                <td>Scrum master</td>
                <td>Frontend Developer</td>
                <td>Salesforce Developer</td>
                <td>Linux Administrator</td>
                <td>Linux Administrator</td>
            </tr>
            <tr>
            <td>Scrum master</td>
            <td>Scrum master</td>
            <td>Scrum master</td>
            <td>Scrum master</td>
            <td>Scrum master</td>
            </tr>
        </table>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        Item Two
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        Item Three
      </CustomTabPanel>
    </Box>
    </>
  );
}