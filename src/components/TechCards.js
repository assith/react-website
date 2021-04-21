import React from 'react'
import CardItem from './CardItem'
import './Cards.css'

function TechCards() {
  return (
    <div className='cards'>
      <h1></h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/baking.jpg"
              title="Hur googlar jag på ett recept?"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu 
              fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in 
              culpa qui officia deserunt mollit anim id est laborum."
              label='Datorhjälp'
              path='/teknikguide'
            />
            <CardItem
              src="images/phone.jpg"
              title="Hur tar jag bort en app på mobiltelefonen?"
              text="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu 
              fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in 
              culpa qui officia deserunt mollit anim id est laborum."
              label='Mobilhjälp'
              path='/quiz'
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="images/teknik.jpg"
              title="Hur tar jag bort vänner på facebook?"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu 
              fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in 
              culpa qui officia deserunt mollit anim id est laborum."
              label='Datorhjälp'
              path='/teknikguide'
            />
            <CardItem
              src="images/quiz.jpg"
              title="Datortips"
              text="Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
              fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
              culpa qui officia deserunt mollit anim id est laborum."
              label='Mobilhjälp'
              path='/quiz'
            />
          </ul>
        </div>
      </div>
    </div>
  )
}

export default TechCards
