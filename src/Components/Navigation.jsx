import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Navigation.css";

export default function Navigation(props) {
  return (
    <Navbar variant="dark">
      <Container>
        <Navbar.Brand href="#home">Abhi Setia - Full-Stack Developer </Navbar.Brand>
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text className="links" onClick={() => {props.onClick('portfolio')}}>
            Portfolio &nbsp; &nbsp;
          </Navbar.Text>
          <Navbar.Text className="links" onClick={() => {props.onClick('about')}}>
             About &nbsp; &nbsp;
          </Navbar.Text>
          <Navbar.Text className="links" onClick={() => {props.onClick('contact')}}>
            Contact
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}