import React from 'react';
import ValidCard from './ValidCard/ValidCard';
import './ValidCards.css';

const ValidCards = props => {
  return (
    <div className="valid-cards">
      <ul className="valid-cards__list">
        {props.giftCards.map(c => {
          return (
            <ValidCard 
              card={c[0]}
            />
          )}
        )}
      </ul>
    </div>
  );
};

export default ValidCards;