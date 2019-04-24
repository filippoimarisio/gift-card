import React, { Component } from 'react';
import Checkbox from '../components/Checkbox';
import './GiftCard.css';

class GiftCard extends Component {
  state ={
    isGiftCard : false
  }

  handleCheckbox = () => {
    this.setState({isGiftCard: !this.state.isGiftCard})
    console.log(this.state)
  }

  render() {
    return (
      <div className="gift-card">
        <h1 className="gift-card__title">
          Gift cards
        </h1>
        <Checkbox 
          label="Do you have a gift card?"
          onCheckboxClick={this.handleCheckbox}
          checked={this.state.isGiftCard}
        />
      </div>
    );
  }
}

export default GiftCard;