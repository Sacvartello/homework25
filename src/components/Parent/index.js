import React, {Component} from "react";
import Child from "./Child";
class Parent extends Component {
    constructor(props) {
        super(props)
        this.state={
            render:true
        }
    }
    changeRender=()=>{
        this.setState({
            render:!this.state.render
        })
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
            <div onClick={this.changeColor}>
                Parent
                <button onClick={this.changeRender}>Change render</button>
                {this.state.render? <Child />: null}
            </div>
        );
    }
}

export default Parent