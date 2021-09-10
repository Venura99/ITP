import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Register from "./components/register"
import Navbar from "./components/navbar";
import Tfee from "./components/tfee";
import Editp from "./components/editp";
import Viewp from "./components/viewp";
import CovidManage from "./components/covidManage";
import ViewTfee from './components/viewTfee';



function App() {
  return (
    <Router>
    
        <Navbar />
        <br/>
        <Route exact path="/register" component={Register} />
        <Route exact path="/tfee" component={Tfee} />
        <Route  path="/edit/:id" component={Editp} />
        <Route exact path="/viewp" component={Viewp} />
        <Route exact path="/covidManage" component={CovidManage} />
        <Route exact path="/viewTfee" component={ViewTfee} />

  
     
    </Router>
  );
}

export default App;