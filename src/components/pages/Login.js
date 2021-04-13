import React from 'react'
import '../../App.css'
import Footer from '../Footer';
import Form from '../Form';

function Login() {
  return (
    <>
      <h1 className="login">Logga in</h1>
      <Form />
      <Footer />
    </>
  );
}

export default Login;