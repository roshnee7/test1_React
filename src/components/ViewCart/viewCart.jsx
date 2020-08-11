import React from 'react';
import foodItems from '../FoodItems/foodItems';
import placeOrder from '../PlaceOrder/placeOrder';
import Header from '../Layout/Header';
import img from '../FoodItems/burger.jpg';
import Button from '../Button/button';
import {placeOrderAction} from "../../store/actions/FoodItemsAction";
import { connect } from 'react-redux';



class ViewCart extends React.Component{
    constructor(props){
        super(props);
            console.log(this.props)
            this.state={
                quantity: 1,
                show: true,
                grandTotal: 0,
                itemData:[]
            }
           
    }

    onBack=() => {
        console.log(this.props);
        if(this.props.loginData !== undefined) {
            this.props.history.push('/foodItems');
        }
        else {
            this.props.history.push('/');
        }
    }

    onPlaceOrder=() => {
        if(this.props.loginData === undefined) {
            this.props.history.push('/');
        }
        else {
            let itemArr =[];
            let tempItemData = this.state.itemData;
            let gTotal = 0;
            let total = 0;
            tempItemData.map((item)=>{
                itemArr.push({
                    foodItemId: item.foodItemId,
                    quantity: item.quantity
                })
            });

            tempItemData.map((item)=>{
                total += item.price * item.quantity;
            });
            gTotal = total * 1.05;

            let orderData = {
                userId: this.props.loginData.status.userid,
                items: itemArr,
                totalPrice: gTotal
            }

            this.props.placeOrderAction(orderData);
            console.log('orderData',orderData)
                this.props.history.push('/placeOrder');
        }
    }

    

    componentDidMount(nextProps, nextState){
        console.log('componentDidMount',this.props)
        // console.log(nextProps)
        // if(this.props.location.state && this.props.location.state.itemData === undefined || nextProps.itemData.length != this.props.location.state.itemData.length)
        // {
            let tempFoodItems = this.props.location.state.itemData;
            let newArr = [];
            tempFoodItems.map((foodItem) => {
                // foodItem.quantity = 0;
                if(foodItem.quantity > 0){
               
                newArr.push({foodItemId:foodItem.foodItemId,foodName: foodItem.foodName, quantity: foodItem.quantity, price: foodItem.price})
                return(newArr);
                }
            })
            console.log('newArr', newArr);
            this.setState({itemData: newArr});
        // }
    }

    IncrementItem = (id) => {console.log('id',id)
    let tempData = this.state.itemData;
    let gTotal = '';
    tempData.map((food) =>{
            if(food.foodItemId == id){
                food.quantity += 1;
            }
            return(food);
        });
        this.setState({itemData: tempData});
    }
    DecreaseItem = (id) => {
        let tempData = this.state.itemData;
        let gTotal = '';
        tempData.map((food) =>{
                if(food.foodItemId == id){
                    if(food.quantity > 0){
                        food.quantity -= 1;
                    }else {
                          return null;
                        }
                }
                return(food);
            });
        this.setState({itemData: tempData});

    //   this.setState(prevState => {
    //     if(prevState.quantity > 0) {
    //       return {
    //         quantity: prevState.quantity - 1
    //       }
    //     } else {
    //       return null;
    //     }
    //   });
    }

    handleChange = (event) => {
        this.setState({quantity: event.target.value});
      }

    render(){console.log('vC,',this.state)
    let total = 0;
    this.state.itemData && this.state.itemData.map((food) =>{
        total += food.price * food.quantity;
    });

    let tax = total * 0.05;
    let grandTotal = total + tax;

        return(
            <div>
                <Header/><br></br><br></br>
                <h1>View Cart</h1>
                { this.state.itemData && this.state.itemData.length > 0 ?  <table className ='foodItems' style={{width:'60%'}}>
                        <tr >
                            <th >Food Name</th>
                            <th >Quantity</th>
                        </tr>
                    { this.state.itemData ?   this.state.itemData.map((food) =>{
                       return<> 
                        <tr >
                    <td >{food.foodName  } <br></br><br></br> {'₹'+food.price}</td>
                            <td>
                                {<Button
                                    quantity={food.quantity}
                                    increment={this.IncrementItem}
                                    decrement= {this.DecreaseItem}
                                    onchange= {this.handleChange}
                                    foodId={food.foodItemId}/> 
                                } {'₹'+food.price * food.quantity}
                            </td>
                        </tr>
                           
                        </>
                    }) : ''}
                    <tr>
                        <td>Total</td>
                        <td>{'₹'+total}</td>
                    </tr>
                    <tr>
                        <td>Tax @5%</td>
                        <td>{'₹'+tax}</td>
                    </tr>
                    <tr>
                        <td>Grand Total</td>
                <td>{'₹'+grandTotal}</td>
                    </tr>
                    
                    </table> : ''}
                    <br />
                    <button type="button" style={{backgroundColor:'#67c361',color:'white'}}  onClick={this.onBack}>Go Back</button>
                    { this.state.itemData && this.state.itemData.length > 0 ? <button type="button" style={{position:'relative',left:'650px',backgroundColor:'#67c361',color:'white'}} 
                        onClick={this.onPlaceOrder}>Place Order</button> : ''}
            </div>
        )
    }
}

const mapStateToProps = state => {console.log('redOrderSta',state)
  return {
      OrderData: state.foodItem.placeOrderData,
      loginData: state.login.LoginData
  }
} 

const mapDispatchToProps = dispatch => {
  return {
    placeOrderAction: (orderData) => dispatch(placeOrderAction(orderData))
  }
}

export default connect(mapStateToProps, mapDispatchToProps) (ViewCart);