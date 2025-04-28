import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
          Bonjour à tous, je suis <span className="purple">Aya Mtejjal, </span>
            <br />
            Je suis actuellement étudiante en deuxième année en Génie Logiciel à l’ENSIAS.
            <br />
            J’ai auparavant suivi deux années de classes préparatoires (MPSI-MP) au Lycée Technique Errazi à El Jadida.
            <br />
            <br />
            En dehors du codage, voici quelques activités que j’adore pratiquer :
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> DIY
            </li>
            <li className="about-activity">
              <ImPointRight /> les activités sociales
            </li>
            
          </ul>

          
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
