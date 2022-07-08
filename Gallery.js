import React from 'react';
import './App.css';
import AppBar  from '@mui/material/AppBar';
import Toolbar  from '@mui/material/Toolbar';
import Typography from '@mui/material/Button';
import {NavLink} from 'react-router-dom';
import Grid from '@mui/material/Grid';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import fam from './Img/f2.jpg';
import papu from './Img/papu.jpg';
import frnd from './Img/frnds11.jpg';
import f1 from './Img/f1.jpg';
import f2 from './Img/ishu.jpg';
import f3 from './Img/f3.jpg';
import papa from './Img/papu1.jpg';
import papa1 from './Img/papu4.jpg';
import papa2 from './Img/papu5.jpg';
import frnd1 from './Img/frnds7.jpg';
import frnd2 from './Img/frnds9.jpg';
import frnd3 from './Img/frnds10.jpg';



export default function Gallery(){
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
        <Grid item xs={4}>
        <Accordion>
        <AccordionSummary
        //   expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>      <img src={fam} alt="latha" style={{width:'300px',height:'200px'}} />
</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <Grid container spacing={20}>
        <Grid item xs={2}>
        <img src={f1} alt="latha" style={{width:'150px',height:'200px'}} />
            </Grid>
        <Grid item xs={2}>
        <img src={f2} alt="latha" style={{width:'150px',height:'230px'}} />
            </Grid>
            <Grid item xs={2}>
        <img src={f3} alt="latha" style={{width:'150px',height:'200px'}} />
            </Grid>
        

            </Grid>
          </Typography>
        </AccordionDetails>
      </Accordion>
        </Grid>
        <Grid item xs={4}>
        <Accordion>
        <AccordionSummary
        //   expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>      <img src={papu} alt="latha" style={{width:'300px',height:'200px'}} />
</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <Grid container spacing={20}>
        <Grid item xs={2}>
        <img src={papa} alt="latha" style={{width:'150px',height:'200px'}} />
            </Grid>
        <Grid item xs={2}>
        <img src={papa1} alt="latha" style={{width:'150px',height:'220px'}} />
            </Grid>
            <Grid item xs={2}>
        <img src={papa2} alt="latha" style={{width:'150px',height:'200px'}} />
            </Grid>
        

            </Grid>
          </Typography>
        </AccordionDetails>
      </Accordion>
        </Grid>
        <Grid item xs={4}>
        <Accordion>
        <AccordionSummary
        //   expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>      <img src={frnd} alt="latha" style={{width:'300px',height:'200px'}} />
</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <Grid container spacing={20}>
        <Grid item xs={2}>
        <img src={frnd1} alt="latha" style={{width:'150px',height:'200px'}} />
            </Grid>
        <Grid item xs={2}>
        <img src={frnd2} alt="latha" style={{width:'150px',height:'220px'}} />
            </Grid>
            <Grid item xs={2}>
        <img src={frnd3} alt="latha" style={{width:'150px',height:'200px'}} />
            </Grid>
        

            </Grid>
          </Typography>
        </AccordionDetails>
      </Accordion>
        </Grid>
        
      </Grid>
           </div>
            
            
    );
}


