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
import Payments from '../Payments/Payments'
import { loadStripe } from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js'


const promise = loadStripe('pk_test_51IGloHBskh1aSg7kuKz6P4ZvjzHbKcpRKca1nycs5fSFFUieg9KAE3r2Mav6U1F7yk4whfGgJgRon3ZSokKBcHEc00pg9M3Y1g');


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
            <Footer />
          </Route>

          <Route path="/payments">
            <Header />
            <Elements stripe={promise}>
              <Payments />  
            </Elements>
                        
            <Footer />
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
