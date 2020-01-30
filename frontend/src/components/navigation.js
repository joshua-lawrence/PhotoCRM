import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

class Navigation extends React.Component {
    render() {
        return (
            <div>            
                <Navbar>
                    <Navbar.Brand className="logo" href="/">avenue</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                    <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                        <Nav>
                            <Nav.Item><Nav.Link href="/customers">Customers</Nav.Link></Nav.Item>
                            <Nav.Item><Nav.Link href="/jobs">Jobs</Nav.Link></Nav.Item>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
                <hr />
            </div>

        )
    }
}
export default Navigation;