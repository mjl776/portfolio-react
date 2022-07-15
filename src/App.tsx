import React from 'react';
import './App.css';
import NavBar from './NavigationBar/NavBar'
import { BrowserRouter as Router, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
        <NavBar></NavBar>
    </Router>

  );
}

export default App;
