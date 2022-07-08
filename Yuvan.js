import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import {  CardActionArea, CardActions } from '@mui/material';
import yu2 from './Img/y3.jpg';
import yu3 from './Img/y1.jpg';

import Grid from '@mui/material/Grid';
//import AudiotrackIcon from '@mui/icons-material/Audiotrack';
import ReactPlayer from 'react-player'



export default function Yuvan() {
  return (
    <>    
    <Grid container spacing={2} style={{marginLeft:'80px'}}>
    
<Grid item xs={4}>
    <Card sx={{ maxWidth: 400 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="400"
          image={yu3}
          alt="green iguana"
        />
        <CardContent>
     <center>     <h3>Yuvan Shankar Raja</h3>
              <h4>Dhanush,Nayanthara</h4>
              <h5>Engaiyo Paartha Myakkam-yaaradi nee mohini</h5></center>
          
        </CardContent>
      </CardActionArea>
      <CardActions>
   


      <center><ReactPlayer
        url={require("./Img/music1.mp3")}
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
          image={yu2}
          alt="green iguana"
        />
        <CardContent>
     <center>     <h3>Yuvan Shankar Raja</h3>
            <h4>Simbu,Jothika</h4>
            <h5>Manmadhane-Manmadhan</h5></center>
          
        </CardContent>
      </CardActionArea>
      <CardActions>
   


      <center><ReactPlayer
        url={require("./Img/music3.mp3")}
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
          image={yu3}
          alt="green iguana"
        />
        <CardContent>
     <center>     <h3>Yuvan Shankar Raja</h3>
            <h4>Jay,Priya Anand</h4>
            <h5>Edho seigirai-Vaamanan</h5></center>
          
        </CardContent>
      </CardActionArea>
      <CardActions>
   


      <center><ReactPlayer
        url={require("./Img/music2.mp3")}
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
