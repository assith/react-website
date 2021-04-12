import React from 'react'
import CardItem from './CardItem'
import './Cards.css'

function Cards() {
  return (
    <div className='cards'>
      <h1>Kolla här: </h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem 
              src="images/teknik.jpg"
              text="Här kan du få hjälp med dina teknikfrågor morsan"
              label='Teknikguide'
              path='/teknikguide'
            />
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Cards
