import React from 'react';
import logo from './images/a11y_circle.png';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Project from "./components/pages/Project";
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className="App">
      <Router>
        <Sidebar />
        <Routes>
          <Route path="/" element={<Project />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;