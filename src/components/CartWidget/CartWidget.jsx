import React from 'react'


import { useContext, useState, useEffect } from "react";
import { Datacontex } from '../../Context/CartProvaider';
import { getFirestore, collection, getDocs, query, where, addDoc, doc, updateDoc, connectFirestoreEmulator } from "firebase/firestore"
import { clear } from '@testing-library/user-event/dist/clear';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import '../CartWidget/_CartWidget.scss'




export const CartWidget = () => {

  const { cart, addtocart, setcart } = useContext(Datacontex)
  const quantiticarts = cart.reduce((acc, element) => acc + element.quantiti, 0)



  //  acumulador del imput
  const [form, setform] = useState({
    name: "",
    phone: "",
    email: "",

  })


  const [oldcart, setoldcart] = useState()

  const gettotalprice = () => {

    setoldcart(cart.reduce((acc, product) => acc + product.price * product.quantiti, 0))

  }



  useEffect(() => {
    gettotalprice()
  }, [cart])

  // aca se genera la orden de compra

  const createorder = () => {
    const db = getFirestore();
    const query = collection(db, "order");
    const newoerder = {
      buyer: {
        name: form.name,
        phone: form.phone,
        email: form.email,

      },
      items: cart,
      total: oldcart,
    };
    addDoc(query, newoerder)
      .then((response) => {
        setcart([])
        setform(
          {
            name: "",
            phone: "",
            email: "",

          })
        alert("su compra fue finalizada con exito ")
        return (response)
      })
      .then((res) => {
        cart.forEach((product) => {
          const query = doc(db, 'items', product.id)
          updateDoc(query, {
            stock: product.stock - product.quantiti,
          }
          )

        })

      })
      .catch((error) => console.log(error))
  }
  // aca funcion para evento que captura el imput ...
  const handleinputchenge = (event) => {

    setform({
      ...form,
      [event.target.name]: event.target.value,
    });

  }
  const deletcarts = id => {
    const total = cart.filter(cart => cart.id !== id);
    setcart(total)
  }






  return (
    <div>
      <div className='containerproducts'>
        {

          cart.map((product) => (
            <Card style={{ width: '18rem' }} className='containerproducts_items' key={product.id}>
              <img className='ItemsProduct_images' src={`/imagesid/${product.imageid}`} alt="" />
              <Card.Title> Producto:{product.title} </Card.Title>
              <Card.Title>Precio: {product.price}$ </Card.Title>

              <Card.Title>Cantidad:{product.quantiti} </Card.Title>


              <Card.Title>Color:  {product.color} </Card.Title>


              <Button variant="outline-dark" onClick={() => deletcarts(product.id)}>Eliminar  </Button>

            </Card>
          )
          )
        }


      </div>
      <div >
        <h1>total a pagar:{oldcart}</h1>
        <h1>cantidad de productos: { quantiticarts}</h1>
      </div>
      <div className=' containerproducts_forms'>
        <input onChange={handleinputchenge} name='name' type="text" placeholder='nombre' value={form.name}></input>
        <input onChange={handleinputchenge} name='phone' type="text" placeholder='phone' value={form.phone}></input>
        <input onChange={handleinputchenge} name='email' type="text" placeholder='email' value={form.email}></input>


        <div>


          <Button variant="secondary" size="lg" onClick={createorder}>Enviar  </Button>

        </div>
      </div>
    </div>
  )

}


export default CartWidget;