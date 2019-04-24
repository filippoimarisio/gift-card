import React from 'react';
import './ValidCard.css';

const ValidCard = props => {
  
  const numberLength = props.card.number.length
  const cardNumber = `**** **** **** **** ${props.card.number[numberLength - 1]}${props.card.number[numberLength - 2]}${props.card.number[numberLength - 3]}`
  const discount = props.card.discount

  return (
    <li className="valid-card">
      <div className="valid-card__left-column">
        <div className="valid-card__label">Gift Card</div>
        <div className="valid-card__number">{cardNumber}</div>
      </div>
      <div className="valid-card__right-column">
        <div className="valid-card__discount">{discount}</div>
      </div>
    </li>
  );
};

export default ValidCard;