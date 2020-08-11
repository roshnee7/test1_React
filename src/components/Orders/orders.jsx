import React from 'react';
import Header from '../Layout/Header';
import {getOrders} from "../../store/actions/FoodItemsAction";
import { connect } from 'react-redux';

class Orders extends React.Component{

    constructor(props){
        super(props);
        console.log(this.props)
    }

    componentDidMount(){console.log('ptppp',this.props)
    let userId = this.props.loginData && this.props.loginData.status && this.props.loginData.status.userid
        this.props.getOrders(userId);
    }

onBack = () => {
    if(this.props.loginData !== undefined) {
        this.props.history.push('/foodItems');
    }
    else {
        this.props.history.push('/');
    }
}
    render(){console.log('Order Props',this.props)
        return(
            <div>
                <Header/><br></br><br></br>
                <div><h1>Orders</h1></div>
                <button type="button" style={{position:'relative',top:'-50px',left:'980px',backgroundColor:'#67c361',color:'white',width:'fit-content'}} 
                onClick={this.onBack}>Go Back</button>
                <div>
                {this.props.OrderData !== undefined && this.props.OrderData && this.props.OrderData.Data && this.props.OrderData.Data.map((food) => {
                    return(
                    <div style={{backgroundColor:'#8ede914d',height:'fit-content',width:'80%',marginLeft:'100px',marginBottom:'20px',float:'left',display:'inline-block'}}>
                        {/* Food Order */}
                        <div>
                            <h3 style={{backgroundColor:'#8ede91',height:'30px',marginTop:'0px',textAlign:'center',paddingTop:'10px'}}>Order Id : {food.orderId}</h3>
                        </div>
                        <table>
                            <tr>
                                <td style={{width:'550px'}}>
                                <div style={{marginLeft:'50px'}}>
                                    {food.items.map((item) => {
                                        return(
                                            <div>
                                                <h4>{item.quantity+ ' X '+ item.foodName }</h4>
                                                <span style={{position:'relative',top:'-10px'}}>{'₹ '+item.price+ ' x '+ item.quantity + ' = ' + item.price * item.quantity}</span>
                                            </div>
                                        )
                                    })}
                                    {/* <span>{gTotal}</span> */}
                                </div>
                                </td>
                                <td>
                                    <h4>Grand Total: </h4>
                                    {'₹' + food.totalPrice}
                                </td>
                            </tr>
                        </table>
                        
                    </div>
                );
               }) }<br></br>
               </div>
            </div>
        );
    }
}

const mapStateToProps = state => {console.log('redOrderSta',state)
  return {
      OrderData: state.foodItem.OrderData,
      loginData: state.login.LoginData
  }
} 

const mapDispatchToProps = dispatch => {
  return {
    getOrders: (userid) => dispatch(getOrders(userid))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Orders);