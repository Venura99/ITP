import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/navbar";
import Home from './components/pages/home';
import ManageStaff from './components/pages/manageStaff';
import AddStaff from './components/pages/addStaff';
import ViewStaff from './components/pages/viewStaff';
import EditStaff from './components/pages/editStaff';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <br />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/manageStaff' component={ManageStaff} />
          <Route path='/addStaff' component={AddStaff} />
          <Route path='/viewStaff' component={ViewStaff} />
          <Route path='/editStaff/:id' component={EditStaff} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
