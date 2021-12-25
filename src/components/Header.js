import React, {useState} from 'react'
import logo from '../assets/logo.png';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from "@mui/material/Button";
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import ExploreOutlinedIcon from '@mui/icons-material/ExploreOutlined';
import HeadsetMicOutlinedIcon from '@mui/icons-material/HeadsetMicOutlined';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';


function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }
  

function Header() {

    const [tabIndex, setTabIndex] = useState(0);

    const handleChange = (event, currentIndex) => {
        setTabIndex(currentIndex);
      };

    return (
        <>
             <AppBar position="static" className='appBar'>
                <Toolbar variant="dense" className='headerLayout'>           
                    <img src={logo}  className='imgLogo'/>
                    <Tabs value={tabIndex} onChange={handleChange} aria-label="basic tabs example" >
                    <Tab icon= {<ExploreOutlinedIcon/>} {...a11yProps(0)} label="Discovery"  color="success"/>
                    <Tab icon={<PeopleAltOutlinedIcon/>}{...a11yProps(1)} label="Invited"  color="success"/>
                    <Tab icon={<HeadsetMicOutlinedIcon  />} {...a11yProps(2)} label="Support" color="success"/>
                    </Tabs>

                    <div className='buttonDiv'>
                        <Button variant="outlined" > Post Job</Button>
                        <Button variant="contained" style={{color : 'white'}}>Sign in</Button>  
                    </div>
                
                </Toolbar>

            </AppBar>   
            
        </>
    )
}

export default Header
