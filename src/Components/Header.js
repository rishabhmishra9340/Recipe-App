import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import { useNavigate } from 'react-router-dom'
import Nav from 'react-bootstrap/Nav'
import { NavLink } from 'react-router-dom'

const Header = () => {
    const history = useNavigate();

    const userlogout = () => {
        localStorage.removeItem("user_login")
        history("/");
    }

    return (
        <>
            <Navbar bg="dark" variant="dark">
               
                <Container>
                    <Nav className="me-auto">
                        <NavLink to="/" className="text-decoration-none text-light mx-2" style={{margin:"5px"}}>Home</NavLink>
                        <p onClick={userlogout} style={{color:"#ffffff" ,cursor:'pointer',margin:"5px" ,border:"1px solid #ffffff",padding:"4px",borderRadius:"4px"}}>Logout</p>
                    </Nav>
                   
                </Container>
              
            </Navbar>
           
        </>
    )
}

export default Header