import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Button.js';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true)

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if(window.innerWidth <= 960) {
      setButton(false)
    } else {
      setButton(true)
    }
  };

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo">
            TJENA <i className="fas fa-bolt"/>
          </Link>
          <div className="menu-icon" onClick={handleClick}>
              <i className={click ? 'fas fa-times' : 'fas fa-bars'}/>
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
                <Link 
                  to='/' 
                  className='nav-links' 
                  onClick={closeMobileMenu}
                >
                    Home
                </Link>
            </li>
            <li className='nav-item'>
                <Link 
                  to='/menu-title-1' 
                  className='nav-links' 
                  onClick={closeMobileMenu}
                >
                    Menu title 1
                </Link>
            </li>
            <li className='nav-item'>
                <Link 
                  to='/menu-title-2' 
                  className='nav-links' 
                  onClick={closeMobileMenu}
                >
                    Menu title 2
                </Link>
            </li>
            <li className=''>
                <Link 
                  to='/button'
                  className='nav-links-mobile' 
                  onClick={closeMobileMenu}
                >
                    Button
                </Link>
            </li>
          </ul>
          {button && <Button buttonStyle='btn--outline'>Button</Button>}
        </div>
      </nav>
    </>
  )
}

export default Navbar;
