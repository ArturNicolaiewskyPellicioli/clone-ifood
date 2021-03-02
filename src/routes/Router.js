import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom"
import Home from '../pages/Home';
import Login from "../pages/Login";
import Signup from '../pages/Signup';
import Feed from '../pages/Feed';

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
                <Route exact path="/feed">
                    <Feed />
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default Router