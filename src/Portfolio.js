import React from 'react';
import {useState, useEffect} from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

// import images
import myPhoto from './aasets/MyPhoto.jpeg';
import projectImg_1 from './aasets/project 1.png'
import projectImg_2 from './aasets/project 2.png'
import projectImg_3 from './aasets/project 3-min.png'
import projectImg_4 from './aasets/project 4-min.png'

// import CV
import CV from './aasets/Modinat-Adenike-Adesola CV.pdf';

// import icons
import {FaLinkedinIn} from 'react-icons/fa';
import {FaGithub} from 'react-icons/fa';
import {FaRegEnvelope} from 'react-icons/fa';


// Css imported
import "./portfolio.css"
import { Navbar } from './components/Navbar/Navbar';


function Portfolio() {
  const [openBurger, setOpenBurger] = useState(false)
  
  useEffect(() => {
        AOS.init();
      }, [])
  return (
   <>
  <div className="container">
    {/* HEADER SECTION */}
    <header>
      <Navbar openBurger = {openBurger} setOpenBurger= {setOpenBurger}/>
    </header>

    {/* HERO SECTION */}
    <section data-aos="fade-right" data-aos-duration="2000" id="hero">
      <h3 className="hi">Hi, my name is</h3>
      <h1 className="profile-name">Adesola Modinat Adenike.</h1>
      <h1 className="profile-role">I build front-end products.</h1>
      <p>I'm a resourceful, detail-oriented front-end developer.</p>
      <p>
        I turn prototype designs into responsive user interfaces, with efficient reusable codes.
      </p>
      <button className="download-cv">
        <a href={CV} download=" "> Download CV</a>
      </button>
    </section>

    {/* ABOUT SECTION */}
    <section id="about">
      <h3>About Me</h3>
      <div className="about">
        <div className="profile-info" data-aos="fade-right" data-aos-duration="2000">
          <p>
            I'm Modinat, I started my journey into tech in the year 2020, after
            having been encouraged by friends to pick an interest in it since
            the year 2016.
          </p>
          <p>
            In year 2020, I started by learning html, and my interest in
            programming grew.
          </p>
          <p>I recently finished a software development fellowship at Tiidelab, where I was able to broaden my technical skills, soft skills
            and interpersonal relationships.
          </p>

          <p>
            I was also opportuned to undergo a web development training at LSETF/USADF/8th Gear web development training,
            after which i was opportuned to intern with <span className="keyWords">Paper Work Technologies</span>, where I
            was responsible for building user interfaces with html, css and javascript </p>

          <p>I'm currently skilled in html, css, javascript, react, context API </p>

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
            data-aos="fade-left"
            data-aos-duration="2000"
          />
        </div>
      </div>
    </section>

    {/* Projects */}
    <section id="projects">
      <h3>Projects</h3>
      {/* pproject 1 */}
      <div className="project">
        <div className="project-screenshot" data-aos="fade-right" data-aos-duration="2000">
          <img src={projectImg_1} alt=" " />
        </div>
        <div className="project-info" data-aos="fade-left" data-aos-duration="2000">
          <h4>AgroEase</h4>
          <p>
            An e-commerce app that enables buying and selling of farm produce
          </p>
            
          <div className="tech-used">
          <a href=''> <FaGithub/></a>
            <span>React</span>
            <span>ContextAPI</span>
          </div>

          
        </div>
      </div>

      {/* project 2 */}
      <div className="project project-odd">
        <div className="project-screenshot" data-aos="fade-left" data-aos-duration="2000">
          <div className="overlay">
            <a href="https://myhelperng.netlify.app/"><img src={projectImg_2} alt=" " /></a>
          </div>
        </div>
        <div className="project-info" data-aos="fade-right" data-aos-duration="2000">
          <h4>MyHelperNG</h4>
          <p>
            This is an app that matches communities or organizations with volunteers/artisans for volunteering help.
          </p>
          <div className="tech-used">
            <a href='https://github.com/zuri-training/MyHelperNg-fe-pjt-34'> <FaGithub/></a>
            <span>html</span>
            <span>css</span>
            <span>javascript</span>
          </div>
        </div>
      </div>

      {/* project 3 */}
      <div className="project">
        <div className="project-screenshot" data-aos="fade-right" data-aos-duration="2000">
          <a href="http://paperworktechnologies.netlify.app/"><img src={projectImg_3} alt=" " /></a>
        </div>
        <div className="project-info" data-aos="fade-left" data-aos-duration="2000">
          <h4>Paper work Technologies</h4>
          <p>
            Paper work Technologies website, a company website that offers a
            business plan, market strategies, profile pitch and financial audit
            to thier clients.
          </p>
          <div className="tech-used">
            <a href='https://github.com/Modinat1/paperwork'> <FaGithub/></a>
            <span>html</span>
            <span>css</span>
            <span>javascript</span>
          </div>
        </div>
      </div>

      {/* project 4 */}
      <div className="project">
        <div className="project-screenshot" data-aos="fade-left" data-aos-duration="2000">
          <a href="myyweatherapp.netlify.app"><img src={projectImg_4} alt=" " /></a>
        </div>
        <div className="project-info" data-aos="fade-right" data-aos-duration="2000">
          <h4>Weather App</h4>
          <p> A weather application, that uses the open weather API to give
            weather report in any part of the searched world</p>
          <div className="tech-used">
            <a href='https://github.com/Modinat1/weather-app'> <FaGithub/></a>
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
