import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom"
import Home from '../pages/Home';
import Login from "../pages/Login/Login"
import RestaurantDetail from '../pages/RestaurantDetail';
import Profile from '../pages/Profile/Profile';
import Signup from '../pages/Signup/Signup';
import { Cart } from '../pages/Cart/Cart';
import EditProfile from '../pages/Profile/EditProfile'
import EditAddress from '../pages/Profile/Address/EditAddress'
import Feed from '../pages/Feed/Feed';
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'


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
                <Route exact path='/home/profile/edit'>
                    <EditProfile/>
                </Route>
                <Route exact path='/home/profile/edit/address'>
                    <EditAddress/>
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
                <Route exact path="/cart">
                    <Cart />
                </Route>
            </Switch>
            <Footer/>
        </BrowserRouter>
    )
}

export default Router