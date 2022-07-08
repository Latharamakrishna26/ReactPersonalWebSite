import React from 'react';
import './App.css';
import AppBar  from '@mui/material/AppBar';
import Toolbar  from '@mui/material/Toolbar';
import Typography from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import latha from './Latha.jpg';
import {NavLink} from 'react-router-dom';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';


export default function Home(){
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
    return(
        <div class="Home">
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
            
            <Grid container spacing={2}>
  <Grid item xs={2}>
    <div className='side'>
        <center><h1>MENU</h1></center><br/><br/><br/><br/>
  <Stack direction="col"  style={{paddingLeft:40}} spacing={4}>
      <Button variant="contained">Home</Button>
    </Stack><br/><br/>
    <Stack direction="col" style={{paddingLeft:40}} spacing={4}>
      <Button variant="outlined">
      <NavLink to="/education" >Education</NavLink></Button>

    </Stack><br/><br/>
    <Stack direction="col" style={{paddingLeft:40}} spacing={4}>
      
      <Button
        variant="outlined"
        aria-controls={open ? 'fade-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      ><NavLink to=''>
        Favourites</NavLink>
      </Button>
      <Menu
        id="fade-menu"
        MenuListProps={{
          'aria-labelledby': 'fade-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
      >
        <MenuItem onClick={handleClose}> <NavLink to="/Food" >Food</NavLink></MenuItem>
        <MenuItem onClick={handleClose}>      <NavLink to="/Music" >Music&Video</NavLink>
</MenuItem>
        <MenuItem onClick={handleClose}> <NavLink to="/Sports" >Sports</NavLink></MenuItem>
        <MenuItem onClick={handleClose}><NavLink to="/Vehicle" >Vehicles</NavLink></MenuItem>

      </Menu>

  
    </Stack><br/><br/>
    <Stack direction="col" style={{paddingLeft:40}} spacing={4}>
      <Button variant="outlined">
      <NavLink to="/Personality" >Personality</NavLink>
      </Button>
    </Stack><br/><br/>
    <Stack direction="col" style={{paddingLeft:40}} spacing={4}>
      <Button variant="outlined"> 
      <NavLink to="/family" >Family</NavLink>
</Button>
    </Stack>
    </div>
    
  </Grid>
  <Grid item xs={10}>
   <container fixed> 
   <Box
      sx={{
        display: 'flex',
        '& > :not(style)': {
          m: 1,
          width: 608,
          height: 428,
        },
      }}
    >
      <Paper variant="outlined">
      <img src={latha} alt="latha" style={{width:'610px',height:'630px'}} />
        </Paper>
     
        
 
       <Paper variant="" style={{paddingTop:180,backgroundColor:'lavenderblush'}}  >
        <center><h1>LATHA</h1>
        <h3  class="animate-charcter">Front End Developer</h3><br/>
       
        <Button variant="outlined" class='but'  ><NavLink to="./About">See Profile</NavLink></Button></center>
      
      </Paper>

     
    </Box>
    </container>
</Grid>

   </Grid></div>        
            

        
            
            
            
    );
}


