import React from 'react';
import viewCart from '../ViewCart/viewCart';
import Header from '../Layout/Header';
import Footer from '../Layout/Footer';
import { connect } from 'react-redux';
import {getFoodItems} from "../../store/actions/FoodItemsAction";
import './foodItems.css';
import img from './burger.jpg';
import Button from '../Button/button';

class FoodItems extends React.Component{
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

    onViewCart=() => {
        // this.props.history.push('/viewCart');
        this.props.history.push({
            pathname: "/viewCart",
            state: {
                itemData: this.state.itemData
            }
        });
    }

    componentDidMount(){
        this.props.getFoodItems();
        if(this.props.ItemData !== undefined){
            let tempFoodItems = this.props.ItemData.Data;
            tempFoodItems.map((foodItem) => {
                foodItem.quantity = 0;
                return(foodItem);
            })
            this.setState({itemData: tempFoodItems});
        }
    }

    componentWillUpdate(nextProps, nextState) {

        if(this.props.ItemData === undefined || nextProps.ItemData.Data.length != this.props.ItemData.Data.length)
        {console.log('componentWillUpdateinside if')
            let tempFoodItems = nextProps.ItemData.Data;
            tempFoodItems.map((foodItem) => {
                foodItem.quantity = 0;
                return(foodItem);
            })
            this.setState({itemData: tempFoodItems});
        }
    }

    IncrementItem = (id) => {console.log('id',id)
    console.log('IncrementItem stat',this.state)
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
    }

    handleChange = (event) => {
        this.setState({quantity: event.target.value});
      }
    
    onYourOrders = () => {
        this.props.history.push('/orders');
    }


    render(){console.log('foodItemRender',this.state)
    let tblBorder={
        border:'1px solid black',
        borderCollapse: 'collapse'
    }
 let gTotal = 0;
    this.state.itemData.map((item) =>{
            gTotal = gTotal + (item.price * item.quantity)
            item.grandTotal = gTotal;
    });

        return(
            <div>
                <Header/><br></br><br></br>
                    <h1>Food Items</h1>
                    <button type="button" style={{marginLeft:'90%',position:'relative',bottom:'40px',backgroundColor:'#67c361',color:'white'}}  onClick={this.onYourOrders}>Your Orders</button>
                    <table className ='foodItems'>
                        <tr >
                            <th >Dish</th>
                            <th >Name</th>
                            <th >Price</th>
                            <th >Quantity</th>
                        </tr>
                    {/* {this.props.ItemData && this.props.ItemData.Data ? this.props.ItemData.Data.map((food) =>{ */}
                    { this.state.itemData ?   this.state.itemData.map((food) =>{
                        console.log('food', food);
                       return<> 
                        <tr >
                            <td ><img src={food.url} height={100} width={100}></img></td>
                             <td >{food.foodName}</td>
                             <td >{food.price}</td>
                            <td>
                                {
                                    <Button
                                    quantity={food.quantity}
                                    increment={this.IncrementItem}
                                    decrement= {this.DecreaseItem}
                                    onchange= {this.handleChange}
                                    foodId={food.foodItemId}/> 
                                }
                            </td>
                             
                        </tr>
                           
                        </>
                    }) : ''}
                    <tr><td><button type="button" style={{backgroundColor:'#67c361',color:'white'}} onClick={this.onViewCart}>View Cart</button></td>
                    <td></td>
                    <td></td>
                <td><span> Total: {gTotal}</span></td>
                    </tr>
                    </table>
                {/* <Footer/> */}
            </div>
        )
    }
}

const mapStateToProps = state => {console.log('redSta',state)
  return {
      ItemData: state.foodItem.ItemData,
      loginData: state.login.LoginData
  }
} 

const mapDispatchToProps = dispatch => {
  return {
    getFoodItems: (userId) => dispatch(getFoodItems(userId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FoodItems);