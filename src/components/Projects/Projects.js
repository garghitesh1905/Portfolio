import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import portfolio from "../../Assets/Projects/portfolio.png";
import spamham from "../../Assets/Projects/spam_ham.png";
import musicPlayer from "../../Assets/Projects/musicPlayer.jpg";

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
            <ProjectCard
              imgPath={spamham}
              isBlog={false}
              title="Spam-Ham Classifier"
              description="A Spam-Ham Classifier using Natural Language Processing (NLP) is a machine learning model designed to categorize messages as either spam (unwanted) or ham (legitimate). It analyzes the content of messages, leveraging techniques like tokenization, text vectorization, and classification algorithms (e.g., Naive Bayes or SVM) to differentiate between the two classes based on learned patterns."
              ghLink="https://github.com/garghitesh1905/SMS_Spam_classifier"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={musicPlayer}
              isBlog={false}
              title="Python Music Player"
              description="A Tkinter Music Player is a simple, GUI-based application built using Python's Tkinter library for playing audio files. It provides a user-friendly interface with features like play, pause, stop, and volume control, allowing users to manage and enjoy their music directly from the app."
              ghLink="https://github.com/garghitesh1905/Python-music-player"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={portfolio}
              isBlog={false}
              title="Personal Portfolio"
              description="A personal portfolio built using React.js is a dynamic, responsive web application showcasing an individual's skills, projects, and experiences. It leverages React's component-based architecture for smooth navigation, interactive features, and seamless content updates, offering an engaging way to present a developer's professional profile."
              ghLink="https://gi thub.com/soumyajit4419/Editor.io"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
