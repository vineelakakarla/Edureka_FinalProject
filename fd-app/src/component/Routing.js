import React from 'react';
import {BrowserRouter,  Route,  Switch } from 'react-router-dom';
import Header from './Header/Header';
import Home from './Home';
import RestData from './Restaurant/RestData';
import Details from './Listing/Details';
import OrderForm from './order/OrderForm';
import OrderDisplay from './order/OrderDisplay'

const Routing = () => {
    return (
        <BrowserRouter>
            
            <div>
                <Header />
                <Route exact path="/" component = {Home}></Route>
                <Route exact path="/details/:mealtype" component= {Details}></Route>
                <Route path="/rest/:id" component = {RestData}></Route>
                <Route path="/form/:id" component = {OrderForm}></Route>
                <Route path='/orderDisplay' component = {OrderDisplay}></Route>
                
          
            </div>
         
        </BrowserRouter>
    )
}
export default Routing;