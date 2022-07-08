import React from 'react';
import Carousel from 'better-react-carousel';
import { Button } from '@mui/material';
import Grid from '@mui/material/Grid';
import img4 from './Img/img13.jpg';
import img5 from './Img/img14.jpg';
import img6 from './Img/sweet.jpg';
export default function Food(){
 return (
    <>   <Carousel cols={1} rows={1} gap={10} loop style={{ItemsAlign:'center'}}>
      
      <Carousel.Item>
      
      <img src={img4} alt="latha" style={{width:'1500px',height:'400px'}} />
        
         </Carousel.Item>
      <Carousel.Item>
      
      <img src={img5} alt="latha" style={{width:'1500px',height:'400px'}} />
  
      </Carousel.Item>
      <Carousel.Item>
      <img src={img6} alt="latha" style={{width:'1500px',height:'400px'}} />
      </Carousel.Item>
      
      
      
    </Carousel>
    <br/><br/><br/>
    <Grid container spacing={2} style={{marginLeft:'80px'}}>
    
<Grid item xs={3}>
<Button variant="outlined" color="secondary" id="brk">Breakfast</Button>
<div id="brk" >
  
  <ul>
    <li>Poori</li><br/>
    <li>Dosa</li><br/>
    <li>Bread Omlete</li><br/>
    <li>Parotta</li>
    </ul>
    

</div>

</Grid>
<Grid item xs={3}>
<Button variant="outlined" id="Lun" color="secondary">Lunch</Button>
<div id="Lun" >
  <ul >
    <li>Chicken Biryani</li><br/>
    <li>Curd Rice</li><br/>
    <li>Fried rice</li><br/>
    <li>Fish fry</li>
  </ul>
 </div>
</Grid>
<Grid item xs={3}>
<Button variant="outlined" color="secondary">Sweets</Button>
<div id="Sweets" >
  <ul >
    <li>Laddu</li><br/>
    <li>Rasagulla</li><br/>
    <li>Ghee Sweets</li>
  </ul>
  </div>
</Grid>
<Grid item xs={3}>
<Button variant="outlined" color="secondary">Deserts</Button>
<div id="Desert">
  <ul>
    <li>Carrot Halwa</li><br/>
    <li>Cakes</li><br/>
    <li>Chocolate shake</li>
  </ul>
  </div>
</Grid>

</Grid>
    </>



  );
}