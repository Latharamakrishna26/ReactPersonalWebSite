import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './Home';
import Calender from './calender';
import Map from './Map';
import Gallery from './Gallery';
import Feedback from './Feedback';
import Contact from './Contact';
import Family from './Family';
//import Personality from './Personality';
import Education from './education';
import Music from './Music';
import Yuvan from './Yuvan';
import Sherya from './Sherya';
import Muthu from './Muthu';
import Sports from './Sports';
import Vehicle from './Vehicle';
import Food from './Food';
import Personality from './Personality';
import About from './About';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/calender" element={<Calender />} />
      <Route path="/map" element={<Map />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/feedback" element={<Feedback />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/family" element={<Family />} />
      <Route path ="/education" element={< Education/>} />
      <Route path="/music" element={<Music/>}/>
      <Route path="/Yuvan" element={<Yuvan />} />
      <Route path="/Sherya" element={<Sherya />} />
      <Route path="/Muthu" element={<Muthu />} />
      <Route path="/Sports" element={<Sports />} />
      <Route path="/Vehicle" element={<Vehicle/>} />
      <Route path="/Food" element={<Food />} />
      <Route path="/Personality" element={<Personality />} />
      <Route path="/About" element={<About />} />



      </Routes>
</BrowserRouter>
  </React.StrictMode>
);

