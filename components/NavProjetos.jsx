import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavProjeto() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Novidades</Nav.Link>
            <Nav.Link href="#preços">Preços</Nav.Link>
            <Nav.Link href="#sobre">Sobre</Nav.Link>
            
          </Nav>
        </Container>
      </Navbar>
      <br />
     
    </>
  );
}

export default NavProjeto;