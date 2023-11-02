import "./Project.css"
import React, { useState } from "react";
import logo from '../../images/a11y_circle.png';
import slide1 from '../../images/color_blindness/Slide1.png';
import slide2 from '../../images/color_blindness/Slide2.png';
import slide3 from '../../images/color_blindness/Slide3.png';
import slide4 from '../../images/color_blindness/Slide4.png';
import slide5 from '../../images/color_blindness/Slide5.png';
import slide6 from '../../images/color_blindness/Slide6.png';
import slide7 from '../../images/color_blindness/Slide7.png';
import slide8 from '../../images/color_blindness/Slide8.png';
import slide9 from '../../images/color_blindness/Slide9.png';

const Project = () => {
  return (
    <div>
      <header className="App-header">
        <h1>Welcome to our site!</h1>
        <h3>Please use the side navigation to browse, or click the top info button for more information.</h3>
        <p>
          This site is a work in progress. Please check back later.
        </p>
      </header>
      <body>
        <div class="DAW">
          <div class="DAW1">
            <h2>Principle 1: Perceivability</h2>
            <p>Summary: Perceivability is a fundamental principle of accessible web design, emphasizing that content and information should be presented in a way that can be easily perceived by all users, regardless of their abilities. By prioritizing perceivability, web designers enable people with disabilities, such as those with visual or cognitive impairments, to access and understand web content, fostering a more inclusive and user-friendly online experience.</p>
          </div>  
          <div class="DAW2">
            <h2>Principle 2: Operability</h2>
            <p>Summary: Operability in accessible web design focuses on making sure that all interactive elements and functionality are designed to be easily operated by a wide range of users, including those with physical or motor impairments. Prioritizing operability enhances the usability of a website for everyone, promoting an inclusive online environment.</p>
          </div>
          <div class="DAW3">
            <h2>Principle 3: Understandability</h2>
            <p>Summary: Understandability is a critical aspect of accessible web design, emphasizing the need to present content and information in a clear and straightforward manner. This ensures that users, including those with cognitive or learning disabilities, can comprehend the content easily. Prioritizing understandability helps create a more user-friendly and inclusive web environment by reducing barriers to accessing and processing information.</p>
          </div>
          <div class="DAW4">
            <h2>Principle 4: Robustness</h2>
            <p>Summary: Robustness in accessible web design pertains to the website's ability to remain functional and provide a consistent user experience across different devices, browsers, and assistive technologies. By prioritizing robustness, web designers help guarantee that individuals using various technologies to access the web can do so effectively, contributing to a more reliable and accessible online environment.</p>
          </div>
        </div>
        <div class="colorblindness">
          <img src={slide1} class="colorslides"></img>
          <img src={slide2} class="colorslides"></img>
          <img src={slide3} class="colorslides"></img>
          <img src={slide4} class="colorslides"></img>
          <img src={slide5} class="colorslides"></img>
          <img src={slide6} class="colorslides"></img>
          <img src={slide7} class="colorslides"></img>
          <img src={slide8} class="colorslides"></img>
          <img src={slide9} class="colorslides"></img>
        </div>
      </body>
    </div>
  );
}

export default Project;
