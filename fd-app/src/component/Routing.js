import React from 'react';
import {BrowserRouter,  Route,  Switch } from 'react-router-dom';
import Header from './Header/Header';
import Home from './Home';
import RestData from './Restaurant/RestData';
import Details from './Details/Details';

const Routing = () => {
    return (
        <BrowserRouter>
            
            <div>
                <Header />
                <Route exact path="/" component = {Home}></Route>
                <Route exact path="/details/:mealtype" component= {Details}></Route>
                <Route path="/rest/:id" component = {RestData}></Route>
                
          
            </div>
         
        </BrowserRouter>
    )
}
export default Routing;