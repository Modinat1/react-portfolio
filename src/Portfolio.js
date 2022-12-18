
import React from 'react';

// import images
import myPhoto from './aasets/MyPhoto.jpeg';
import projectImg_1 from './aasets/project 1.png'
import projectImg_2 from './aasets/project 2-min.png'
import projectImg_3 from './aasets/project 3-min.png'
import projectImg_4 from './aasets/project 4.png'

// import CV
import CV from './aasets/Modinat-Adenike-Adesola CV.docx';

// import icons
import {FaLinkedinIn} from 'react-icons/fa';
import {FaGithub} from 'react-icons/fa';
import {FaRegEnvelope} from 'react-icons/fa';


// Css imported
import "./portfolio.css"


function Portfolio() {
  return (
   <>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
  <link
    href="https://fonts.googleapis.com/css2?family=Roboto:wght@100&display=swap"
    rel="stylesheet"
  />
  <title>Portfolio</title>
  <link rel="stylesheet" href="main.css" />
  <div className="container">
    {/* NAV SECTION */}
    <header>
      <nav id="navbar">
        <div>
          <h3>Deenah</h3>
        </div>
        <ul className="navlist">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#projects">projects</a>
          </li>
          <li>
            <a href="#contacts">Contact</a>
          </li>
        </ul>
        <button id="burger" className="hamburger">
          <span className="line-1" />
          <span className="line-2" />
          <span className="line-3" />
        </button>
      </nav>
    </header>

    {/* HERO SECTION */}
    <section id="hero">
      <h3 className="hi">Hi, my name is</h3>
      <h1 className="profile-name">Adesola Modinat Adenike.</h1>
      <h1 className="profile-role">I build front-end products.</h1>
      <p>I'm a resourceful, detail-oriented front-end developer.</p>
      <p>
        I turn UI designs into codes, by creating scalable front-end interfaces
        with a great user experience
      </p>
      <button className="download-cv">
        <a href={CV} download=" "> Download CV</a>
      </button>
    </section>

    {/* ABOUT SECTION */}
    <section id="about">
      <h3>About Me</h3>
      <div className="about">
        <div className="profile-info">
          <p>
            I'm Modinat, I started my journey into tech in the year 2020, after
            having been encouraged by friends to pick an interest in it since
            the year 2016.
          </p>
          <p>
            In year 2020, I started by learning html, and my interest in
            programming grew from there.
          </p>
          <p>
            I have since then undergone different software development training,
            one of which was the Innkeeper/8th gear software development traning
            after which i was opportuned to intern with
            <span className="keyWords">Paper Work Technologies</span>, where i
            was responsible for building interfaces and
            <span className="keyWords">SEO optimization</span>
          </p>
          <p>
            I'm currently a fellow at <span className="keyWords">Tiidelab</span>
            , to further broaden not just my{" "}
            <span className="keyWords">technical skills</span>, but also my <span className="keyWords">soft-skills</span> adenike
            <span className="keyWords">professional skills</span>
          </p>
          <p>I'm currently skilled in html, css, javascript and react </p>
          <div className="icons">
            <a href="https://github.com/Modinat1"> <FaGithub className='icon'/> </a>

            <a
              href="https://www.linkedin.com/in/modinat-adenike-adesola-96356796"
              target="_blank"
            >
              <FaLinkedinIn className='icon'/>
            </a>
           
            <a href="mailto:adenikem@yahoo.com">
              <FaRegEnvelope className='icon'/>
            </a>
          </div>
        </div>
        <div className="img-container">
          <img
            className="profile-img"
            src={myPhoto}
            alt=" "
          />
        </div>
      </div>
    </section>

    {/* Projects */}
    <section id="projects">
      <h3>Projects</h3>
      {/* pproject 1 */}
      <div className="project">
        <div className="project-screenshot">
          <img src={projectImg_1} alt=" " />
        </div>
        <div className="project-info">
          <h4>AgroEase</h4>
          <p>
            An e-commerce app that enables buying and selling of farm produce
          </p>
          <div className="tech-used">
            <span>React</span>
            <span>ContextAPI</span>
          </div>
        </div>
      </div>

      {/* project 2 */}
      <div className="project project-odd">
        <div className="project-screenshot">
          <div className="overlay">
            <img src={projectImg_2} alt=" " />
          </div>
        </div>
        <div className="project-info">
          <h4>Weather App</h4>
          <p>
            A weather application, that uses the open weather API to give
            weather report in any part of the searched world
          </p>
          <div className="tech-used">
            <span>html</span>
            <span>css</span>
            <span>javascript</span>
          </div>
        </div>
      </div>

      {/* project 3 */}
      <div className="project">
        <div className="project-screenshot">
        <img src={projectImg_3} alt=" " />
        </div>
        <div className="project-info">
          <h4>Paper work Technologies</h4>
          <p>
            Paper work Technologies website, a company website that offers a
            business plan, market strategies, profile pitch and financial audit
            to thier clients.
          </p>
          <div className="tech-used">
            <span>html</span>
            <span>css</span>
            <span>javascript</span>
          </div>
        </div>
      </div>

      {/* project 4 */}
      <div className="project">
        <div className="project-screenshot">
          <img src={projectImg_4} alt=" " />
        </div>
        <div className="project-info">
          <h4>Joke App</h4>
          <p>An App that generates all kinds of jokes from an API</p>
          <div className="tech-used">
            <span>html</span>
            <span>css</span>
            <span>javascript</span>
          </div>
        </div>
      </div>
      {/* contact */}
      <section id="contacts">
        <div className="get-in-touch">
          <h2>Get In Touch</h2>
          <p>I'm open to any kinds of opportunities</p>
          <p>Kindly hit up</p>
          <button>
            <a href="mailto:adenikem@yahoo.com">Hit Me Up</a>
          </button>
        </div>
      </section>
      <footer>Deenah © copyright 2022</footer>
    </section>
  </div>
</>
 
   
  );
}

export default Portfolio;