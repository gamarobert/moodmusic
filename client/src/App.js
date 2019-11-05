import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './App.css';

import Dashboard from './components/pages/Dashboard';
import Home from './components/pages/Home';
import Logo from './components/layout/Logo';
import Footer from './components/layout/Footer';

const App = () => {
  return (
    <Router>
      <div className="content">
        <Link to="/">
          <Logo />
        </Link>

        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/dashboard" component={Dashboard} />
        </Switch>
      </div>
      <Footer />
    </Router>
  );
};

export default App;
