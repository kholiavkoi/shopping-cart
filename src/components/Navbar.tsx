import React from 'react';
import { Button, Container, Nav, Navbar as NavbarBs } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { useShoppingCart } from "../context/ShoppingCartContext";

const Navbar = () => {
    const { cartQuantity, openCart } = useShoppingCart()


    return (
        <NavbarBs sticky='top' className='bg-white shadow-sm mb-3'>
            <Container>
                <Nav>
                    <Nav.Link to='/' as={NavLink}>Home</Nav.Link>
                    <Nav.Link to='/store' as={NavLink}>Store</Nav.Link>
                    <Nav.Link to='/about' as={NavLink}>About</Nav.Link>
                </Nav>
                {
                    cartQuantity ?
                        <Button onClick={openCart} style={{ width: '3rem', height: '3rem', position: 'relative' }}
                                variant='outline-primary'
                                className='rounded-circle'>
                            <svg style={{ width: '20px', height: '20px' }} height="512px" id="Layer_1" version="1.1"
                                 viewBox="0 0 512 512" width="512px" xmlSpace="preserve"
                                 xmlns="http://www.w3.org/2000/svg"
                                 xmlnsXlink="http://www.w3.org/1999/xlink">
                                <g id="PL_x5F_Cart_1_">
                                    <path
                                        d="M441,416c0,13.8-11.2,25-25,25s-25-11.2-25-25s11.2-25,25-25S441,402.2,441,416z" />
                                    <path
                                        d="M153,416c0,13.8-11.2,25-25,25s-25-11.2-25-25s11.2-25,25-25S153,402.2,153,416z" />
                                    <path
                                        d="M127.9,96l-11.1-32H64v17h41.7l57.5,213.3c-32.4,11.3-59.9,37.9-65.3,73.1C96,379.1,96,384,96,384h352v-16.7H115.3   c4.7-31.6,38.8-58.1,74.1-62.5s243.3-34.2,243.3-34.2L448,96H127.9z M416,256l-235,33.3c-0.9,0.2-1.8,0.4-2.7,0.6l-44.7-177.3   h297.7L416,256z" />
                                </g>
                            </svg>

                            <div
                                style={{
                                    color: 'white',
                                    width: '1.5rem',
                                    height: '1.5rem',
                                    position: 'absolute',
                                    bottom: 0,
                                    right: 0,
                                    transform: 'translate(25%, 25%)'
                                }}
                                className='rounded-circle bg-danger d-flex justify-content-center align-items-center'>
                                {cartQuantity}
                            </div>


                        </Button>
                        : ''
                }
            </Container>
        </NavbarBs>
    );
};

export default Navbar;