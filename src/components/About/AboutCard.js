import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Hitesh Agarwal </span>
            from <span className="purple"> Jaipur, Rajastha, India</span>
            <br />
            I am currently employed as a reasearch associate at Squark IP.
            <br />
            I have completed Bachelor of Technology (B.Tech) in Computer Science with Artificial Intelligence at Poornima University,
            Jaipur.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Photograghy
            </li>
            <li className="about-activity">
              <ImPointRight /> Trekking
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Hitesh </footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
