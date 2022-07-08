import React from 'react';
import './App.css';
import AppBar  from '@mui/material/AppBar';
import Toolbar  from '@mui/material/Toolbar';
import Typography from '@mui/material/Button';
import {NavLink} from 'react-router-dom';





export default function Map(){
    return(
        <div class="Map">
            <div  class='Nav' style={{height:'11vh'}}>
            <AppBar position='static' color='inherit' >
                <Toolbar>
                <NavLink to="/" style={{textDecoration:"none" , color:"black"}}><h3> LATHA</h3></NavLink>
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

            <iframe  style={{border:"0", width: "100%", height: "650px"}} src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d23172.199576116356!2d76.96472405629287!3d11.006472298590367!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e6!4m5!1s0x3ba85855910aed83%3A0x80875de5cd370a9d!2sGandhipuram%2C%20Tamil%20Nadu%20641012!3m2!1d11.0175845!2d76.9674075!4m5!1s0x3ba8590b89fdb05f%3A0x4874f32fe1c2c1b6!2ssmartcliff!3m2!1d10.997478!2d77.01018959999999!5e1!3m2!1sen!2sin!4v1650445912100!5m2!1sen!2sin"  frameborder="0" allowfullscreen></iframe>

            </div>

            
            
    );
}


