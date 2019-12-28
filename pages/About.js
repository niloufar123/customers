import React from 'react';

export default class About extends React.Component{
    componentDidMount() {
        document.title = 'ABOUT - PAGE'
    }

    render() {
        return (
            <h1>About</h1>
        )
    }
}