import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Navigation.css";

export default function Navigation() {
  return (
    <Navbar variant="dark">
      <Container>
        <Navbar.Brand className='footer' href="mailto:abhisetia0@gmail.com">© 2020. Made by Abhi Setia </Navbar.Brand>
        <Navbar.Collapse className="justify-content-end">
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}