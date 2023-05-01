import React from 'react';
import './App.css';
import NavBar from './NavigationBar/NavBar'
import {Route, Routes } from "react-router-dom";
import HomePage from './HomePage/Homepage';
import Work from './Work/Work'
import About from './About/About'
import Contact from './Contact/Contact';
import Compiler from "./Compiler/Compiler"
import Sierra from "./Sierra/Sierra"
const App = () => {
  return (
      <div className = "app">
          <NavBar/>
          <Routes>
            <Route path="/" element={<HomePage/>}></Route>
            <Route path="work" element={<Work/>}></Route>
            <Route path="about" element={<About/>}></Route>
            <Route path="contact" element={<Contact/>}></Route>
            <Route path="compiler" element={<Compiler/>}></Route>
            <Route path="sierra" element={<Sierra/>}></Route>
          </Routes>
      </div>
  );
}

export default App;
