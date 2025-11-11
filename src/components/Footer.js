import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AiOutlineX } from 'react-icons/ai/';
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
}

from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row style={{justifyContent: "center"}}> 
        <Col md="3" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://github.com/MBrahim"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://x.com/M7amed_ebrahem"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiOutlineTwitter/>
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/mabrahim/"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
