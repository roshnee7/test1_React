import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import {Route, BrowserRouter as Router, Switch, withRouter} from 'react-router-dom';
import foodItems from './components/FoodItems/foodItems';
import viewCart from './components/ViewCart/viewCart';
import placeOrder from './components/PlaceOrder/placeOrder';
import orders from './components/Orders/orders';
import loginReducer from './store/reducers/LoginReducer';
import FoodItemReducer from './store/reducers/FoodItemReducer';
import {createStore, combineReducers, applyMiddleware,compose} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
  login : loginReducer,
  foodItem : FoodItemReducer
});

const store = createStore(rootReducer,
  applyMiddleware(thunk));
  

ReactDOM.render(<Provider store={store}>
  <React.StrictMode>
    <Router>
            <Switch>
              <Route path='/' exact component={App} />
              <Route path='/foodItems' exact component={foodItems}/>
              <Route path='/viewCart' exact component={viewCart}/>
              <Route path='/placeOrder' exact component={placeOrder}/>
              <Route path='/orders' exact component={orders}/>
            </Switch>
        </Router>
  </React.StrictMode></Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
