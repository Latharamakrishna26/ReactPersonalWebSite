import * as React from 'react';
import Grid from '@mui/material/Grid';
import img from './Img/img21.jpg';
import img1 from './Img/img22.jpg';

export default function Sports() {
    return (
        <>        <center><h2>Sports</h2></center>
        <Grid container spacing={2}>
    <Grid item xs={4}></Grid>
        <Grid item xs={4}>
        <div class="flip-box">
  <div class="flip-box-inner">
    <div class="flip-box-front">
    <img src={img} alt="latha" style={{width:'500px',height:'300px'}} />
    </div>
    <div class="flip-box-back">
      <h3>Shuttlecock</h3>
      <h5>I love shuttlecock...Badminton is a racquet sport played using racquets to hit a shuttlecock across a net. Although it may be played with larger teams, the most common forms of the game are "singles" (with one player per side) and "doubles" (with two players per side).<br/>
        <b>world Games:</b> 1981<br/>
        
        <b>First played:</b> 19th century<br/>
        <b>Team members:</b> Singles or doubles</h5>
       <h5> In Germany shuttlecock was discovered by Peter von Rüden, a German engineer while he was travelling in China. He saw some people play it in a park. Some of them were 60 or 70 years old. He was fascinated by this sport.</h5>
    </div>
      </div>
  </div>
            </Grid>
            <Grid item xs={4}></Grid>
            </Grid>
            <br/>
            <Grid container spacing={2}>
           
    <Grid item xs={8}>
    <h2>Sanya Mirza</h2>
    <p>Sania Mirza is an Indian professional tennis player.
     A former doubles world No. 1, she has won six Grand Slam titles in her career.
      From 2003 until her retirement from singles in 2013, she was ranked by the Women's Tennis Association as India's No. 1 player. <br/>
     <b> Born:</b> 15 November 1986 (age 35 years), Mumbai<br/>
      <b>Spouse:</b> Shoaib Malik (m. 2010)<br/>
      <b>Awards:</b> Padma Bhushan, Padma Shri, MORE<br/>
      <b>Children:</b> Izhaan Mirza Malik<br/>
      <b> Books:</b> Ace against Odds<br/>
      <b>Parents:</b> Imran Mirza, Nasima Mirza<br/>
      <b>Siblings:</b> Anam Mirza</p>
    </Grid>
    <Grid item xs={4}>
    <img src={img1} alt="latha" style={{width:'360px',height:'360px',marginLeft:'53px',marginTop:'4em'}} />
    </Grid>
    
    </Grid>

            </>

    );
}  