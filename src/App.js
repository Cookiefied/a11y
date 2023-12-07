import React from 'react';
import logo from './images/a11y_circle.png';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Project from "./components/pages/Project";
import Sidebar from './components/Sidebar';
import Quiz from './components/Quiz'

function App() {
  return (
    <div className="App">
      <Router>
        <Sidebar />
        <Routes>
          <Route path="/" element={<Project />}></Route>
          <Route path="/quiz" element={<Quiz />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;