

export default function FoodItemReducer(state = {
    totalCount: 0, message: '', error: ''
}, action) {
    let newState;
    switch (action.type) {
        case 'GET_FOOD_ITEM':
            newState = Object.assign({}, state, {
                ItemData: action.payload,
            });
            return newState;

        case 'GET_ORDERS':
            newState = Object.assign({}, state, {
                OrderData: action.payload,
            });
            return newState;

        case 'PLACE_ORDERS':
        newState = Object.assign({}, state, {
            PlaceOrderData: action.payload,
        });
        return newState;
                
        
         default:
            return state;
    }
}