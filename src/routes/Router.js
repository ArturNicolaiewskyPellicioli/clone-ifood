import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom"
import Home from '../pages/Home';
import Login from "../pages/Login"
import Profile from '../pages/Profile/Profile';
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
                <Route exact path="/home/profile">
                    <Profile />
                </Route>
                <Route exact path="/home">
                    <Home />
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default Router