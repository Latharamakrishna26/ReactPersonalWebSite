import * as React from 'react';
import Grid from '@mui/material/Grid';
import img3 from './Img/img23.jpg';
import './App.css';

export default function Vehicle() {
  return (
  
    <Grid container spacing={2}>
    <Grid item xs={2}>

    </Grid>
    <Grid item xs={8}>
    <h2>Jupiter ZX Disc with IntelliGo</h2>

<center> 
<img src={img3} alt="latha" style={{width:'460px',height:'460px'}} />
   <h3>I love this bike...My dream bike... Very comfortable to drive... Jupiter gives the best Mileage...
         Jupiter is the best scooter in India... Under budget...It feels so nice to sit on the scooter...
          It is very good looking so premium, beautiful and worth of money...</h3>

</center>

    </Grid>
    <Grid item xs={2}>

    </Grid>
    </Grid>

  );
}
