import React, { useState } from 'react';
import './App.css';
import mazeImage from './images/maze.jpg';
import moyaiImage from './images/moyai.jpg';
import ticTacToeImage from './images/tic_tac_toe.jpg';

function App() {
  const [activeTab, setActiveTab] = useState(null);

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  return (
    <div className="App">
      <header className="App-header">
  <div className="header-content">
    <h1 className="header-title">Michael Yu</h1>
    <p className="header-subtitle">Computer Science Major <br /><br />
    Currently attending Cal State Fullerton pursuing a degree in Computer Science. I am a part-time student also working within the wholesale industry in Downtown LA.<br /><br />
    </p>
  </div>
</header>
      <main className="main-content">

      <nav className="tabs">
      <button className={activeTab === 'skills' ? 'tab-button active' : 'tab-button'} onClick={() => handleTabClick('skills')}>Skills and Expertise</button>
      <button className={activeTab === 'projects' ? 'tab-button active' : 'tab-button'} onClick={() => handleTabClick('projects')}>Projects Showcase</button>
      <button className={activeTab === 'contact' ? 'tab-button active' : 'tab-button'} onClick={() => handleTabClick('contact')}>Contact Information</button>
</nav>


        <section id="skills" className={activeTab === 'skills' ? 'section active skills-section' : 'section skills-section'}>
          <h2>Skills and Expertise</h2>
          <ul className="skill-list">
          <li>C++</li>
          <li>Java</li>
          <li>Python</li>
          <li>JavaScript</li>
          <li>ReactJS</li>
          <li>HTML5</li>
          <li>CSS3</li>
          <li>Assembly</li>
          <li>Cyber Security Analyst (in-training) 
          <li>Artificial Intelligence</li>
          </li>
          
          </ul>
          
        </section>
        <section id="projects" className={activeTab === 'projects' ? 'section active projects-section' : 'section projects-section'}>

          <h2>Projects Showcase</h2>

          <div className="project">
            <h3>Maze Runner</h3>
            <p>An AI that can create and solve mazes.</p>
            <img src={mazeImage} alt="Maze Runner" />
          </div>

          <div className="project">
            <h3>Moyai</h3>
            <p>A web-based gaming website.</p>
            <img src={moyaiImage} alt="Moyai" />
          </div>

          <div className="project">
            <h3>Tic Tac Toe</h3>
            <p>A classic game created using ReactJS.</p>
            <img src={ticTacToeImage} alt="Tic Tac Toe" />
          </div>
    
        </section>
        <section id="contact" className={activeTab === 'contact' ? 'section active contact-section' : 'section contact-section'}>
          <h2>Contact Information</h2>
            <p>Email: yumichael321@gmail.com</p>
</section>
      </main>
      <footer className="App-footer">
        <p>&copy; 2024 Michael Yu. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;