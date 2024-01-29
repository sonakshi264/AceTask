import React from 'react'
import './Navbar.css'
// import { AppBar, Grid, Toolbar } from '@mui/material'
import logo from './logo.jpg'
import logo2 from './logo2.jpg'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
export default function Navbar() {
  return (
    // <AppBar style={{backgroundColor:'whitesmoke'}}>
    //      <Toolbar>
    //       <Grid container>
    //         <Grid item xs={3}>
    //           <img src={logo} alt='youpallogo' style={{mixBlendMode:'multiply'}}></img>
    //         </Grid>

    //         <Grid item xs={7}></Grid>
    //         <Grid item xs={1}>
    //           <NotificationsNoneIcon style={{color:'black'}}/>
    //         </Grid>
    //         <Grid item xs={1}>
    //           <img src={logo2} alt='logo2' style={{mixBlendMode:'multiply'}}></img>
    //         </Grid>
    //       </Grid>
    //      </Toolbar>
    //   </AppBar>
    <>
        <nav className='navbarclass'>
        <div className='logo1'>
           <img src={logo} alt='youpallogo'></img>
        </div>
        <div className='rightsidediv'>
        <NotificationsNoneIcon className='icon'></NotificationsNoneIcon>
        <img src={logo2} alt='unknownlogo'></img>
        </div>
        </nav>
    </>
  )
}
