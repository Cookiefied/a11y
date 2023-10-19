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
        <hr>
        </hr>

        <h2>Principle 1: Perceivability</h2>
        <p>
        Perceivability is a fundamental principle of accessible web design, emphasizing that content and information should be presented in a way that can be easily perceived by all users, regardless of their abilities. By prioritizing perceivability, web designers enable people with disabilities, such as those with visual or cognitive impairments, to access and understand web content, fostering a more inclusive and user-friendly online experience.
        </p>

        <hr></hr>

        <h2>Principle 2: Operability</h2>
        <p>
        Operability in accessible web design focuses on making sure that all interactive elements and functionality are designed to be easily operated by a wide range of users, including those with physical or motor impairments. Prioritizing operability enhances the usability of a website for everyone, promoting an inclusive online environment.
        </p>

        <hr></hr>

        <h2>Principle 3: Understandability</h2>
        <p>
        Understandability is a critical aspect of accessible web design, emphasizing the need to present content and information in a clear and straightforward manner. This ensures that users, including those with cognitive or learning disabilities, can comprehend the content easily. Prioritizing understandability helps create a more user-friendly and inclusive web environment by reducing barriers to accessing and processing information.
        </p>

        <hr></hr>

        <h2>Principle 4: Robustness</h2>
        <p>
        Robustness in accessible web design pertains to the website's ability to remain functional and provide a consistent user experience across different devices, browsers, and assistive technologies. By prioritizing robustness, web designers help guarantee that individuals using various technologies to access the web can do so effectively, contributing to a more reliable and accessible online environment.
        </p>

        <Routes>
          <Route path="/" element={<Project />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;