import React from 'react';
import './App.css';
import NavBar from './NavigationBar/NavBar'
import {Route, Routes } from "react-router-dom";
import HomePage from './HomePage/Homepage';
import Work from './Work/Work'
import About from './About/About'
const App = () => {
  return (
      <div className = "app">
          <NavBar/>
          <Routes>
            <Route path="/" element={<HomePage/>}></Route>
            <Route path="work" element={<Work/>}></Route>
            <Route path="about" element={<About/>}></Route>
          </Routes>
      </div>
  );
}

export default App;
