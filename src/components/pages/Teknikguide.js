import React from 'react'
import '../../App.css'
import Footer from '../Footer';
import TechCards from '../TechCards';

function Teknikguide() {
  return (
    <>
      <h1 className="teknikguide">Morsans teknikguide</h1>
      <TechCards />
      <Footer />
    </>
  );
}

export default Teknikguide;