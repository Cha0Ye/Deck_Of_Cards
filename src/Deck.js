import React, { Component } from 'react';
import axios from 'axios';
import Card from './Card';
const DECK_OF_CARD_URL = `https://deckofcardsapi.com/api/deck`;

class Deck extends Component {
    constructor(props){
        super(props);
        this.state = { 
          deckID: null,
          card: []
        };
      }


    async componentDidMount(){
        let deckOfCards = await axios.get(`${DECK_OF_CARD_URL}/new/shuffle/?deck_count=1`);
        this.setState( {deckID: deckOfCards.deck_id} );
      
    }
      
    async getCard(){
        let newCard = await axios.get(`${DECK_OF_CARD_URL}/${this.state.deckID}/draw/?count=1`);
        const newState = newCard.cards[0].image;
        this.setState ({ card: [...this.state.card, newState] });
    }
    render() {
        return (
            <div>
                <Card/>
            </div>
        );
    }
}

export default Deck;