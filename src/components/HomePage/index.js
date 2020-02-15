import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const HomePage = (props) => {

  return (
    <div  >
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">
          Table test task
        </Navbar.Brand>
      </Navbar>
      <Container fluid className={'home-page-main'}>
        <Row>
          <Col></Col>
          <Col xs={6}>{props.children}</Col>
          <Col></Col>
        </Row>
      </Container>
    </div>
  )
};
export default HomePage