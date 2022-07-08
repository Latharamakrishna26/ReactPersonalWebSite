import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import {  CardActionArea, CardActions } from '@mui/material';
import Grid from '@mui/material/Grid';
//import AudiotrackIcon from '@mui/icons-material/Audiotrack';
import ReactPlayer from 'react-player';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ly1 from './Img/n.m1.jpg';
import ly2 from './Img/n.m2.jpg';
import vdo from './Img/vdo.mp4';
import vdo1 from './Img/vdo1.mp4';



export default function Muthu() {
  return (
    <>    
    <Grid container spacing={2} style={{marginLeft:'200px'}}>
    

    <Grid item xs={6}>
    <Card sx={{ maxWidth: 400 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="300"
          image={ly2}
          alt="green iguana"
        />
        <CardContent>
     <center> <h3>N.Muthukumar</h3>
              <h4>Jayam ravi,Geniliya</h4>
              <h5>Adada-Santhosh subramaniyam</h5></center>
          
        </CardContent>
      </CardActionArea>
      <CardActions>
   


      <center><ReactPlayer
        url={require("./Img/ly.mp3")}
        width="300px"
        height="50px"
        playing={false}
        controls={true}
        style={{marginLeft:'30px'}}
      /></center><br/>
       
      </CardActions>
    </Card>
    </Grid>
    <Grid item xs={6}>
    <Card sx={{ maxWidth: 400 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="435"
          image={ly1}
          alt="green iguana"
        />
        <CardContent>
     <center>     <h3>Lyrics</h3>
            </center>
          
        </CardContent>
      </CardActionArea>
      
    </Card>
    </Grid>
    
    </Grid>

    <center><h2>Video</h2></center>
    <Accordion>
        <AccordionSummary
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <h5>Favourites</h5>
        </AccordionSummary>
        <AccordionDetails>
        <Grid container spacing={2} style={{marginLeft:'200px'}}>
    

    <Grid item xs={6}>
    <video width="400" height="200" controls>
        <source src={vdo} type="video/mp4" />
      </video>
        </Grid>
        <Grid item xs={6}>
        <video width="400" height="200" controls>
        <source src={vdo1} type="video/mp4" />
      </video>
        </Grid>
        </Grid>
        </AccordionDetails>
      </Accordion>
    </>

  );
}
