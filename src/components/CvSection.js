import React from 'react';
import '../App.css';
// import { Button } from './Button';
import './CvSection.css';

function CvSection() {
  return (
    <div className='section-container'>
      <video src='/videos/video-6.mp4' autoPlay loop muted />
      <div className="section-text">
        <h1>Astrid Sidwall Thygesen</h1>
        <div className="section-about">
          <p>
            Jag brinner för programmering och naturen, brädspel och öl. 
          </p>
          <p>Gillar stora bokstäver, kalhyggen och rågbröd.</p>
          <p>Nedan följer min meritlista för den som är intresserad. Väl bekomme!</p>
        </div>
        <br/><br/>
        <div className="section-merits">
          <h1>Meriter</h1>
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
