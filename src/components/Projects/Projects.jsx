import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import ProjectCards from "./ProjectCards";
import expense from "../../Assets/Projects/expense.png";
import movie from "../../Assets/Projects/movie.png";
import udemy from "../../Assets/Projects/udemy.png";
import pong_game from "../../Assets/Projects/ping-pong.png";
import calculator from "../../Assets/Projects/calculator.png";
function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCards
              imgPath={expense}
              isBlog={false}
              title="Expense Management and forecasting system"
              description="A Django-based Expense Management System with an interactive Chart.js dashboard, machine learning for expense forecasting, secure user authentication, AJAX-powered search, and PostgreSQL for reliable data management."
              ghLink="https://github.com/ramjipal/expense_management_and_forecasting_system"
              demoLink="https://www.youtube.com/watch?v=MFXV4T8wdDI"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCards
              imgPath={movie}
              isBlog={false}
              title="Movie Recommendation System"
              description="It is a content-based Movie Recommendation System that uses machine learning to suggest movies based on user preferences, achieving 98% accuracy. The web app, built with Streamlit, features API integration for dynamic movie posters and ensures multi-device accessibility."
              ghLink="https://github.com/ramjipal/movie_recommender"
              demoLink="https://movierecommender-contentbased.streamlit.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCards
              imgPath={udemy}
              isBlog={false}
              title="FREE Udemy Courses Extractor"
              description="Udemy Free Courses Extractor is a Python script that provides direct links to all free Udemy courses, making it easy to access and start learning. It is simple to set up, user-friendly, and works both locally and on Replit, catering to anyone looking to upskill without spending money."
              ghLink="https://github.com/ramjipal/udemy-free-courses-extractor/tree/main"
              demoLink="https://replit.com/@RamjiPal1/pythonextractor#main.py"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCards
              imgPath={pong_game}
              isBlog={false}
              title="Hand Detection-Enabled Ping Pong Game"
              description={`This Python ping pong game uses OpenCV and cvzone for real-time hand tracking via a webcam. Players control paddles with hand movements, and the ball reacts dynamically to collisions. The game features custom graphics, score tracking, and a "Game Over" screen. It showcases AI-driven interactivity and computer vision in gaming.`}
              ghLink="https://github.com/ramjipal/Hand-detection-enabled-ping-pong-game"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCards
              imgPath={calculator}
              isBlog={false}
              title="Calculation Template Maker"
              description={`A web-based application that empowers users to create, customize, and save personalized calculation templates with real-time result updates. Built with a responsive frontend using HTML, CSS, and JavaScript, a robust backend powered by Python and Flask, and MySQL for seamless data storage and management.`}
              ghLink="https://github.com/ramjipal/personalizedCalculator"
              demoLink="https://ramjipal.pythonanywhere.com/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
