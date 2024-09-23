import React, { Component } from 'react';

class Greeting extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div>
                <h2>Привіт, {this.props.usName}</h2>
            </div>
        );
    }
}

export default Greeting;
