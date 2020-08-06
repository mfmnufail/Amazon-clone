import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from './Header';
import Home from "./Home"


function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
        
          <Route path = "/login">
            <h1>Login page</h1>
            </Route>
          <Route path = "/checkout">
          <Header/>
            Checkout page
            </Route>
          <Route path = "/">
            <Header/>
            <Home/>
            Home
          </Route>
        </Switch>
      </div>

    </Router>
    
  );
}

export default App;
