import React, { Component } from 'react';
import Checkbox from '../components/Checkbox/Checkbox';
import ValidCards from '../components/ValidCards/ValidCards';
import './GiftCard.css';

class GiftCard extends Component {
  state ={
    isGiftCard : false,
    cardNumber: "",
    securityCode: "",
    giftCards: [],
    error: ""
  }

  handleCheckbox = event => {
    const value = event.target.checked
    const name = event.target.name
    this.setState({[name]: value})
  }

  handleCardInput = event => {
    const name = event.target.name
    const value = event.target.value
    if(isNaN(value)) {
      this.setState({ [name]: value, error: "The input should be a number"})
    } else {
      this.setState({[name]: value, error: ""})
    }
  }

  handleSubmit = event => {
    event.preventDefault();
    
    const securityCode = this.state.securityCode
    const cardNumber = this.state.cardNumber

    const requestUrl = `http://localhost:3000/cards?securityCode=${securityCode}`

    fetch(requestUrl)
    .then(resData => resData.json())
    .then(resData => {
      const card = resData.filter(card => {
        return card.number === cardNumber
      })
      if(card.length !== 0) {
        this.setState({
          ...this.state.giftCards.push(card)
        })
      } else {
        this.setState({error: "The card number is invalid"})
      }
    })
    .catch(() => {
      throw new Error("Failed")
    });

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
            <ValidCards 
              giftCards={this.state.giftCards}
            />
            <p className="card__error">{this.state.error}</p>
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