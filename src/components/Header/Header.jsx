import React from "react";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import ImageLogo from "../../assets/ImageLogo/ImageLogo";
import logocarrito from '../../assets/navimage-shipments.png'
import { useContext } from "react";
import { Datacontex } from '../../Context/CartProvaider';
import HeaderNavlink from "../HeaderNavlink/NavarItemsDeProducts";
import insta from '../../assets/Instagram.png'
import envios from '../../assets/4230551-delivery-shipping-time_115018.png'
import tel from '../../assets/phone-handset_icon-icons.com_48252.png'
import ubi from '../../assets/3586361-location-map-navigation-pointer_107948.png'
import { Link } from 'react-router-dom'
import SearchInput from "../SearchInput/SearchInput";
import { useState, useEffect } from "react";
import './_Header.scss';





function Header() {

  const { cart, addtocart } = useContext(Datacontex)

  const quantiticarts = cart.reduce((acc, element) => acc + element.quantiti, 0)





  return (
    <div>
      <div className="info">
        <div className="info-top-info">
          <Link className="info-top-info-link" rel="stylesheet" href="">
            <img className="info-top-info-img" src={insta} alt="" />
            <i className="info-top-info-img-i">Instagram</i>
          </Link>
          <Link className="info-top-info-link" rel="stylesheet" href="">
            <img className="info-top-info-img" src={ubi} alt="" />
            <i className="info-top-info-img-i">Ver locales</i>
          </Link>

          <Link className="info-top-info-link" rel="stylesheet" href="">
            <img className="info-top-info-img" src={envios} alt="" />
            <i className="info-top-info-img-i">Envios a todo el pais</i>
          </Link>

        </div>
        <div>
          <Link className="info-top-info-link" rel="stylesheet" href="">
            <img className="info-top-info-img" src={tel} alt="" />
            <i className="info-top-info-img-contac">Contactanos</i>
          </Link>
        </div>
      </div>


      <Navbar bg="light" collapseOnSelect expand="lg" className="flex-column">
        <Container className="justify-content-center justify-content-sm-between">
          {/* aca  esta la imagen importada de cartwidget */}
          <Navbar.Brand as={Link} to='/'> <ImageLogo /> </Navbar.Brand>

          < SearchInput />


          <div className="shopingcartdiv">
            <Link to='/CartWidget'>
              <img className='navigation-logo' src={logocarrito} alt="" />

            </Link>
            <h5>{cart.length > 0 && quantiticarts} </h5>
          </div>

        </Container>


      </Navbar>
      <HeaderNavlink />
    </div>

  );
}

export default Header;