import React from 'react'
import '../../App.css'
import Footer from '../Footer';
import QuizForm from '../QuizForm';

function Quiz() {
  return (
    <>
      <h1 className="quiz">Quiz</h1>
      <QuizForm />
      <Footer />
    </>
  );
}

export default Quiz;