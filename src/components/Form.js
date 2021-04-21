import React, { useState } from 'react'
import FormSignup from './FormSignup';
import FormSuccess from './FormSuccess';
import './Form.css'

function Form() {
  const [isSubmitted, setIsSubmitted] = useState(false)

  function submitForm() {
    setIsSubmitted(true)
  }
  return (
    <>
      <div className="form-container">
        <div className="form-content-left">
          <img src="./image/img-3.jpg" alt="" className="form-img"></img>
        </div>
        {!isSubmitted ? (<FormSignup submitForm={submitForm} />) : (<FormSuccess />) }
      </div>
    </>
  )
}

export default Form
