import React, { Component } from 'react';

class Card extends Component {
    render() {
        return (
            <div>
                <img src={this.props.image} alt="game_card"></img>
            </div>
        );
    }
}

export default Card;