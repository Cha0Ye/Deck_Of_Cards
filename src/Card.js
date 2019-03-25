import React, { Component } from 'react';

class Card extends Component {
    render() {
        return (
                <img src={this.props.image} alt="game_card"></img>
        );
    }
}

export default Card;