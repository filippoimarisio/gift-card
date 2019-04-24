import React from 'react';
import './ValidCard.css';

  const ValidCard = props => {
  
  const numberLength = props.card.number.length
    console.log('numberLength', numberLength)
    console.log('props', props.card)
    console.log('props', props.card.number[numberLength - 1])


  const cardNumber = `xxxx xxxx xxxx xxxx ${props.card.number[numberLength - 1]}${props.card.number[numberLength - 2]}${props.card.number[numberLength - 3]}`
  const discount = props.card.discount

  return (
    <div>
      <li key={props.card.number} className="valid-card">
        <span className="valid-card__label">Gift Card</span>
        <div className="valid-card__details">
          <span className="valid-card__number">{cardNumber}</span>
          <span className="valid-card__discount">{discount}</span>
        </div>
      </li>
    </div>
  );
};

export default ValidCard;