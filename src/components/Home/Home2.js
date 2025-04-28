import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
            LAISSEZ-MOI <span className="purple"> ME  </span> PRÉSENTER
            </h1>
            <p className="home-about-body">
            Je suis tombée amoureuse de la programmation et, au fil du temps, j’ai beaucoup appris… du moins, je l’espère ! 🤷‍♀️
              <br />
              <br />Je maîtrise plusieurs langages classiques tels que 
              <i>
                <b className="purple"> Java, JavaScript et Python. </b>
              </i>
              <br />
              <br />
              Je m'intéresse particulièrement à la création de &nbsp;
              <i>
                <b className="purple">nouvelles technologies et produits web </b> ainsi qu'aux domaines liés à{" "}
                <b className="purple">
                l'intelligence artificielle et aux systèmes distribués.
                </b>
              </i>
              <br />
              <br />
              Dès que possible, j'aime appliquer ma passion en développant des produits avec <b className="purple">Node.js</b> and
              <i>
                <b className="purple">
                  {" "}
                  et des bibliothèques et frameworks modernes 
                </b>
              </i>
              &nbsp; tels que
              <i>
                <b className="purple"> React.js and Next.js</b>
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
          <Col md={12} className="home-about-social">
            <h1>Retrouvez-moi sur</h1>
            <p>
            N'hésitez pas <span className="purple">à me </span>contacter
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/ayamte"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
             
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/aya-mtejjal-5b14a8284/"
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
  );
}
export default Home2;
