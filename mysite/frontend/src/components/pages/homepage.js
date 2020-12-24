import React from "react";
import {BrowserRouter as Router, Switch, Route} from  "react-router-dom";
import Newsletter from './newsletter'
import Promotions from './promotion'
import Resource from './resource'
import Home from './home'
import Contact from './contact'
import News from './news'

function Homepage() {
    return (
        <Router>
            <Switch>
                <Route exact path ="/">
                    <Home/>
                </Route>
                <Route path ="/promotions">
                    <Promotions/>
                </Route>
                <Route path ="/resources">
                    <Resource/>
                </Route>
                <Route path ="/newsletter">
                    <Newsletter/>
                </Route>
                <Route path ="/news">
                    <News/>
                </Route>
                <Route path ="/contact">
                    <Contact/>
                </Route>
            </Switch>
        </Router>
    );
  }
  
  export default Homepage;