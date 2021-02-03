import React from 'react'
import './App.css';
import Header from '../Header/Header'
import Home from '../Home/Home'
import {BrowserRouter as Router, Switch, Route}
from'react-router-dom'
import Deals from '../Deals/Deals'
import Footer from '../Footer/Footer'
import Login from '../Login/Login'
import Checkout from '../Checkout/Checkout'
import Subtotal from '../Subtotal/Subtotal'


function App() {
  return (
    <Router>
      <div className="app">
       
        <Switch>
          
  
          <Route path="/login">
            <Login />
          </Route>
          
          <Route path="/deals">
            <Header />
            <Deals />
            <Footer />
          </Route>

          <Route path="/checkout">
            <Header /> 
            <Checkout />
          </Route>

          <Route path="/">
            <Header />
            <Home />
            <Footer />
          </Route>

        </Switch>
      </div>
    </Router>
  );
}

export default App;
