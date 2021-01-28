import React from 'react'
import './App.css';
import Header from './Header'
import SubHeader from './SubHeader'
import Home from './Home'
import Products from './Products'

function App() {
  return (
    <div className="app">
      <Header />
      <SubHeader />
      <Home />

      <div className="catergory_row">
        <Products />
        <Products />
      </div>

      <div className="catergory_row">

      </div>
    </div>
  );
}

export default App;
