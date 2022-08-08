import React from 'react';
import './App.css';
import NavBar from './NavigationBar/NavBar'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from './HomePage/Homepage';
const App = () => {
  return (
    <Router>
      <div className = "container">
          <NavBar/>
          <Routes>
            <Route path="/" element={<HomePage/>}></Route>
            
          </Routes>
      </div>
    </Router>

  );
}

export default App;
