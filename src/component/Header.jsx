import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <>

            <Navbar className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand >

                        <Link className='fw-bolder text-primary' to={'/'} style={{textDecoration:"none"}}>

                         <i class="fa-solid fa-people-group fa-flip"></i>

                          EMS-APPLICATION
                        
                        </Link>

                   

                    </Navbar.Brand>
                </Container>
            </Navbar>

        </>
    )
}

export default Header