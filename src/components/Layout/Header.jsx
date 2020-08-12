import React from 'react';
import './layout.css';
import { connect } from 'react-redux';

class Header extends React.Component{
    constructor(props){
        super(props);
    }


    render(){
    return(
        <div className="fixed-header">
                <div className="container">
                    <b className="shopname">Roshnee's Food Court</b>
                    <span className="username">{this.props.loginData ? 'Hello ' + this.props.loginData.status.username : ''}</span>
                </div>
        </div>
    )
    }
}

const mapStateToProps = state => {
  return {
      OrderData: state.foodItem.placeOrderData,
      loginData: state.login.LoginData
  }
} 

export default connect(mapStateToProps, null) (Header);