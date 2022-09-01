import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='/videos/Autumn_leaves_15.mp4' autoPlay loop muted />
      <h1>WELCOME</h1>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          GET IN TOUCH
        </Button>
      </div>
    </div>
    
  );
}

export default HeroSection;
