import React, { Component } from 'react';
import Checkbox from '../components/Checkbox/Checkbox';
import './GiftCard.css';

class GiftCard extends Component {
  state ={
    isGiftCard : false,
    cardNumber: "",
    securityCode: ""
  }

  handleCheckbox = event => {
    const value = event.target.checked
    const name = event.target.name
    this.setState({[name]: value})
  }

  handleCardInput = event => {
    const name = event.target.name
    const value = event.target.value
    this.setState({[name]: value})
  }

  handleSubmit = event => {
    event.preventDefault();
    console.log(this.state.cardNumber)
    console.log(this.state.securityCode)

    this.setState({
      cardNumber: "",
      securityCode: ""
    })
  }

  render() {
    return (
      <div className="gift-card">
        <h1 className="gift-card__title">
          Gift cards
        </h1>
        <Checkbox 
          label="Do you have a gift card?"
          name="isGiftCard"
          onCheckboxClick={this.handleCheckbox}
          checked={this.state.isGiftCard}
        />
        { this.state.isGiftCard && (
          <div className="card">
            <p className="card__label">Please enter the 19-digit number and code from your gift card below</p>
            <form className="card__form">
              <input
                type="text"
                name="cardNumber"
                className="card__number"
                value={this.state.cardNumber}
                onChange={this.handleCardInput}
              />
              <input
                type="text"
                name="securityCode"
                className="card__security"
                value={this.state.securityCode}
                onChange={this.handleCardInput}
              />
              <button className="card__submit" onClick={this.handleSubmit}>Apply</button>
            </form>
          </ div>
        )}
      </div>
    );
  }
}

export default GiftCard;