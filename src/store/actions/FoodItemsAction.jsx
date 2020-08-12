import axios from 'axios';

export  function getFoodItems ()  {
    
    return function (dispatch) {
      
        let getUrl = 'http://localhost:4000/api/foodItems';
        let itemData = '';
        axios.get(getUrl).then(res => {
            if (res.data) {
                itemData = res.data;
            dispatch({
                    type: "GET_FOOD_ITEM",
                    payload: itemData
                });
            }
        }).catch((error) => {
            console.log('loginError', error.message)
        });
    }

}

export  function getOrders (userId)  {
    
    return function (dispatch) {
      
        let getUrl = 'http://localhost:4000/api/orders/'+userId;
        let orderData = '';
        axios.get(getUrl).then(res => {
            if (res.data) {
                orderData = res.data;
            dispatch({
                    type: "GET_ORDERS",
                    payload: orderData
                });
            }
        }).catch((error) => {
            console.log('loginError', error.message)
        });
    }

}

export  function placeOrderAction (orderData)  {
    
    return function (dispatch) {
      
        let getUrl = 'http://localhost:4000/api/orders';
        let placeOrderData = '';
        axios.post(getUrl,orderData).then(res => {
            if (res.data) {
                placeOrderData = res.data;
            dispatch({
                    type: "PLACE_ORDERS",
                    payload: placeOrderData
                });
            }
        }).catch((error) => {
            console.log('loginError', error.message)
        });
    }

}