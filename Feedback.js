import React from 'react';
import './App.css';
import AppBar  from '@mui/material/AppBar';
import Toolbar  from '@mui/material/Toolbar';
import Typography from '@mui/material/Button';
import {NavLink} from 'react-router-dom';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';




export default function Feedback(){
  
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
            <div style={{marginLeft:'550px'}}>
            <Box
      sx={{
        width: 500,
        height: 500,
        backgroundColor: 'lavender',
        '&:hover': {
          backgroundColor: 'azure',
          opacity: [0.9, 0.8, 0.7],
        },
      }}
    ><br/>
      <center><h1>Feedback</h1>

<TextField
          required
          id="outlined-required"
          label="Name"
         placeholder='Name...'
         style={{width:'350px'}}
        
        /><br/><br/>
<TextField
         
          id="outlined-required"
          label="Phone number"
         placeholder='Phone number...'
         required
         style={{width:'350px'}}
        /><br/><br/>
        <TextField
          required
          id="outlined-required"
          label="Email"
         placeholder='Email...'
         style={{width:'350px'}}
        /><br/><br/>
                        <TextField
          id="outlined-textarea"
          label="Comment"
          placeholder="Comments..."
          style={{width:'350px'}}
          multiline
        /><br/><br/><br/>


<Button variant="contained" color="info" style={{width:'150px'}}>
  Submit
</Button></center>
    </Box>
    </div>
         </div>
                
    );
}


