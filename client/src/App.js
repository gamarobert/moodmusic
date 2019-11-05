import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

import Dashboard from './components/pages/Dashboard';
import Home from './components/pages/Home';
import Logo from './components/layout/Logo';
import Footer from './components/layout/Footer';

const App = () => {
  return (
    <Router>
      <Logo />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/dashboard" component={Dashboard} />
      </Switch>
      <Footer />
    </Router>
  );
};

export default App;
