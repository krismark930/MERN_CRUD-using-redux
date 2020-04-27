import React from 'react'
import { Navbar,
    Nav,NavItem,NavbarBrand,Container
 } from 'reactstrap';
import { Link } from 'react-router-dom';

export const Heading = () => {

    return (
        <Navbar color="dark shadow-lg" dark>
           <Container>
               <NavbarBrand href="/"><i className="fas fa-bong mr-2"></i>Team Ganza </NavbarBrand>
               <Nav>
                   <NavItem>
                       <Link to="/add" className="btn btn-info rounded-pill text-center"><i className="fas fa-plus-circle mr-2 "></i>ADD MEMBER</Link>
                   </NavItem>
               </Nav>
           </Container>
        </Navbar>
    )
}
