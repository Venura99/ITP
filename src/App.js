import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from "./components/navbar";

function App() {
  return (
    <Router>
      <div className="container">
        <Navbar />
        <br />
        Hello World!
      </div>
    </Router>
  );
}

export default App;
