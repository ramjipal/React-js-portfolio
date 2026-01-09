import React from 'react'
import Card from 'react-bootstrap/Card';
import { ImPointRight } from 'react-icons/im';

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi, I'm <span className="purple">Ramji Pal</span>, a ServiceNow Developer with nearly 2 years of experience delivering ITSM solutions, custom ServiceNow applications, and secure integrations. I hold a B.Tech in Information Technology from YCCE Nagpur.
            <br />
            <br />
            I work extensively with <span className="purple">ITSM</span>, <span className="purple">Flow Designer</span>, <span className="purple">Service Catalog</span>, <span className="purple">REST integrations</span>, and <span className="purple">Service Portal/UI development</span>, and I'm actively exploring <span className="purple">Now Assist</span> and <span className="purple">ServiceNow AI Agents</span> to drive intelligent automation and improve service efficiency. My background in full-stack development supports strong integration design and clean, user-centric solutions.
            <br />
            <br />
            Outside of work, I enjoy playing games, watching web series, and keeping up with tech blogs.
            <br />
            <br />
            — Ramji Pal
          </p>
                  </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard
