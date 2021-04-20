import React from 'react'
import './Footer.css'
// import { Button } from './Button'
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      {/* <section className="footer-subscription">
        <p className="footer-subscription-heading">
          Text vare här
        </p>
        <p className="footer-subscription-text">
          Mera text
        </p>
        <div className="input-areas">
          <form>
            <input type="email" name="email" placeholder="Your email" className="footer-input"/>
            <Button buttonStyle='btn--outline'>Subscribe</Button>
          </form>
        </div>
      </section> */}
      <div className="footer-links">
        <div className="footer-link-wrapper">
          {/* <div className="footer-link-items">
            <h2>About us</h2>
            <Link to='/login'>How it works</Link>
            <Link to='/teknikguide'>Our tech guide</Link>
          </div> */}
          <div className="footer-link-items">
            {/* <h2>Kontakt</h2> */}
            {/* <Link to='/login'>How it works</Link>
            <Link to='/teknikguide'>Our tech guide</Link> */}
            {/* <p>astrid@sidwall.se</p> */}

          </div>
        </div>
      </div>
      <small className="website-rights"></small>
    </div>
  )
}

export default Footer
