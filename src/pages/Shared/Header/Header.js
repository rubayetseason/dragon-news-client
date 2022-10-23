import React, { useContext } from 'react';
import { Button, Image } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';
import LeftNav from '../LeftNav/LeftNav';
import { FaUser } from "react-icons/fa";

const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error))
    }
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className='mb-3'>
            <Container>
                <Navbar.Brand><Link to='/'>Dragon-News by Season</Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#features">All News</Nav.Link>
                        <Nav.Link>
                            {
                                user?.uid ?
                                    <>
                                        <span>{user?.displayName}</span>
                                        <Button onClick={handleLogOut} variant="outline-danger" size="sm" className='mx-3' >Log out</Button>
                                    </>
                                    :
                                    <>
                                        <Link className='mx-2' to='/login'><Button variant="outline-primary" size="sm">Login</Button></Link>
                                        <Link className='mx-2' to='/register'><Button variant="outline-primary" size="sm">Register</Button></Link>
                                    </>
                            }


                        </Nav.Link>
                        <Link to="/">
                            {user?.photoURL ?
                                <Image
                                    style={{ height: '35px' }}
                                    roundedCircle
                                    src={user?.photoURL}>
                                </Image>
                                : <FaUser></FaUser>
                            }
                        </Link>
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