import React from 'react';
import './button.css';

class Button extends React.Component{
    constructor(props){
        super(props);

        this.state={
            quantity: 1,
            show: true,
        }
    }


    render(){
        return(<div className="buttonDiv">
            <button className="incButton" onClick={()=>this.props.increment(this.props.foodId)}>+</button>
            <input style ={{width:'40px', height:'35px'}}className="inputne" value={this.props.quantity} onChange={this.props.onchange}/>
            <button className="incButton" onClick = {()=>this.props.decrement(this.props.foodId)}>- </button>
            </div>
        );
    }
}

export default Button;
