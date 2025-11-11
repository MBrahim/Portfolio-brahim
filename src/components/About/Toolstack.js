import React from "react";
import { Col, Row } from "react-bootstrap";
import macOs from "../../Assets/TechIcons/Apple MacOSX.svg";
import chrome from "../../Assets/TechIcons/Google Chrome.svg";
import vsCode from "../../Assets/TechIcons/vscode.svg";
import Altium from "../../Assets/TechIcons/Altium.svg";
import KiCadLogo from "../../Assets/TechIcons/KiCadLogo.png";
import Pspice from "../../Assets/TechIcons/Pspice.png";
import intelliJ from "../../Assets/TechIcons/intellij-idea.svg";
import { SiMultisim } from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={5} md={2} className="tech-icons ">
        <img src={Altium} alt="Altium Designer" className="tech-icon-images" />
        <div className="tech-icons-text">Altium</div>
      </Col>
      <Col xs={5} md={2} className="tech-icons">
        <img src={KiCadLogo} alt="KiCad" className="tech-icon-images" />
        <div className="tech-icons-text">KiCad</div>
      </Col>
      <Col xs={5} md={2} className="tech-icons ">
        <img src={Pspice} alt="Pspice For TI" className="tech-icon-images" />
        <div className="tech-icons-text">Pspice For TI</div>
      </Col>
      <Col xs={5} md={2} className="tech-icons ">
        <img src={vsCode} alt="vsCode" className="tech-icon-images" />
        <div className="tech-icons-text">VS Code</div>
      </Col>
      <Col xs={5} md={2} className="tech-icons ">
        <SiMultisim color="#4C52A0" alt="Multisim" className="tech-icon-images" />
        <div className="tech-icons-text">Multisim</div>
      </Col>

    </Row>
  );
}

export default Toolstack;
