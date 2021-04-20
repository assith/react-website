import React from 'react'
// import { Button } from './Button'
import './SignupForm.css'
import useForm from './useForm'
import validate from './validateInfo'

function FormSignup(submitForm) {
  const { handleChange, values, handleSubmit, errors } = useForm(submitForm, validate);

  return (
    <div className="form-container">
      <div className="form-content-right">
        <form className="form" onSubmit={handleSubmit}>
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
              {errors.username && <p>{errors.username}</p>}
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
                onChange={handleChange}
              />
            {errors.email && <p>{errors.email}</p>}
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
              onChange={handleChange}
            />
            {errors.password && <p>{errors.password}</p>}
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
              onChange={handleChange}
            />
            {errors.password2 && <p>{errors.password2}</p>}
          </div>
          <button
            className='form-input-btn'
            type='submit'
          >
            Registrera
          </button>
          <span className="form-input-login">
            Har du redan ett konto? Logga in <a href="/">här</a><span>.</span>
          </span>
        </form>
      </div>
    </div>
  )
}

export default FormSignup

