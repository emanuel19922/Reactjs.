import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import React from 'react'
import Accordion from 'react-bootstrap/Accordion';

import Button from 'react-bootstrap/Button';

import { Link } from 'react-router-dom';

import './_NavarItemsDeProducts.scss'
import imagebebe from '../../assets/iconsimagebebe.png'
import imagebebe2 from '../../assets/image_bebe2.png'

import { useContext } from "react";
import { Datacontex } from '../../Context/CartProvaider';
import NavDropdown from 'react-bootstrap/NavDropdown';






import Form from 'react-bootstrap/Form';



import Offcanvas from 'react-bootstrap/Offcanvas';










const HeaderNavlink = () => {




    return (


        <div className='divlistnavegable  ' >



            <div className='navardivcontainer '>



                <Navbar collapseOnSelect expand="lg" className="flex-column">
                    <Container  >
                        {/* aca  esta la imagen importada de cartwidget */}

                        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-`} />
                        <Navbar.Offcanvas
                            id={`offcanvasNavbar-expand-`}
                            aria-labelledby={`offcanvasNavbarLabel-expand-`}
                            placement="end"
                        >
                            <Offcanvas.Header closeButton>
                                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-`}>
                                    Offcanvas
                                </Offcanvas.Title>
                            </Offcanvas.Header>
                            <Offcanvas.Body >
                                <Nav className="justify-content-center flex-grow-1 pe-3 "  >

                                    <ul className=" navul  " >
                                        <li >
                                            <div className='divimgelogo'>
                                                <img className='divimgelogo_img' src={imagebebe} alt="" />
                                                <Link to='/' > Pañeles </Link>
                                            </div>

                                            <ul className='Ullistproducts'>

                                                <li className='Ullistproducts_list' >

                                                    <Link to='/product/babysec' className='Ullistproducts_href'> Babysec  </Link>
                                                </li>
                                                <li className='Ullistproducts_list'>
                                                    <Link to='/product/pampers' className='Ullistproducts_href'>   Pampers  </Link>
                                                </li>

                                            </ul>
                                        </li>


                                        <li >

                                            <div className='divimgelogo'>
                                                <img className='divimgelogo_imgtwo' src={imagebebe2} alt="" />
                                                <Link to='/' > Vasos </Link>
                                            </div>

                                            <ul className='Ullistproducts'>

                                                <li className='Ullistproducts_list' >

                                                    <Link to='/product/vasoplastico' className='Ullistproducts_href'> Vasoplastico </Link>
                                                </li>
                                                <li className='Ullistproducts_list'>

                                                    <Link to='/product/avent' className='Ullistproducts_href'> Vaso Avent </Link>
                                                </li>

                                            </ul>

                                        </li>






                                        <li >
                                            <div className='divimgelogo'>
                                                <img className='divimgelogo_img' src={imagebebe} alt="" />
                                                <Link to='/' > Pañeles </Link>
                                            </div>

                                            <ul className='Ullistproducts'>

                                                <li className='Ullistproducts_list' >

                                                    <Link to='/product/babysec' className='Ullistproducts_href'> Babysec  </Link>
                                                </li>
                                                <li className='Ullistproducts_list'>
                                                    <Link to='/product/pampers' className='Ullistproducts_href'>   Pampers  </Link>
                                                </li>

                                            </ul>
                                        </li>












                                    </ul>



                                </Nav>

                            </Offcanvas.Body>
                        </Navbar.Offcanvas>



                    </Container>


                </Navbar>


            </div>

            <div className='navhamburguesaitems'>



                <Navbar bg="light" expand="lg">
                    <Container>

                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link href="#home">



                                    <Accordion defaultActiveKey="1" className='w-100 mt-10'>

                                        <Accordion.Header>  <a href="" className="navhamburguesaitems_hrefa"> Pañeles  </a>  </Accordion.Header>

                                        <Accordion.Body >
                                            <ul className='navhamburguesaitems_ullisthamburguer'>

                                                <li className='navhamburguesaitems_ullisthamburguer_li' >
                                                    <Link to='/product/babysec' className='navhamburguesaitems_ullisthamburguer_li_a'> Babysec  </Link>
                                                </li>
                                                <li className='navhamburguesaitems_ullisthamburguer_li'>
                                                    <Link to='/product/pampers' className='navhamburguesaitems_ullisthamburguer_li_a'>   Pampers  </Link>
                                                </li>

                                            </ul>
                                        </Accordion.Body>


                                        <Accordion.Item eventKey="0">
                                            <Accordion.Header>  <a href="" className="navhamburguesaitems_hrefa"> Pañeles  </a>  </Accordion.Header>

                                            <Accordion.Body >
                                                <ul className='navhamburguesaitems_ullisthamburguer'>

                                                    <li className='navhamburguesaitems_ullisthamburguer_li' >
                                                        <Link to='/product/vasoplastico' className='navhamburguesaitems_ullisthamburguer_li_a'> Vasoplastico </Link>
                                                    </li>
                                                    <li className='navhamburguesaitems_ullisthamburguer_li'>
                                                        <Link to='/product/avent' className='navhamburguesaitems_ullisthamburguer_li_a'> Vaso Avent </Link>
                                                    </li>

                                                </ul>
                                            </Accordion.Body>

                                        </Accordion.Item>

                                    </Accordion>





                                </Nav.Link>

                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>



            </div>





        </div>








    )
}

export default HeaderNavlink