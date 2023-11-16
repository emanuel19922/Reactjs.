import React from 'react'
import Form from 'react-bootstrap/Form';
import { Link } from "react-router-dom";
import { getFirestore, collection, getDocs, query, where } from "firebase/firestore"
import { useState, useEffect } from "react";
import "../SearchInput/_Searchinput.scss"


const SearchInput = () => {

    const [filtrado, setfiltrado] = useState()
    const [datafirebase, setdatafirebase] = useState()
    const [input, setinput] = useState("")




    const getproduct = () => {

        const db = getFirestore()

        const querySnapshot = collection(db, 'miapp2')


        getDocs(querySnapshot)
            .then((response) => {
                const produts = response.docs.map((item) => {


                    return { id: item.id, ...item.data() }

                })
                setdatafirebase(produts)


            })
            .catch((error) => {
                console.log(error)
            })

    }


    //aca hago que el imput buscador  recoja el evento con changeopinput lo almacene en setinput luego hago una funcion liltrat que me filtra la informacion
    //de la base de datos si no existe (o con include que me verifica si si coinside lo que esta ingresando en el input ) me devuelve array vacio si no el elemnto filtrado
    //luego con window.addevenlistener veo cuando hace click(que me captura el div y le pone una clase que tiene display none )y despues lo remuevo con removelistener

    const changeofinput = (event) => {

        //a medidda que va escribiendo se lee en el input 
        setinput(event.target.value)
        filtrat(event.target.value)



    }

    const filtrat = (terminodebusqueda) => {

        const resultado = datafirebase.filter((data) => {


            if (data.title.toLocaleLowerCase().includes(terminodebusqueda)) {
                return data;
            }
        })
        setfiltrado(resultado)

    }

    // click cuando existe input seleciona el div le agrega una clase 
    const clickenobjeto = () => {

        const elemento = document.querySelector("#constainerul")

        if (elemento) {
            let div = document.createElement("div")
            div.className = "clasnamediv"
            elemento.appendChild(div)
            setinput("")
            window.removeEventListener("click", clickenobjeto)
        }

    }

    // aca validamos si hay evento y en caso de que haya se desata el window addd
    if (input) {
        window.addEventListener("click", clickenobjeto)

    }


    useEffect(() => {
        getproduct()


    }, [input])











    return (
        <div className=''>

            <Form className="d-flex flex-column"   >
                <Form.Control

                    type="text"

                    value={input}

                    placeholder="Search"

                    className="me-2"

                    aria-label="Search"

                    onChange={changeofinput}


                />







                {input &&

                    <div id="constainerul"  >
                        <div className='Container'>
                            {filtrado.map((e) => {
                                return (

                                    <ul key={e.id} className='Container_ulserach' >
                                        <li className='Container_ulserach_list'>
                                            <Link className='Container_ulserach_list_href' to={`/filter/${e.id}`} >
                                                <img className='Container_ulserach_list_href_img' src={`/Imagesid/${e.imageid}`} alt="" />

                                                <div className='Container_ulserach_list_href_div'>

                                                    <p className='Container_ulserach_list_href_div_title'>{e.title}</p>
                                                    <p className='Container_ulserach_list_href_div_price'>{e.price + "  " + "$"}</p>

                                                </div>
                                            </Link>
                                        </li>
                                    </ul>


                                )
                            })


                            }
                        </div>
                    </div>
                }


            </Form>

        </div>
    )
}

export default SearchInput

