import React from 'react';
import './App.css';
import NavBar from './NavigationBar/NavBar'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from './HomePage/Homepage';
import Work from './Work/Work'

const App = () => {
  return (
    <Router>
      <div className = "app">
          <NavBar/>
          <Routes>
            <Route path="/" element={<HomePage/>}></Route>
            <Route path="/work" element={<Work/>}></Route>
          </Routes>
      </div>
    </Router>

  );
}

export default App;
