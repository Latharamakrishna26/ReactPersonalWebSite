import React from 'react';
import './App.css';
import AppBar  from '@mui/material/AppBar';
import Toolbar  from '@mui/material/Toolbar';
import Typography from '@mui/material/Button';
import {NavLink} from 'react-router-dom';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';

export default function Contact(){
    return(
        <div class="Calender">
            <div  class='Nav' style={{height:'11vh'}}>
            <AppBar position='static' color='inherit' >
                <Toolbar>
                <NavLink to="/" style={{textDecoration:"none" , color:"black"}}> <h3>LATHA</h3></NavLink>
                    <span style={{paddingLeft:'900px',paddingBottom:4}}>
                    <Typography variant="h6" component="div" sx={{flexGrow:0}} >
                    <NavLink to="/calender" style={{textDecoration:"none" , color:"black"}}> Calender</NavLink>

                    </Typography>
                    <Typography variant="h6" component="div" sx={{flexGrow:0}}>
                    <NavLink to="/map" style={{textDecoration:"none" , color:"black"}}>Map</NavLink>

                    </Typography>
                    <Typography variant="h6" component="div" sx={{flexGrow:0.1}}>
                    <NavLink to="/gallery" style={{textDecoration:"none" , color:"black"}}>Gallery</NavLink>

                    </Typography>
                    <Typography variant="h6" component="div" sx={{flexGrow:0.1}}>
                    <NavLink to="/feedback" style={{textDecoration:"none" , color:"black"}}>Feedback</NavLink>


                    </Typography>
                    <Typography variant="h6" component="div" sx={{flexGrow:0.1}}>
                     
                    <NavLink to="/contact" style={{textDecoration:"none" , color:"black"}}>Contact me</NavLink>

                    </Typography>

                    </span>
                   
                </Toolbar>
            </AppBar>   

            </div>
            <Grid container spacing={2}>
        <Grid item xs={6}>
        <div style={{marginLeft:'260px',marginTop:'45px'}}>
            <Box
      sx={{
        width: 500,
        height: 500,
        backgroundColor: 'MediumPurple',
        '&:hover': {
          backgroundColor: 'PeachPuff',
          opacity: [0.9, 0.8, 0.7],
        
        },
      }}
    ><br/>
      <center><h1>Contact me</h1>

<TextField
          required
          id="outlined-required"
          label="First Name"
          
          color='secondary'
         placeholder='Enter your First Name...'
        style={{width:'350px'}}
        /><br/><br/>
<TextField
         
          id="outlined-required"
          label="Last Name"
          color='secondary'
         placeholder='Enter your Last number...'
         style={{width:'350px'}}
         required
        /><br/><br/>
        <TextField
          required
          id="outlined-required"
          color='secondary'
          label="Email"
         placeholder='Enter your Email id...'
         style={{width:'350px'}}
        /><br/><br/>
                        <TextField
          id="outlined-textarea"
          color='secondary'
          label="Message"
          placeholder="Write something..."
          multiline
          style={{width:'350px',height:'80px'}}
        /><br/><br/><br/>


<Button variant="contained" color="secondary" style={{width:'150px'}} >
  Submit
</Button></center>
    </Box>
  </div>
  
         
        </Grid>
        <Grid item xs={6}>
            <div class="item" >
     <h1>  < LocationOnIcon></LocationOnIcon>Address</h1>
       <p>SankaranKoil, Tenkasi -627754</p><br/>
       <h1><EmailIcon></EmailIcon>Email</h1>
       <p>latha262001@gmail.com</p><br/>
       <h1><PhoneIcon></PhoneIcon>Phone</h1>
       <p>8056706601</p>
       </div>
        </Grid>
    </Grid>
            </div>
            

      
      

        
            
            
            
    );
}


