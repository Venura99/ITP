import React, { useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/navbar";
import ManageStaff from './components/pages/manageStaff';
import AddStaff from './components/pages/addStaff';
import ViewStaff from './components/pages/viewStaff';
import EditStaff from './components/pages/editStaff';
import CalcSalary from './components/pages/calcSalary';
import ViewSalary from './components/pages/viewSalary';

import Dashboard from "./components/Dashboard";
import NavMain from "./components/layout/NavMain";
import Landing from "./components/layout/Landing";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import PrivateRoute from "./routing/PrivateRoute";
import NotFound from "./components/NotFound";
import setAuthToken from "./utils/setAuthToken";
import store from "./store";
import { loadUser } from "./actions/auth";


if (localStorage.token) {
  setAuthToken(localStorage.token);
}

function App() {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);
  return (
    <>
      <div className="App">
        <Router>
          <NavMain />

          <Switch>
            <Route exact path="/" component={Landing} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <div>
              <Navbar />
              <PrivateRoute exact path="/dashboard" component={Dashboard} />
              <Route path='/manageStaff' component={ManageStaff} />
              <Route path='/addStaff' component={AddStaff} />
              <Route path='/viewStaff' component={ViewStaff} />
              <Route path='/calcSalary' component={CalcSalary} />
              <Route path='/viewSalary' component={ViewSalary} />
              <Route path='/editStaff/:id' component={EditStaff} />
            </div>
          </Switch>
        </Router>
      </div>
    </>
  );
}

export default App;