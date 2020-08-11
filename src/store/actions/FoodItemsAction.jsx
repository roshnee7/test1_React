import axios from 'axios';

export  function getFoodItems ()  {
    
    return function (dispatch) {
      
        let getUrl = 'http://localhost:4000/api/foodItems';
        let itemData = '';
        axios.get(getUrl).then(res => {console.log('foodReponse>>',res)
            if (res.data) {
                itemData = res.data;
               console.log('itemData',itemData)
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
        axios.get(getUrl).then(res => {console.log('OrderReponse>>',res)
            if (res.data) {
                orderData = res.data;
               console.log('orderData',orderData)
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
        axios.post(getUrl,orderData).then(res => {console.log('OrderReponse>>',res)
            if (res.data) {
                placeOrderData = res.data;
               console.log('placeOrderData',placeOrderData)
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