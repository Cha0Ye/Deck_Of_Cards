import React, { Component } from 'react';
import axios from 'axios';
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
      
      }
    render() {
        return (
            <div>
                
            </div>
        );
    }
}

export default Deck;