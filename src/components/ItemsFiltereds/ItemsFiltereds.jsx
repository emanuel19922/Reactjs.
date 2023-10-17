import './_items.scss'
import { useState,useContext } from 'react'
import { Link } from 'react-router-dom'
import { Datacontex } from '../../Context/CartProvaider'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';



const ItemsFiltereds = ({ produs }) => {

  const { cart, addtocart } = useContext(Datacontex)


  const [contador, setcontador] = useState(1)



  return (


      <div className='ItemsProduct '>

        <Link className='ItemsProduct_link' to={`/filter/${produs.id}`}>
          <Card.Img variant="top"  src={`/Imagesid/${produs.imageid}`} alt="" />
          <div className='ItemsProduct_contai'>
          <ListGroup   className='ItemsProduct_contai_title' >   {produs.title} </ListGroup>
          <ListGroup className='ItemsProduct_contai_Items'>Precio: <p className='ItemsProduct_contai_Items_price'>{produs.price} </p>  $</ListGroup>
          <ListGroup.Item className='ItemsProduct_contai_Items'> Color: {produs.color} </ListGroup.Item>
          <ListGroup.Item className='ItemsProduct_contai_Items'> Productos en stock: {produs.stock} </ListGroup.Item>
          </div>

        </Link>


      </div>
   




  )
  }

export default ItemsFiltereds