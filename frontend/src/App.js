import React from 'react'
import './App.css';
import Header from './Header'
import Home from './Home'
import {BrowserRouter as Router, Switch, Route}
from'react-router-dom'
import Deals from './Deals'
import Footer from './Footer'
import Login from './Login'


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
