import React from 'react'
import { Container, Row, Col} from "react-bootstrap";
import Particle from '../Particle';
import Techstack from './Techstack';
import Toolstack from './Toolstack';
import AboutCard from './AboutCard';
import CertificationCard from './CertificationCard';
import laptopImg from '../../Assets/about.png';
import servicenow from '../../Assets/Servicenow.png';
import azure from '../../Assets/azure.png';

import calculator from '../../Assets/Projects/calculator.png';
import movie from '../../Assets/Projects/movie.png';






function About() {
  return (
    <Container fluid className='about-section'>
      <Particle />
      <Container>
        <Row style = {{ justifyContent: "center", padding: "10px"}}>
          <Col md = {7} style = {{ justifyContent: "center", paddingTop: "30px", paddingBottom: "50px"}}>
          <h1 style = {{ fontSize: "2.1em", paddingBottom: "20px"}}>
            Know Who <strong className = "purple">I'M</strong>
          </h1>
          <AboutCard/>
          </Col>

          <Col md = {5} style = {{ paddingTop: "120px", paddingBottom: "50px"}} className='about-img'>
          <img src={laptopImg} alt="about" className='img-fluid' />
          </Col>
        </Row>

        <h1 className = "project-heading">
          Professional <strong className='purple'> Skillset </strong>
          </h1>
          <Techstack/>
        <h1 className='project-heading'>
          <strong className='purple'>Tools</strong> I use
        </h1>
        <Toolstack/>

        <h1 className = "project-heading">
          My <strong className='purple'>Certifications</strong>
          </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <CertificationCard
              imgPath={servicenow}
              title="ServiceNow Certified Application Developer"
              description="Certified ServiceNow Application Developer with expertise in building custom applications, workflows, and integrations on ServiceNow platform."
              certLink="https://drive.google.com/file/d/1ACXLuVzTYU_Jq3hm2EgZkA7G8MEJFkvw/view?pli=1"
            />
          </Col>
          <Col md={4} className="project-card">
            <CertificationCard
              imgPath={servicenow}
              title="Servicenow Certified System Administrator"
              description="AWS Solutions Architect certification demonstrating skills in designing and deploying scalable applications on Amazon Web Services."
              certLink="https://drive.google.com/file/d/1hxbaAuIl-oCH29M4pSCs7E094zOu3Xfb/view"
            />
          </Col>
          <Col md={4} className="project-card">
            <CertificationCard
              imgPath={servicenow}
              title="Servicenow Certified Implimentation Specialist - IT service management"
              description="AWS Solutions Architect certification demonstrating skills in designing and deploying scalable applications on Amazon Web Services."
              certLink="https://drive.google.com/file/d/1UiAtV-9SHAzaWSrEGst0E5tVrt08PVxW/view?usp=drive_link"
            />
          </Col>
          <Col md={4} className="project-card">
            <CertificationCard
              imgPath={azure}
              title="Microsoft Azure Fundamentals"
              description="Advanced certification in modern JavaScript development including ES6+, async programming, and framework integration."
              certLink="https://learn.microsoft.com/en-us/users/ramjipal-8843/credentials/5dca68b4349d61e"
            />
          </Col>
        </Row>

      </Container>
    </Container>

  )
}

export default About
