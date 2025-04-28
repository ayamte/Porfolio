import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import astrompa from "../../Assets/Projects/astrompa.png";
import PFA from "../../Assets/Projects/PFA.png";
import SI from "../../Assets/Projects/SI.png";
import stage from "../../Assets/Projects/stage.png";
import TaskManager from "../../Assets/Projects/Task-manager.jpg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
        Mes réalisations <strong className="purple">récentes </strong>
        </h1>
        <p style={{ color: "white" }}>
        Voici quelques projets sur lesquels j'ai travaillé récemment.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={stage}
              isBlog={false}
              title="Application web de gestion du service client"
              description="Création d’un système de gestion des demandes clients via un chatbot intelligent, incluant un tableau de bord pour
 les agents du support."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={SI}
              isBlog={false}
              title="Application web de gestion des stages"
              description="Digitalisation du processus de suivi des stages entre les étudiants, les entreprises et les enseignants responsables."
             
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={TaskManager}
              isBlog={false}
              title="Application mobile intelligente de gestion de tâches"
              description="Création d’une to-do list intelligente avec priorisation automatique via IA, notifications intelligentes, et intégration
 Google Agenda."
                       
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={astrompa}
              isBlog={false}
              title="AstroMap–Plateforme interactive d’exploration spatiale"
              description="Application web éducative et immersive pour l’exploration du système solaire en 3D."

            />
          </Col>

         

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={PFA}
              isBlog={false}
              title="Application de gestion des emplois et compétences."
              description="Gestion efficace des ressources humaines et optimisation de la productivité."
        
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
