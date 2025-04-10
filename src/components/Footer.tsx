import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa'; 

interface FooterProps {
  hoverColor: string | null;
}

const Footer: React.FC<FooterProps> = ({ hoverColor }) => {

  return (
    <footer className="staydown text-center py-4">
      <Container>
        <Row>
          <Col className="d-flex justify-content-center">
            <a href="https://www.linkedin.com/in/mleotaylor/" target="_blank" rel="noopener noreferrer" className="mx-3">
              <FaLinkedin style={{ fontSize: '24px', color: hoverColor || '#646cff' }} />
            </a>
            <a href="https://github.com/leotaylor" target="_blank" rel="noopener noreferrer" className="mx-3">
              <FaGithub style={{ fontSize: '24px', color: hoverColor || '#646cff' }} />
            </a>
            <a href="mailto:leotaylor723@gmail.com" className="mx-3">
              <FaEnvelope style={{ fontSize: '24px', color: hoverColor || '#646cff' }} />
            </a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
