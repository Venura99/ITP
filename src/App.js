import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from "./components/navbar";
import Home from './components/pages/home';
import ManageStaff from './components/pages/manageStaff';
import AddStaff from './components/pages/addStaff';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <br />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/manageStaff' component={ManageStaff} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
