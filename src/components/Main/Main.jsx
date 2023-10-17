
import Carousel from 'react-bootstrap/Carousel';
import imagefirst from '../../assets/ImageCaruselone.jpg'
import imagesecond from '../../assets/ImageCaruselTwo.jpg'
import Card from 'react-bootstrap/Card';
import instagram from '../../assets/Instagram.png'
import imagetree from '../../assets/ImageCaruselTree.jpg'
import '../Main/_Main.scss'
import { Col, Container, Row } from 'react-bootstrap';
import imgicons1 from '../../assets/ico-services-01.png'
import imgicons2 from '../../assets/ico-services-02.png'
import imgicons3 from '../../assets/ico-services-03.png'
import imgicons4 from '../../assets/ico-services-04.png'
import imagenproducts1 from '../../assets/banner-home-panales.jpg'
import imagenproducts2 from '../../assets/banner-home-leches.jpg'
import imagenproducts3 from '../../assets/banner-home-accesorios.jpg'




function Main() {
  return (
    <div>
      <div className='carouseldiv'>
        <div className='carouseldiv_container'>
          <Carousel  >

            <Carousel.Item >
              <img
                className="carouseldiv_container_imagecarrusel "
                src={imagefirst}
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="carouseldiv_container_imagecarrusel "
                src={imagesecond}
                alt="Second slide"
              />

              <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="carouseldiv_container_imagecarrusel "
                src={imagetree}
                alt="Third slide"
              />

              <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                </p>
              </Carousel.Caption>
            </Carousel.Item>

          </Carousel>
        </div>
      </div>

      <Container className='containercol'>
        <Row className='colproduct'>
          <Col className='colproduct_envios' md={3}  >
            <div><img className='colproduct_img' src={imgicons1} alt="" /></div>
            <div className='text'>Envios a   <span>Todo el Pais</span></div>
          </Col>
          <Col className='colproduct_cuotas' md={3}>
            <div><img className='colproduct_img' src={imgicons2} alt="" /></div>
            <div className='text'>Cuotas   <span>Sin interes</span></div>
          </Col>
          <Col className='colproduct_retiro' md={3}>
            <div><img className='colproduct_img' src={imgicons3} alt="" /></div>
            <div className='text'>Retiro Gratis  <span>En Sucursales</span></div>
          </Col>
          <Col className='colproduct_compra' md={3}>
            <div><img className='colproduct_img' src={imgicons4} alt="" /></div>
            <div className='text'>Compra 100% <span>Segura</span></div>
          </Col>



        </Row>


      </Container>

      <div className='cards'>

        <Card className='cards_cart'>
          <Card.Img variant="top" src={imagenproducts1} />
          <Card.Body style={{ height: '3rem', }}>
            <Card.Title>Pañales +</Card.Title>


          </Card.Body>
        </Card>
        <a href="">
          <Card className='cards_cart' >
            <Card.Img variant="top" src={imagenproducts2} />
            <Card.Body style={{ height: '3rem', }} >
              <Card.Title>Card Title</Card.Title>


            </Card.Body>
          </Card>
        </a>

        <Card className='cards_cart'>
          <Card.Img variant="top" src={imagenproducts3} />
          <Card.Body style={{ height: '3rem', }}>
            <Card.Title>Accesorios</Card.Title>


          </Card.Body>
        </Card>









      </div>
      <div className='containstagram'>

        <a className='containstagram_href' href="https://www.noninoni.com.ar/">
          <img className='containstagram_href_img' src={instagram} alt="" />

          @NONINOINSTAGRAM</a>

      </div>


    </div>

  );
}

export default Main;
