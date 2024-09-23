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
    render() {
        return (
            <div>
                Parent
                <button onClick={this.changeRender}>Change render</button>
                {this.state.render? <Child />: null}
            </div>
        );
    }
}

export default Parent