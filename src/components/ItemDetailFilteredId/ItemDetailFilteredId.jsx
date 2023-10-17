import Button from 'react-bootstrap/Button';
import { useState, useContext } from 'react'
import { Datacontex } from '../../Context/CartProvaider'
import Card from 'react-bootstrap/Card';
import CountComponent from '../CountComponent/CountComponent';
import './_itemes.scss'



const ItemDetailFilteredId = ({ productid }) => {



  const { cart, addtocart } = useContext(Datacontex)

  const [contador, setcontador] = useState(1)




  return (

    <div className='itemsdetail'>
      <div>
        <img className='itemsdetail_img' src={`/Imagesid/${productid.imageid}`} alt="" />

      </div>
      <div className="ItemsProduct">


        <div className='contaideitems'>
          <h6 className='contaideitems_Items'>precio: <p className='ItemsProduct_Items_itm'>{productid.price}</p>   $   </h6>
          <h6 className='contaideitems_Items'> color :    <p className='ItemsProduct_Items_itm'>{productid.color}</p></h6>
          <h6 className='contaideitems_Items'>Productos en stock:{productid.stock}</h6>

          <h6 className='contaideitems-text'> No dudes en hacer tu compra los mejores productos  </h6>
          <h5>{contador}</h5>
        </div>


        <CountComponent setcontador={setcontador} contador={contador} />

        <Button variant="outline-dark" onClick={() => { addtocart(productid, contador) }}>enviar</Button>


      </div>
    </div>
  )
}

export default ItemDetailFilteredId