import "bootstrap/dist/css/bootstrap.min.css"; 
import { useState } from "react";
import { Container, Nav, Navbar, Row, Col } from "react-bootstrap";

import Products from "./components/Products";
import data from '../public/data.js'
import "./App.css";

function App() {
  const [shoes, setShoes] = useState(data);
  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Shop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">OUR STORY</Nav.Link>
					  <Nav.Link href="#about">찾아오시는길</Nav.Link>
            <Nav.Link href="#cart">Cart</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    
      <div className="main-bg"></div>
      <Container className="product">
       <Row xs={2} md={3}>
          {shoes.map((item) => (
            <Products key={item.id} item={item} />
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default App;