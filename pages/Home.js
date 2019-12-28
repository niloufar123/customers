import React from 'react';
// import Axios from "axios";
import {HandleChange} from "../utility";

export default class Home extends React.Component{

    state = {
        data: [],
        item: {},
        harchi: ''
    };

    componentDidMount() {
        document.title = 'HOME - PAGE';
        // Axios({
        //     url: 'http://localhost:1500/posts'
        // }).then(response => {
        //     console.log(response.data);
        //     if(this.Ali) return;
        //     this.setState({data: response.data})
        // }).catch(error => {
        //     console.log(error);
        // })
    }

    componentWillUnmount() {
        this.Ali = true;
    }

    componentDidUpdate(prevProps, prevState) {
        // console.log(prevState, prevProps, this.state, this.props);
    }

    shouldComponentUpdate(nextProps, nextState) {
        return true
    }

    componentWillMount() {
    //       http://digikala.com
    //       http://api.digikala.com
    //       com.digikala.www
    }

    focuser = () => {
        this.Input.focus();
        console.log(this.Input.value);
    };

    render() {
        // console.log(this.state.data);
        // if(true) return <div>Loading</div>;
        return (
            <div>
                <h1>Home {/*{this.state.item.menu.item.name}*/}</h1>
                <button onClick={this.focuser}>Focus input</button>
                <input ref={input => this.Input = input} type="text" name='harchi' value={this.state.harchi} onChange={HandleChange.bind(this)}/>
            </div>
        )
    }
}