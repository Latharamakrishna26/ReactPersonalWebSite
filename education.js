import * as React from 'react';
import './education.css';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { NavLink } from 'react-router-dom';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import img7 from './Img/img4.jpg';
import img8 from './Img/img5.jpg';
import html from './Img/html.jpg';
import css from './Img/css.jpg';
import boot from './Img/bootstrap.jpg';
import py from './Img/python.jpg';
import jq from './Img/jq.jpg';
import js from './Img/js.jpg';
import bit from './Img/bitcoin.jpg';
import mat from './Img/graphical.jpg';
import t2s from './Img/t2s.jpg';
import cer from './Img/cert.JPG';
import cer1 from './Img/cert1.JPG';
import cer2 from './Img/certificate1.jpg';
export default function Education() {
  return (
    <div id="mySidenav" class="sidenav">
      <NavLink to="/" id="about" >Home</NavLink>
      <a href="#edu" id="skill">Skills</a>
     
      <a href="#certificate" id="memory">Certification</a>
      <a href="#pros" id="pro">Projects</a>
     
      <a href="#achieve" id="home">Achieve</a>
    
      <center>  <h2>Education</h2></center>
      <Box
      sx={{
        width: 1350,
        height: 300,
        border:'1px solid grey',
        marginLeft:'120px',
        backgroundColor: 'darkseagreen',
      }}
        >
    <Grid container spacing={2} style={{marginLeft:'70px'}}>
        <Grid item xs={7}>
        <h3>G.N.Govt Higher secondary school</h3>
        <p >This school is located in Tenkasi...I studied in 9th standard to 12 standard in this school...</p>
<p >School time is the only time which we enjoy most, and when we enter college, we always miss our school life...
   School life teaches us lots of new things and prepares us to face all the challenges of life...
    I love my school life and really enjoy it... I have lots of friends, and all my teachers love me...</p>

        </Grid>
        <Grid item xs={5}> 
        <img src={img7} alt="latha" style={{width:'360px',height:'280px',paddingLeft:'30px',paddingTop:'8px'}} />

           
            
        </Grid>
       
        </Grid>
        </Box><br/><br/>
        <Box
      sx={{
        width: 1350,
        height: 300,
        border:'1px solid grey',
        marginLeft:'120px',
        backgroundColor: 'mediumpurple',
      }}
        >
    <Grid container spacing={-12} style={{marginLeft:'1px'}}>
        <Grid item xs={4}>
        <img src={img8} alt="latha" style={{width:'360px',height:'280px',paddingLeft:'15px',paddingTop:'8px'}} />

               </Grid>
        <Grid item xs={8} > 
        <h3>Arjun College of Technology</h3>
        <p >This college is located in Thamaraikulam Coimbatore...I am pursuing in B.E computer science and Engineering...</p>
<p >Students bounce back and forth to class, dining hall, dorm, meetings, library, sports, etc. all day long... 
  They may get up early and stay up late to get it all done...
  It takes some getting used to, but busy as they are, most college students come to appreciate the freedom they have to manage their own time...</p>

 
           
            
        </Grid>
       
        </Grid>
        </Box><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
        <center>  <h2 id="edu">My Skills</h2></center>

        <Grid container spacing={2} style={{marginLeft:'325px'}}>
        <Grid item xs={4}>
        <img src={html} alt="latha" style={{width:'200px',height:'200px'}} />

        </Grid>
        <Grid item xs={4}> 
        <img src={css} alt="latha" style={{width:'200px',height:'200px',marginLeft:'-180px'}} />

           
            
        </Grid>

       <Grid item xs={4}> 
       <img src={boot} alt="latha" style={{width:'200px',height:'200px',marginLeft:'-380px'}} />

           
            
        </Grid>
        
       
        </Grid><br/><br/>
        <Grid container spacing={2} style={{marginLeft:'325px'}}>
        <Grid item xs={4}>
        <img src={js} alt="latha" style={{width:'200px',height:'200px'}} />

        </Grid>
        <Grid item xs={4}> 
        <img src={jq} alt="latha" style={{width:'200px',height:'200px',marginLeft:'-180px'}} />

           
            
        </Grid>

       <Grid item xs={4}> 
       <img src={py} alt="latha" style={{width:'200px',height:'200px',marginLeft:'-380px'}} />

           
            
        </Grid>
        
       
        </Grid>
        <br/><br/><br/><br/><br/><br/><br/> <br/><br/><br/><br/><br/><br/><br/> <br/><br/><br/><br/><br/><br/><br/>

        <center>  <h2 id="pros">Projects</h2></center>

<Grid container spacing={2} style={{marginLeft:'70px'}}>
<Grid item xs={4}>
<h1>Bitcoin price prediction in <br/>
        machine learning</h1>
<div class="flip-box">
  <div class="flip-box-inner">
    <div class="flip-box-front">
    <img src={bit} alt="latha" style={{width:'500px',height:'300px'}} />
    
      </div>
      <div class="flip-box-back">
      <h3>Bitcoin</h3>
      <h5>The aim of this work is to ascertain with what accuracy can the price of Bitcoin be predicted using different machine learning algorithm and compare their accuracy.
        <br/>Acquire time-series data recorded daily for five certain time period at different time instances, it must be normalized and smoothened. <br/>
        The next step is to select parameters that will be fed to the predictive network. From an array of available features, some are mentioned below:<br/>
        After feature selection, the sample inputs will be fed to the model. <br/>
        The accuracy can be compared with different models after the final prediction.<br/> </h5>
     
      </div>
      </div>
      </div>

</Grid>
<Grid item xs={4}> 
<br/><br/><br/><h1>Graphical Password Authentication<br/>
   using PassPoint Scheme</h1>
  <div class="flip-box">
    <div class="flip-box-inner">
      <div class="flip-box-front">
      <img src={mat} alt="latha" style={{width:'500px',height:'300px'}} />
        </div>
      <div class="flip-box-back">
        <h3>Three level password authentication</h3>
        <h5><b>Token-based authentication</b> includes key cards, bank cards, smart cards, etc.<br/>
          <b>Knowledge-based authentication</b> includes text-based authentication and picture-based authentication.<br/>
        <b>Biometric authentication</b> include fingerprints authentication, iris scan and facial recognition.<br/>
        Passfaces is a graphical password scheme based on recognizing human faces. During password creation, users are given a large set of images to select from. 
        To log in, users have to identify the pre-selected image from the several images presented to him.
        </h5>
      </div>
    </div>
  </div>
   
    
</Grid>

<Grid item xs={4}> 
<br/><br/><br/><br/><br/><br/><br/><br/><br/><h1>Text to speech & Speech to Text converter</h1>
  <div class="flip-box">
    <div class="flip-box-inner">
      <div class="flip-box-front">
      <img src={t2s} alt="latha" style={{width:'500px',height:'300px'}} />
      </div>
      <div class="flip-box-back">
        <h5>These are the android applications which translates the input commands to voice commands and versa.<br/>
          A speech to text converter is a software program that can detect and convert speech to text.<br/>
           The program takes an audio or video file, analyzes it, and returns a transcript.<br/>
           It is also referred to as speech to text translator, voice to text converter, or voice to text translator.<br/>
           Text-to- speech synthesizer (TTS) is the technology which lets computer speak to you.<br/>
            The TTS system gets the text as the input and then a computer algorithm which called TTS engine analyses the text, pre-processes the text and synthesizes the speech with some mathematical models.
        
         
        </h5>
      </div>
    </div>
  </div>
   
    
</Grid>


</Grid><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
<center><h2 id="certificate">Certificates</h2></center>
<Grid container spacing={2} style={{marginLeft:'70px'}}>
<Grid item xs={4}>
<img src={cer} alt="latha" style={{width:'430px',height:'600px'}} />

  </Grid>
  <Grid item xs={4}>
  <img src={cer1} alt="latha" style={{width:'430px',height:'600px'}} />

  </Grid>
  <Grid item xs={4}>
  <img src={cer2} alt="latha" style={{width:'430px',height:'600px'}} />

  </Grid>
</Grid><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
<center><h2 id="achieve">Achievements</h2></center>
<div style={{marginLeft:'100px',width:'83em'}}>
<Accordion >
        <AccordionSummary
          aria-controls="panel1a-content"
          id="panel1a-header" 
        >
          <h3>Internship</h3>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Completed Internship training for 'Python with Data Science' in company Accent Techno Soft.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <h3>Exhibition</h3>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Actively participated in CODDISSIA exhibition in the event.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <h3>Online webinar</h3>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Participated in Online python course in RN Reddy IT School.
          </Typography>
        </AccordionDetails>
      </Accordion>
      </div>
      <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
  

        </div>
  );
}