import React, { Component } from 'react';
import './style.css'
class Lamp extends Component {
    constructor(props) {
        super(props)
        this.state={
            isOn: false
        }
        this.div = <div className='off'></div>
    }
    on=()=>{
        this.setState({
            isOn:true
        })
        this.div = <div className='on'></div>
    }
    off=()=>{
        this.setState({
            isOn:false
        })
        this.div = <div className='off'></div>
    }
    // changeLight = ()=>{
    //     this.setState({
    //         light: this.state.light === 'off'?'on':'off'
    //     })
    // }
    render=() =>{
        const callback = this.state.isOn? this.off:this.on
        const text = this.state.isOn?'Off':'On'
        return (
            <section>
                {this.div}
                <button onClick={callback}>{text}</button>
            </section>
        );
    }
}

export default Lamp
