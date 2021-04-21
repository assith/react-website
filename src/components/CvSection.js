import React from 'react';
import '../App.css';
// import { Button } from './Button';
import './CvSection.css';

function CvSection() {
  return (
    <div className='section-container'>
      <video src='/videos/video-6.mp4' autoPlay loop muted />
      <div className="section-text">
        <h1>Astrid</h1>
        <div className="section-about">
          <p>
            
          </p>
          <p></p>
          <p></p>
        </div>
        <br/><br/>
        <div className="section-merits">
          <h1></h1>
        </div>
        {/* <div className="section-btns">
          <Button
            className='btns'
            buttonStyle='btn--outline'
            buttonSize='btn--large'
          >
            Logga in här om du är en Sidwall
          </Button>
          <Button
            className='btns'
            buttonStyle='btn--primary'
            buttonSize='btn--large'
          >
            En till knapp
          </Button>

        </div> */}
      </div>
    </div>
  )
}

export default CvSection;
