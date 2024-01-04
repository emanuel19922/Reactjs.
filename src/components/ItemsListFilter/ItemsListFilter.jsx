import React from 'react'
import { useEffect, useState } from "react";
import ItemFilterMap from '../ItemFilterMap/ItemFilterMap';
import './_ItemsListContaine.scss'
import { useParams } from 'react-router-dom';
import { getFirestore, collection, getDocs, query, where } from "firebase/firestore"



const ItemsListFilter = (props) => {

    const [product, setproduct] = useState([])


    //   aca estamos llamando al categoriname que esta en app.js en el link
    const { categoriName } = useParams();


    const getproduct = () => {

        const db = getFirestore()

        const querySnapshot = collection(db, 'miapp')


        if (categoriName) {
            const querifilter = query(querySnapshot, where("title", "==", categoriName))

            getDocs(querifilter)
                .then((response) => {
                    const produts = response.docs.map((item) => {


                        return { id: item.id, ...item.data() }

                    })

                    setproduct(produts)
                })
                .catch((error) => {
                    console.log(error)
                })


        } else {



            getDocs(querySnapshot)
                .then((response) => {
                    const produts = response.docs.map((item) => {

                        return { id: item.id, ...item.data() }

                    })

                    setproduct(produts)
                })
                .catch((error) => {
                    console.log(error)
                })

        }
    }

    useEffect(() => {

        getproduct()





    }, [categoriName])




    return (
        <div >

            <div className='itemListContainer'>
                <div className='itemListContainer_list'>

                <ItemFilterMap product={product} />
                </div>

            </div>
        </div>
    )
}

export default ItemsListFilter