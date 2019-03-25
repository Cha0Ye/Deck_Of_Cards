import React, { Component } from 'react';

class Button extends Component {
    render() {
        return (
            <div>
                <button onClick={this.props.handleCard}>{this.props.type}</button>
            </div>
        );
    }
}

export default Button;