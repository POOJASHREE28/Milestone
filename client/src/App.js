import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Login from './components/Login';
import OrderForm from './components/OrderForm';
import FoodFilters from './components/FoodFilters';
import SearchBar from './components/SearchBar';

import './App.css';

const App = () => {
  // Assuming you have a user state and functions for login and logout

  return (
    <Router>
      <div>
        <Navbar />
        <div className="container">
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/order" component={OrderForm} />
          </Switch>
          <FoodFilters />
          <SearchBar />
        </div>
      </div>
    </Router>
  );
};

export default App;
