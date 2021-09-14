import React from 'react';

import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import LinkContainer from 'react-router-bootstrap/lib/LinkContainer';
import './NavBar.scss';

const NavBar = () => {
  const navBarItems = [
    {
      id: 'home',
      title: 'Home',
      linkTo: '/',
    },
    {
      id: 'blogs',
      title: 'Blogs',
      linkTo: '/blogs',
    },
    {
      id: 'projects',
      title: 'Projects',
      linkTo: '/projects',
    },
  ];

  return (
    <Navbar className='nav-bar shadow py-4' expand='md'>
      <Container>
        <Navbar.Brand>Ismail El Shinnawy</Navbar.Brand>
        <Navbar.Toggle aria-controls='navbar-nav' />
        <Navbar.Collapse id='navbar-nav'>
          <Nav className='ms-auto mt-4 mt-md-0'>
            {navBarItems.map(navBarItem => (
              <LinkContainer
                key={`${navBarItem.id}_nav_item`}
                to={navBarItem.linkTo}
                exact
              >
                <Nav.Link className='px-4 rounded'>{navBarItem.title}</Nav.Link>
              </LinkContainer>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
