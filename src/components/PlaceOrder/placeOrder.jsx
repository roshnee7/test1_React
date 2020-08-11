import React from 'react';
import Header from '../Layout/Header';
import welcome from './welcome.png';
import { connect } from 'react-redux';

class PlaceOrder extends React.Component{

    onViewCart=() => {
        this.props.history.push('/viewCart');
    }

    onBack=() => {
        console.log(this.props)
        if(this.props.loginData !== undefined) {
            this.props.history.push('/foodItems');
        }
        else {
            this.props.history.push('/');
        }
    }

    onYourOrders=() => {
        this.props.history.push('/orders');
    }

    render(){console.log('placeorder')
    let successMsgStyle={
        marginLeft:'400px',
        color:'red',
        backgroundColor:'#dadaaf',
        width:'560px'
    }
        return(
            <div>
                <Header/><br></br><br></br>
                <h1>Place Order</h1>
                <button type="button" style={{position:'relative', top:'-50px', left:'980px', backgroundColor:'#67c361',color:'white'}}
                onClick={this.onYourOrders}>Your Orders</button>
                <div style={successMsgStyle}>
                    <h1>Order has been placed successfully!</h1>
                   <img style={{height:'300px',marginLeft:'130px'}} src={welcome} />
                </div>
                <button type="button" style={{position:'relative',backgroundColor:'#67c361',color:'white'}}
                onClick={this.onBack}>Go Back</button>
                {/* <a onClick={this.onViewCart}>View Cart</a> */}
            </div>
        );
    }
}

const mapStateToProps = state => {console.log('redOrderSta',state)
  return {
      OrderData: state.foodItem.placeOrderData,
      loginData: state.login.LoginData
  }
} 

export default connect(mapStateToProps, null) (PlaceOrder);