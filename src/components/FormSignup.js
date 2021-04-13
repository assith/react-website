import React from 'react'
import { Button } from './Button'

function FormSignup() {
  return (
    <div className="form-content-right">
      <form className="form">
        <h1>
          Har du ingen inloggning kan du ansöka om det i formuläret nedan.
        </h1>
        <div className="form-inputs">
          <label htmlFor="username" className="form-label">
            Användarnamn
          </label>
            <input 
              id="username"
              type="text" 
              name="username" 
              className="form-input"
              placeholder="Användarnamn"/>
        </div>
        <div className="form-inputs">
          <label htmlFor="email" className="form-label">
            Email
          </label>
            <input
              id="email"
              type="text"
              name="email"
              className="form-input"
              placeholder="Email" />
        </div>
         <div className="form-inputs">
          <label htmlFor="password" className="form-label">
            Lösenord
          </label>
          <input
            id="password"
            type="text"
            name="password"
            className="form-input"
            placeholder="Lösenord" />
        </div>
        <div className="form-inputs">
          <label htmlFor="password2" className="form-label">
            Lösenord igen
          </label>
          <input
            id="password2"
            type="text"
            name="password2"
            className="form-input"
            placeholder="Lösenord 2" />
        </div>
        <Button
          className='form-input-btn'
          type='submit'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
        >
          Registrera
        </Button>
        <span className="form-input-login">
          Har du redan ett konto? Logga in <a href="#">här</a><span>.</span>
        </span>
      </form>
    </div>
  )
}

export default FormSignup

