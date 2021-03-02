import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom"
import Home from '../pages/Home';
import Login from "../pages/Login"
import RestaurantDetail from '../pages/RestaurantDetail';
import Signup from '../pages/Signup';

const Router = () => {

    
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/">
                    <Login />
                </Route>
                <Route exact path="/login">
                    <Login />
                </Route>
                <Route exact path="/signup">
                    <Signup />
                </Route>
                <Route exact path="/home">
                    <Home />
                </Route>
                <Route exact path="/restaurant-detail">
                    <RestaurantDetail />
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default Router