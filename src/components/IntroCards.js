import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <div className='cards__container'>
        <div className='cards__wrapper'>
        <ul className='cards__items'>
            <CardItem
              src='images/CK_heart_wall.jpg'
              text="Co-founders Christina and Keleigh"
              path='/introduction'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;