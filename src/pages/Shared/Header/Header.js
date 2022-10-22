import React, { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';
import LeftNav from '../LeftNav/LeftNav';

const Header = () => {
    const {user} = useContext(AuthContext);
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className='mb-3'>
            <Container>
                <Navbar.Brand><Link to='/'>Dragon-News by Season</Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#features">All News</Nav.Link>
                        <Nav.Link href="#pricing">{user?.displayName}</Nav.Link>
                    </Nav>
                    <Nav>
                    </Nav>
                    <div className='d-lg-none'>
                        <LeftNav></LeftNav>
                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;