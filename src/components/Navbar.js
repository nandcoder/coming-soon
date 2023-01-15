import { Container, Nav, Navbar } from 'react-bootstrap';

function CollapsibleExample({ setPage }) {
    const pages = ['Home', 'About Us', 'Contact'];
    return (
        <Navbar collapseOnSelect expand="lg" bg="success" variant="dark">
            <Container>
                <Navbar.Brand href='/'>NRJ</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav fill variant="pills" className="me-auto" defaultActiveKey="/Home">
                        {pages.map((page) => (
                            <Nav.Link
                                href={`/${page}`}
                                key={page}
                                onClick={() => { setPage(page) }}
                            >
                                {page}
                            </Nav.Link>
                        ))}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default CollapsibleExample;