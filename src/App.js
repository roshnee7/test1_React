import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Route, BrowserRouter as Router, Switch} from 'react-router-dom';
import foodItems from './components/FoodItems/foodItems';
import Home from './components/Home/home';
import Login from './components/Login/login';
import axios from 'axios';
import { connect } from 'react-redux';
import {LoginSubmit} from "./store/actions/LoginAction";

class App extends React.Component{
    constructor(props){
      super(props);

      this.state ={
        loginSuccess: false
      }
    }

  login = (username, password) =>{
    this.props.loginAction(username, password);
    // this.setState({
    //   loginSuccess:true
    // });
    console.log('loginnnn',this.props)
  }

  componentDidUpdate(){
    if(this.props.loginData && this.props.loginData.status ){
      this.props.history.push({
            pathname: `/foodItems`,
            state: {}
        })
    }
    else if (this.props.loginData && this.props.loginData.status && this.props.loginData.status == "Error in Login"){
     alert('Invalid User!')
    }

  }

  nextPath(path) {
    this.props.history.push(path);
  }

  render(){
  return (
    <div className="App">

     {this.state.loginSuccess == true ? 
     <Home/>
     : <Login login={this.login}/>} 
    </div>
  );
    }
}

const mapStateToProps = state => {console.log('redSta',state)
  return {
      loginData: state.login.LoginData
  }
} 

const mapDispatchToProps = dispatch => {
  return {
      loginAction: (password, userName) => dispatch(LoginSubmit(password, userName))
  }
}

export default connect(mapStateToProps, mapDispatchToProps) (App);
