import React from 'react';
import Carousel from 'better-react-carousel';
import Box from '@mui/material/Box';

export default function Personality() {
 return (
    <>  
<center><h2>Personel Assets</h2></center> 
  <div style={{marginLeft:'50px'}}><Box
  sx={{
    width: 1400,
    height: 150,
    backgroundColor:'hotpink',
  }}><br/><br/>
<Carousel cols={1} rows={1} gap={10} loop style={{ItemsAlign:'center'}} >
      
      <Carousel.Item>
      
<center>  <h3>Willingness to Learn</h3></center>
        
         </Carousel.Item>
      <Carousel.Item>
      
        <center> <h3>Hardworker</h3></center>
  
      </Carousel.Item>
      <Carousel.Item>
        <center><h3>Quick Learner</h3></center>
      </Carousel.Item>
      <Carousel.Item>
<center><h3>Team Worker</h3></center>
      </Carousel.Item>
       
      
    </Carousel>
    </Box>
    </div>
    </>

  );
 }