import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom"
import Home from '../pages/Home';
import Login from "../pages/Login"
import RestaurantDetail from '../pages/RestaurantDetail';
import Profile from '../pages/Profile/Profile';
import Signup from '../pages/Signup';
import Feed from '../pages/Feed';
import Header from '../components/Header/Header'

const Router = () => {
    
    return (
        <BrowserRouter>
            <Header/>
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
                <Route exact path="/home/profile">
                    <Profile />
                </Route>
                <Route exact path="/home">
                    <Home />
                </Route>

                <Route exact path="/feed">
                    <Feed />
                </Route>
      
                <Route exact path="/restaurant-detail/:id">
                    <RestaurantDetail />
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default Router