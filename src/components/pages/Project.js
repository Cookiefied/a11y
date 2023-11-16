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
        <h4>Please use the side navigation to browse, or click the top info button for more information.</h4>
        <p>
          This site is a work in progress. Please check back later.
        </p>
      </header>
      <body>
        <div class="DAW">
          <div class="DAW1">
            <h2>Principle 1: Perceivability</h2>
            <p><strong>Summary:</strong> Perceivability is a fundamental principle of accessible web design, emphasizing that content and information should be presented in a way that can be easily perceived by all users, regardless of their abilities. By prioritizing perceivability, web designers enable people with disabilities, such as those with visual or cognitive impairments, to access and understand web content, fostering a more inclusive and user-friendly online experience.</p>
            <h3>Causes:</h3>
            <h4>Insufficient Contrast:</h4>
              <p>Low contrast refers to an insufficient difference in brightness or color between different elements in an image, webpage, or design.</p>
              <p>Low contrast makes it difficult for users to distinguish certain elements and find information on a page, especially for those with visual impairments that already make it difficult to find information.</p>
            <h4>Small Sizes</h4>
              <p>Text and images that are too small make it difficult for users to find information on a page by reducing the legibility of text, potentially causing users to strain their eyes, and leading to a loss of detail or information in images.</p>
            <h4>Unclear Typography</h4>
              <p>Unclear typography refers to text that is difficult to read or discern. This can be caused by poor choice in font, insufficient font size, irregular or abnormal letter spacing, and text colors that are difficult to read.</p>
              <p>Effective typography should be readable and lend itself to a clear visual hierarchy of information for the reader.</p>
            <h4>Complex layouts…</h4>
          </div>
          <div class="DAW2">
            <h2>Principle 2: Operability</h2>
            <p><strong>Summary:</strong> Operability in accessible web design focuses on making sure that all interactive elements and functionality are designed to be easily operated by a wide range of users, including those with physical or motor impairments. Prioritizing operability enhances the usability of a website for everyone, promoting an inclusive online environment.</p>
            <h3>Causes:</h3>
            <h4>Inadequate feedback</h4>
              <p>Feedback is how a webpage lets a user know about the actions they’ve taken, the system’s response, and their current status.</p>
              <ul>Feedback can look like:</ul>
                <li> - Success messages</li>
                <li> - Error messages</li>
                <li> - System sounds, like beeps, dings, or clicks.</li>
                <li> - Vibrations</li>
                <li> - Progress bars</li>
                <li> - Loading spinners</li>
                <li> - Hover effects</li>
                <li> - Button press effects</li>
              <p>Not providing a user with adequate feedback can leave them uncertain about their status or actions, leading them to unnecessarily repeat actions, input incorrect actions, or be unable to understand the information presented to them.</p>
          </div>
          <div class="DAW3">
            <h2>Principle 3: Understandability</h2>
            <p><strong>Summary:</strong> Understandability is a critical aspect of accessible web design, emphasizing the need to present content and information in a clear and straightforward manner. This ensures that users, including those with cognitive or learning disabilities, can comprehend the content easily. Prioritizing understandability helps create a more user-friendly and inclusive web environment by reducing barriers to accessing and processing information.</p>
            <h3>Causes:</h3>
            <h4>Poor organization of information</h4>
              <p>Information on a webpage should be organized in a manner that allows users to visually navigate and find information in a logical manner.</p>
              <p>Poorly organized information can make it difficult for a user to navigate a page and discover information.</p>
            <h4>Complex language</h4>
              <p>Unnecessarily wordy or technical language for topics that don’t require it may make it difficult for readers to understand the information.</p>
              <p>Language should be simple enough to be as understandable as possible for the target audience.</p>
            <h4>Unclear action text</h4>
              <p>Hyperlinks and buttons on web pages are generally labeled with “action text” that describes the website being linked or the function of the button.</p>
              <p>Hyperlink text or button action text that does not accurately describe the link or the action can cause users to input actions that are not in line with their intentions.</p>
          </div>
          <div class="DAW4">
            <h2>Principle 4: Robustness</h2>
            <p><strong>Summary:</strong> Robustness in accessible web design pertains to the website's ability to remain functional and provide a consistent user experience across different devices, browsers, and assistive technologies. By prioritizing robustness, web designers help guarantee that individuals using various technologies to access the web can do so effectively, contributing to a more reliable and accessible online environment.</p>
            <h3>Causes:</h3>
            <h4>Browser incompatibility</h4>
              <p>Websites should be designed with as many users in mind as possible. Creating sites that are incompatible with certain browsers by way of a reduction of functionality or organization may alienate some users.</p>
            <h4>Accessibility software incompatibility</h4>
              <p>It’s important to design sites with due regard to accessibility software like screen readers and video transcribers. Neglecting this aspect can make it hard or impossible for users with disabilities to properly use your site.</p>
            <h4>Non-standard code</h4> <p> (the cause of the incompatibilities)</p>
            <h4>Large media files</h4>
              <p>Which neglects text-only users (those who have slow connections)</p>

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
