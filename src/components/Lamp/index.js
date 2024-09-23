import React, { Component } from 'react';
import './style.css'
class Lamp extends Component {
    constructor(props) {
        super(props)
        this.state={
            isOn: false
        }
    }
    changeLight = ()=>{
        this.setState({
            isOn: !this.state.isOn
        })
    }
    render=() =>{
        const text = this.state.isOn?'Off':'On'
        const styles = this.state.isOn?'on':'off'
        return (
            <section>
                <div className={styles}></div>
                <button onClick={this.changeLight}>{text}</button>
            </section>
        );
    }
}

export default Lamp
