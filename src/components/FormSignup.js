import React from 'react'
import { Button } from './Button'
// import './Form.css'
import useForm from './useForm'

function FormSignup() {
  const { handleChange, values } = useForm();

  return (
    <div className="form-container">
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
                placeholder="Användarnamn"
                value={values.username}
                onChange={handleChange}
              />
          </div>
          <div className="form-inputs">
            <label htmlFor="email" className="form-label">
              Email
            </label>
              <input
                id="email"
                type="email"
                name="email"
                className="form-input"
                placeholder="Email"
                value={values.email}
                onChange="{handleChange}"
              />
          </div>
          <div className="form-inputs">
            <label htmlFor="password" className="form-label">
              Lösenord
            </label>
            <input
              id="password"
              type="password"
              name="password"
              className="form-input"
              placeholder="Lösenord"
              value={values.password}
              onChange="{handleChange}"
            />
          </div>
          <div className="form-inputs">
            <label htmlFor="password2" className="form-label">
              Lösenord igen
            </label>
            <input
              id="password2"
              type="password"
              name="password2"
              className="form-input"
              placeholder="Lösenord igen"
              value={values.password2}
              onChange="{handleChange}"
            />
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
            Har du redan ett konto? Logga in <a href="/">här</a><span>.</span>
          </span>
        </form>
      </div>
    </div>
  )
}

export default FormSignup

