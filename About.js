import React from 'react';
import Grid from '@mui/material/Grid';

export default function About() {
    return (
      <>    
  <center>   <h3> Latha.R<br/>
6/34,East Car street, Kuruvikulam, Sankarankoil(TK), Tenkasi-627754<br/>
8056706601 | latha262001@gmail.com</h3></center>
      <Grid container spacing={2} style={{marginLeft:'30px'}}>
      
  <Grid item xs={6}>

<h3>Objective</h3>
<h4>To enhance my professional skills, capabilities and knowledge in an organization which recognizes the
value of hard work and trusts me with responsibilities and challenges.</h4>

<h3>Education</h3>
<ul>
<li><h4>Gopal Naicker Government Higher Secondary School</h4></li>
<h5>SSLC</h5>
<h5>95.49</h5>
<li><h4>Gopal Naicker Government Higher Secondary School</h4></li>
<h5>HSC</h5>
<h5>84.53</h5>
<li><h3>Arjun College of Technology</h3></li>
<h4>B.E -Computer science and engineerin</h4>
<h4>upto 8.6 (6 sem)</h4>
    </ul>
    </Grid>
    <Grid item xs={6}>
<h3>Skills</h3>
<h4>Technical skills :Basic knowledge in python, Html,css,Javascript,Bootstrap,React,Semantic UI,Material UI</h4>

<h3>Projects</h3>
<li>Graphical password authentication using pass point scheme</li>
<li>Text to Speech Converter and Speech to Text Converter.</li>
<li>Bitcoin Price prediction in machine learning</li>

<h3>Achievements</h3>
<li>Actively participated in Coimbatore District Small Industries Association exhibition in the event</li>
<li>Participated Accent Techno Soft company for Internship training in "Python with data science "</li>
<li>Participated in online python course in RN Reddy IT School</li>
<h3>Personal Asset</h3>
<li>Willingness to learn</li>
<li>Easily adaptable of any kind of environment</li>
<li>Hardworking towards achieving the goal</li>
<li>Ability to work individual as well as in team</li>
    </Grid>

    </Grid>
    </>
    );
}