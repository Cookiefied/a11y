import "./Project.css"
import React, { useState } from "react";
import logo from '../../images/a11y_circle.png';

const Project = () => {
  return (
    <div>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          This site is a work in progress. Please check back later.
        </p>
      </header>
    </div>
  );
}

export default Project;

