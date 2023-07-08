import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';

function Navigation() {
    return (
        <Navbar expand='lg' className="bg-white mb-3" sticky="top" >
            <Container fluid>
                <Navbar.Brand href="#" as="h1">Clubsify</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Offcanvas placement="end">
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title>
                            Clubsify
                        </Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <Nav className="justify-content-end flex-grow-1 pe-3">
                            <Nav.Link href="#action1">Home</Nav.Link>
                            <Nav.Link href="#action2">Clubs</Nav.Link>
                            <Button variant="outline-primary">Sign out </Button>
                        </Nav>
                    </Offcanvas.Body>
                </Navbar.Offcanvas>
            </Container>
        </Navbar>
    );
}
export default Navigation;