import React from 'react';
import {useState, useEffect} from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

// import images
import myPhoto from './aasets/MyPhoto.jpeg';
import projectImg_1 from './aasets/project 1.png'
import projectImg_2 from './aasets/project 2.png'
// import projectImg_3 from './aasets/project 3-min.png'
import projectImg_4 from './aasets/project 4-min.png'
import projectImg_5 from './aasets/project_5.png'
import projectImg_6 from './aasets/project_6.png'
import projectImg_7 from './aasets/project_7.png'
import projectImg_8 from './aasets/project_8.png'
import projectImg_9 from './aasets/project_9.png'

// import CV
import CV from './aasets/CV.pdf'

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

    const currentYear = new Date().getFullYear()
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
      <h1 className="profile-name">Modinat Adenike Adesola.</h1>
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
            I'm Modinat, a Front-end developer. I'm skilled in React, Context API, Redux Tool Kit, Javascript, Html, Css, Tailwind, SQL, python
          </p>
          <p>
          In my previous experiences, I was able to develop a deep understanding of user interface (UI) and user experience (UX) principles, becoming more proficient in building responsive designs and cross-browser compatibility interfaces.
          </p>
          <p>
            I have been able to contribute to the development of high-quality, scalable, and user-friendly web applications.
            Collaborated effectively with designers, back-end developers, and product managers to deliver exceptional digital experiences.
         </p>

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

     {/* Projects*/}
    <section id="project project-odd">
      <h3>Projects</h3>

       {/* project 1 */}
      <div className="project project-odd">
        <div className="project-screenshot" data-aos="fade-right" data-aos-duration="2000">
          <a href="https://vsured-app-smartteller.vercel.app/"><img src={projectImg_9} alt=" " /></a>
        </div>
        <div className="project-info" data-aos="fade-left" data-aos-duration="2000">
          <h4>Vsured</h4>
          <p>
            A Security alert Platform
          </p> 
          <div className="tech-used">
          <a href=''> <FaGithub/></a>
            <span>React</span>
            <span>Redux Tool Kit</span>
            <span>TailwindCSS</span>
            <span>Express js</span>
            <span>Mongo Db</span>
          </div>

          
        </div>
      </div>
   

       {/* project 2 */}
      <div className="project">
        <div className="project-screenshot" data-aos="fade-right" data-aos-duration="2000">
          <a href="https://learn-beta-nine.vercel.app/"><img src={projectImg_8} alt=" " /></a>
        </div>
        <div className="project-info" data-aos="fade-left" data-aos-duration="2000">
          <h4>LearnBeta</h4>
          <p>
            A Learning Platform for senior school students
          </p> 
          <div className="tech-used">
          <a href=''> <FaGithub/></a>
            <span>React</span>
            <span>Context API</span>
            <span>TailwindCSS</span>
            <span>Express js</span>
            <span>Mongo Db</span>
          </div>

          
        </div>
      </div>

           {/* project 3 */}
      <div className="project project-odd">
        <div className="project-screenshot" data-aos="fade-left" data-aos-duration="2000">
          <div className="overlay">
            <a href="https://lms-ebon-six.vercel.app"><img src={projectImg_5} alt=" " /></a>
          </div>
        </div>
        <div className="project-info" data-aos="fade-right" data-aos-duration="2000">
          <h4>LMS</h4>
          <p>
            A learning management system interface.
          </p>
          <div className="tech-used">
            <a href='#'> <FaGithub/></a>
            <span>React</span>
           <span>ContextAPI</span>
            <span>TailwindCss</span>
        </div>
      </div>
      </div>

       {/* project 4 */}
      <div className="project">
        <div className="project-screenshot" data-aos="fade-right" data-aos-duration="2000">
          <a href="https://voting-app-ashen.vercel.app/"><img src={projectImg_6} alt=" " /></a>
        </div>
        <div className="project-info" data-aos="fade-left" data-aos-duration="2000">
          <h4>Voting app</h4>
          <p>
            A voting app interface
          </p>
          <div className="tech-used">
          <a href=''> <FaGithub/></a>
            <span>React</span>
            <span>TailwindCSS</span>
          </div>

          
        </div>
      </div>

          {/* project 5 */}
      <div className="project project-odd">
        <div className="project-screenshot" data-aos="fade-right" data-aos-duration="2000">
          <a href="https://med-chat-tawny.vercel.app/"><img src={projectImg_7} alt=" " /></a>
        </div>
        <div className="project-info" data-aos="fade-left" data-aos-duration="2000">
          <h4>MedChat</h4>
          <p>
            A medical chatting app, an ongoing project, where openAI API will be integrated
          </p>
            
          <div className="tech-used">
          <a href=''> <FaGithub/></a>
            <span>React</span>
            <span>TailwindCSS</span>
          </div>

          
        </div>
      </div>
      
      {/* project 6 */}
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

        {/* project 7 */}
      <div className="project project-odd">
        <div className="project-screenshot" data-aos="fade-left" data-aos-duration="2000">
          <div className="overlay">
            <a href="https://expense-tracker-tau-dusky.vercel.app/"><img src={projectImg_2} alt=" " /></a>
          </div>
        </div>
        <div className="project-info" data-aos="fade-right" data-aos-duration="2000">
          <h4>Expense Tracker</h4>
          <p>
            An app that helps keep track of expenses, both debit  and credit.
          </p>
          <div className="tech-used">
            <a href='https://github.com/Modinat1/expense_tracker'> <FaGithub/></a>
            <span>React</span>
            <span>Context API</span>
          </div>
        </div>
      </div>


      {/* project 8 */}
      <div className="project">
        <div className="project-screenshot" data-aos="fade-right" data-aos-duration="2000">
          <a href="http://paperworktechnologies.netlify.app/"><img src={projectImg_4} alt=" " /></a>
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
      <footer>Deenah © copyright {currentYear}</footer>
    </section>
  </div>
</>
 
   
  );
}

export default Portfolio;
