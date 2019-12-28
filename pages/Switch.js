import React from 'react';

export default class Swii extends React.Component{
    state = {
        harchi: true
    };

    toggle = () => this.setState(prevState => ({harchi: !prevState.harchi}))

    render() {
        const {harchi} = this.state;
        return(
            <button onClick={this.toggle}>{harchi ? 'ON' : 'OFF'}</button>
        )
    }
}