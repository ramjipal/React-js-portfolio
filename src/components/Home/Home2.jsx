import React from 'react'
import {  Row, Col, Container} from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
     AiFillGithub,
     AiOutlineTwitter,
   } from "react-icons/ai";

   import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className = "home-about-section" id="about">
     <Container>
     <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              My Journey into <span className="purple">ServiceNow Development</span>
            </h1>
            <p className="home-about-body">
              I began my career as a <span className="purple">Python full-stack developer</span>, working with Django, Flask, and modern JavaScript frameworks to build web applications and RESTful APIs. This foundation gave me a strong understanding of integrations, backend logic, and UI development, and my early interest in machine learning shaped the way I approach automation and intelligent systems. �
              <br />
              <br />
              After transitioning into <span className="purple">ServiceNow development</span>, I applied the same engineering mindset to deliver ITSM solutions, custom ServiceNow applications, REST integrations, and Service Portal experiences. Driven by my background in ML, I am particularly focused on <span className="purple">Now Assist</span> and <span className="purple">ServiceNow AI Agents</span>, leveraging AI-driven capabilities to improve incident quality, automate resolutions, and enhance service efficiency across enterprise workflows. 🚀
              <br />
              <br />
              My field of Interest's are building new &nbsp;
              <i>
                <b className="purple">Enterprise Solutions and Workflows </b> and
                also in areas related to{" "}
                <b className="purple">
                  AI-Powered Service Management
                </b>
              </i>
              <br />
              <br />
              Whenever possible, I also apply my passion for developing products
              with <b className="purple">ServiceNow Platform</b> and
              <i>
                <b className="purple">
                  {" "}
                  Modern JavaScript Libraries and Frameworks
                </b>
              </i>
              &nbsp; like
              <i>
                <b className="purple"> React.js and ServiceNow Scripting</b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md = {12} className='home-about-social'>
          <h1>FIND ME ON</h1>
          <p>
               Feel free to <span className='purple'>connect </span>with me

          </p>
          <ul className='home-about-social-links'>
               <li className='social-icons'>
                    <a href="https://github.com/ramjipal"
                    target='_blank'
                    rel = "noreferrer"
                    className='icon-colour home-social-icons'>
                      <AiFillGithub />   
                    </a>
               </li>
               <li className="social-icons">
                <a
                  href="https://x.com/ramjipal85"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/ramjipal/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            
          </ul>
          </Col>
        </Row>
     </Container>
    </Container>

  )
}

export default Home2