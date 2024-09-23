import './style.css'
import React, { Component } from 'react';

class Child extends Component {
    constructor(props) {
        super(props)
    }
    componentDidMount(){
        console.log('component did mount');
    }
    shouldComponentUpdate(){
        console.log('чи потрібно мені оновлюватися?');
        return true
    }
    componentDidUpdate(){
        console.log('component did update');
    }
    componentWillUnmount(){
        console.log('component wil unmount');
    }
    render() {
        return (
            <div className='yellow-square'>
                
            </div>
        );
    }
}

export default Child