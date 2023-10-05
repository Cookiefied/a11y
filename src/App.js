import React from 'react';
import logo from './images/a11y_circle.png';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Project from "./components/pages/Project";
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <h1>Designing Accessible Websites</h1>
        <hr></hr>

        <h2>Principle 1: Perceivability</h2>
        <p>
        A blurb about perceivability and its importance. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
        </p>

        <h2>Principle 2: Operability</h2>
        <p>
        A blurb about operability and its importance. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
        </p>
        <Routes>
          <Route path="/" element={<Project />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;