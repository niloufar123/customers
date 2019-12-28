import React from 'react';

export default class News extends React.Component{

    componentDidMount() {
        document.title = 'NEWS - PAGE'
    }

    render() {
        return (
            <h1>News</h1>
        )
    }
}