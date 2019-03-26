import React, { Component } from 'react';
import axios from 'axios';
import Card from './Card';
import Button from './Button';
import uuid from 'uuid/v4';

const DECK_OF_CARD_URL = `https://deckofcardsapi.com/api/deck`;

class Deck extends Component {
    constructor(props){
        super(props);
        this.state = { 
          deckID: null,
          card: [],
          // FixMe better nomenclature for this and what is being passed to button.
          button: "Draw a card!",
          cardsLeft: null
        };
        this.getCard = this.getCard.bind(this);
      }

    async componentDidMount(){
        let deckOfCards = await axios.get(`${DECK_OF_CARD_URL}/new/shuffle/?deck_count=1`);
        this.setState( {deckID: deckOfCards.data.deck_id} );
    }
    
    async getCard(){
        let newCard = await axios.get(`${DECK_OF_CARD_URL}/${this.state.deckID}/draw/?count=1`);
        const newState = newCard.data.cards[0].image;
        const remaining = newCard.data.remaining;
        this.setState ({ card: [...this.state.card, newState],
                        cardsLeft: remaining });
    }

    render() {
        let button;
        if (this.state.cardsLeft === 0) {
            this.setState({ button: "New Deck?" });
            return (
                <Button drawOrReset={this.state.button} />
            )
        }
        const cards = this.state.card.map(c => {
            // FixMe use deck code not uuid
            return <Card key={uuid()} image={c}/>
        })
        return (
            <div>
                <div>{cards}</div>
                <Button
                 handleCard={this.getCard}
                 drawOrReset={this.state.button}
                 cardsLeft={this.state.cardsLeft}/>
            </div>
        );
    }
}

export default Deck;



// I had some gooed ideas and the linting went crazy. Will implement later.

// if (this.state.cardsLeft === 0) {
//     this.setState({ button: "New Deck?" })
//     return (
//             <Button
//             reset={this.refreshDeck}
//             drawOrReset={this.state.buttonState}
//             cardsLeft={this.state.cardsLeft}/>
//         );
//     } else {
//         return (
//             <Button
//             handleCard={this.getCard}
//             drawOrReset={this.state.buttonState}
//             cardsLeft={this.state.cardsLeft}/>
//         );
//     }

// async refreshDeck() {
//     let deckOfCards = await axios.get(`${DECK_OF_CARD_URL}/new/shuffle/?deck_count=1`);
//     this.setState( {deckID: deckOfCards.data.deck_id} );
//     this.getCard();
// }