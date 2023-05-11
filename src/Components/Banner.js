import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import "./Banner.css";
const Banner = () => {
  return (
    <Navbar className="banner" expand="lg">
      <Container>
        <Navbar.Brand className="banner-brand" href="#home">
          React Test App
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
      </Container>
    </Navbar>
  );
};

export default Banner;
