import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import {  CardActionArea, CardActions } from '@mui/material';
import Grid from '@mui/material/Grid';
//import AudiotrackIcon from '@mui/icons-material/Audiotrack';
import ReactPlayer from 'react-player';
import sh1 from './Img/sherya1.jpg';
import sh2 from './Img/sherya2.jpg';


export default function Sherya() {
  return (
    <>    
    <Grid container spacing={2} style={{marginLeft:'80px'}}>
    
<Grid item xs={4}>
    <Card sx={{ maxWidth: 400 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="400"
          image={sh1}
          alt="green iguana"
        />
        <CardContent>
     <center>    <h3>Sherya Ghoshal</h3>
              <h4>Jayam ravi,Lakshmi menon</h4>
              <h5>Mirutha-Miruthan</h5></center>
          
        </CardContent>
      </CardActionArea>
      <CardActions>
   


      <center><ReactPlayer
        url={require("./Img/fe.mp3")}
        width="300px"
        height="50px"
        playing={false}
        controls={true}
        style={{marginLeft:'30px'}}
      /></center><br/>
       
      </CardActions>
    </Card>
    </Grid>
    <Grid item xs={4}>
    <Card sx={{ maxWidth: 400 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="400"
          image={sh2}
          alt="green iguana"
        />
        <CardContent>
     <center>    <h3>Sherya Ghoshal</h3>
            <h4>Vijay sethupathi</h4>
            <h5>Mazhaikulle-Puriyatha puthir</h5></center>
          
        </CardContent>
      </CardActionArea>
      <CardActions>
   


      <center><ReactPlayer
        url={require("./Img/fe1.mp3")}
        width="300px"
        height="50px"
        playing={false}
        controls={true}
        style={{marginLeft:'30px'}}
      /></center><br/>
       
      </CardActions>
    </Card>
    </Grid>
  
   
    
    </Grid>
    </>

  );
}
