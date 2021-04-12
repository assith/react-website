import React, { Component } from 'react'
import { Button } from './Button'
import { Link } from 'react-router-dom';

export class QuizForm extends Component {
  render() {
    return (
      <div className="form-container">
        <h1>Quizformulär</h1>
        <p className="form-paragraph">Är du Quizmaster denna vecka kan du istället klicka </p><Link to="/">här</Link><p>.</p>
        <form >
          <label>
            Name:
            <input type="text" name="name" />
          </label>
          <Button
            className='btns'
            buttonStyle='btn--outline'
            buttonSize='btn--large'
          >
            Skicka
        </Button>
        </form>
      </div>
    )
  }
}

export default QuizForm
