import React from 'react';
import '../App.css';
import { Button } from './Button';
import './Section.css';

function Section() {
  return (
    <div className='section-container'>
      <video src='/videos/video-4.mp4' autoPlay loop muted/>
      <h1>Tjena</h1>
      <p>Lorem ipsum dolor sit amet</p>
      <div className="section-btns">
        <Button 
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          Logga in här om du är en Sidwall
        </Button>
        {/* <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
        >
          En till knapp
        </Button> */}

      </div>
    </div>
  )
}

export default Section;
