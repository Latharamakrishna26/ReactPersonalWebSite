import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Button, CardActionArea, CardActions } from '@mui/material';
import yu from './Img/y1.jpg';
import sh from './Img/sherya.jpg';
import nm from './Img/n.m.jpg';
import Grid from '@mui/material/Grid';
import { NavLink } from 'react-router-dom';

export default function Music() {
  return (
    
    <>    
    <h1 style={{marginLeft:'100px'}}>Music Composer</h1>
    <Grid container spacing={2} style={{marginLeft:'80px'}}>
    
<Grid item xs={4}>
    <Card sx={{ maxWidth: 400 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="400"
          image={yu}
          alt="green iguana"
        />
        <CardContent>
     <center>     <h3 gutterBottom variant="h5" >
            Yuvan Shankar Raja
          </h3></center>
          
        </CardContent>
      </CardActionArea>
      <CardActions>
      <NavLink to ="/Yuvan" exact > <Button variant='contained' color="primary" style={{width:'100px',marginLeft:'143px'}}> Playlist
        </Button>
        
        </NavLink>
      </CardActions>
    </Card>
    </Grid>
    <br/><br/><br/><Grid item xs={4}>
    <h1 style={{marginLeft:'80px'}}>Female Playback Singer</h1>

    <Card sx={{ maxWidth: 420 }}>
    <CardContent>
     <center>     <h3 gutterBottom variant="h5" component="div">
            Sherya Ghoshal
          </h3></center>
          </CardContent>
    <CardActions>
    <NavLink to ="/Sherya" exact > <Button variant='contained' color="primary" style={{width:'100px',marginLeft:'147px'}}>
          Playlist
        </Button></NavLink>
      </CardActions>
    
      <CardActionArea>
        <CardMedia
          component="img"
          height="400"
          image={sh}
          alt="green iguana"
        />
        
          
        
      </CardActionArea>
      
    </Card>
    </Grid>
    <Grid item xs={4}>
     
    <Card sx={{ maxWidth: 400 ,marginTop:'210px'}}>
    <h1 >Lyricist</h1>
      <CardActionArea>
        <CardMedia
          component="img"
          height="400"
          image={nm}
          alt="green iguana"
        />
        <CardContent>
     <center>     <h3 gutterBottom variant="h5" component="div">
            N.Muthukumar
          </h3></center>
          
        </CardContent>
      </CardActionArea>
      <CardActions>
      <NavLink to ="/Muthu" exact > <Button variant='contained' color="primary" style={{width:'100px',marginLeft:'153px'}}>
          Playlist
        </Button></NavLink>
      </CardActions>
    </Card>
    </Grid>
    </Grid>
    </>

  );
}
