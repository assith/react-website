import React from 'react';
import '../App.css';
import { Button } from './Button';
import './Section.css';

function Section() {
  return (
    <div className='section-container'>
      <video src='/videos/video-2.mp4' autoPlay loop muted/>
      <h1>Välkommen till sidwall.se</h1>
      <p>Hade gött!</p>
      <div className="section-btns">
        <Button 
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          Klicka här vetja
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
        >
          En till knapp
        </Button>

      </div>
    </div>
  )
}

export default Section;
