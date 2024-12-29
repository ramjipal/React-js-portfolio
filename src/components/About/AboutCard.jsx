import React from 'react'
import Card from 'react-bootstrap/Card';
import { ImPointRight } from 'react-icons/im';

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            HI Everyone, I am <span className="purple">Ramji Pal</span>
            from <span className="purple"> Nagpur, Maharashtra,India.</span>
            <br />
            I have completed my B.Tech graduation from YCCE Nagpur in
            Information Technology and Engineering.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching web series
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading Tech Blogs
            </li>
          </ul>

          <p>"Code with passion, and let your work drive progress!"{" "}</p>
          <footer className="blockquote-footer">Ramji Pal</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard
