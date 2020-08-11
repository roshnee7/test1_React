import React from 'react';
import './login.css';
import avtar from './img_avatar2.png';


class Login extends React.Component{

    constructor(props){
        super(props);
  
        this.state ={
          loginSuccess: false,
          userName: '',
          password: ''
        }
      }

      handleInput = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
        })
    };

    render(){//console.log('renderLogim',this.state)
        let loginCard ={
            backgroundColor: 'aqua',
            width:'600px',
            marginTop:'200px',
            marginLeft:'300px'
        }
        return(
            <div style={{backgroundColor:'aliceblue'}}>
            <form>
            <div className="imgcontainer">
                 <img src={avtar} height={10} width={20} alt="Avatar" class="avatar"/>
             </div>

             <div className="container">
                 <label for="uname"><b>Username </b></label>
                 <input type="text" placeholder="Enter Username"  onChange={this.handleInput} name="userName" value={this.state.userName} required/><br></br>

                 <label for="psw"><b>Password </b></label>
                 <input type="password" placeholder="Enter Password"  onChange={this.handleInput} name="password" value={this.state.password} required/><br></br>
                     
                 <button type="button" href="/viewCart" onClick={() => this.props.login(this.state.userName,this.state.password)}>Login</button>
             </div>
             </form>
             
         </div>
        )
    }
}

export default Login;