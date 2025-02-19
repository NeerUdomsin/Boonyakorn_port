import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header>
        <h1>My Portfolio</h1>
        <nav>
          <a href="#about">About</a>
          <a href="#portfolio">Portfolio</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section id="about">
        <h2>About Me</h2>
        <p>แนะนำตัวเองและประวัติการทำงานของคุณ</p>
      </section>

      <section id="portfolio">
        <h2>My Projects</h2>
        <ul>
          <li>Project 1</li>
          <li>Project 2</li>
          <li>Project 3</li>
        </ul>
      </section>

      <section id="contact">
        <h2>Contact Me</h2>
        <p>Email: your.email@example.com</p>
        <p>LinkedIn: <a href="https://linkedin.com/in/yourprofile">Profile</a></p>
      </section>
    </div>
  );
}

export default App;

