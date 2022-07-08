import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import latha from './Latha.jpg';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Button from '@material-ui/core/Button';
import { NavLink } from 'react-router-dom';
import tenkasi from './Img/tenkasi.jpg';
import dad from './Img/dad.jpg';
import mom from './Img/mom1.jpg';
import ishu from './Img/ishu2.jpg';
export default function Family() {
  return (
   
    <Box sx={{ flexGrow: 1 }}>
       <NavLink to="/" ><Button variant="outlined" style={{width:'10px'}} ><ArrowBackIcon></ArrowBackIcon>
      </Button> </NavLink>
      <Grid container spacing={2}>
        <Grid item xs={6} md={4}>
        <div style={{marginLeft:'150px'}}>

        <Card sx={{ maxWidth: 345 }}>
      
        <CardMedia
          component="img"
          height="350"
          image={dad}
          alt="green iguana"
         
        />
        </Card>
        </div>
        </Grid>
        <Grid item xs={6} md={4}>
       <center> <Card sx={{ maxWidth: 345 }}>
      
      <CardMedia
        component="img"
        height="350"
        image={mom}
        alt="green iguana"
        
      />
      </Card></center>
        </Grid>
        <Grid item xs={6} md={4}>
        <Card sx={{ maxWidth: 345 }}>
      
      <CardMedia
        component="img"
        height="350"
        image={ishu}
        alt="green iguana"
      />
      </Card>
        </Grid>
        
      </Grid><br/><br/>
 
      <div style={{width:'1200px',marginLeft:'170px'}}>
     
      <Accordion>
        <AccordionSummary
         
          aria-controls="panel1a-content"
          id="panel1a-header"
          alignItem="center"
        >
        <h4>HOMETOWN</h4> 
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <Grid container spacing={2}>
          <Grid item xs={6}>
        <p>  My Hometown is Tenkasi...It is located in Tirunelveli...Many temples are in Tenkasi...While this town is known for waterfalls and temples, it has been made famous for its Courtallam Falls and Kasi Viswanathar Temple. Tenkasi is famous for its main temple which is believed to be built by a Pandyan King, King Arikeari Parakrama after Lord Viswanatha appeared in his dream and instructed him to do so.
<br/>
Tenkasi Town is a District Headquarter of Tenkasi District. It is located at 54 K.m North west of Tirunelveli Town, on the Quilon – Tirunelveli Highway. The town is also connected by Broad gage Railway line Viz Tirunelveli – Shengottai line and Virudunagar – Quilon line
</p>

  </Grid>
  <Grid item xs={6}>
  <img src={tenkasi} alt="latha" style={{width:'360px',height:'460px'}} />
  </Grid>
          </Grid>
          </Typography>
        </AccordionDetails>
      </Accordion>
      
    </div>
   
    </Box>
    
    
    
    
  );
}
