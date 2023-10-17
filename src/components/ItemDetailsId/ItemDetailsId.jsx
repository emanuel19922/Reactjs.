
import { useParams } from "react-router-dom";

import ItemDetailFilteredId from "../ItemDetailFilteredId/ItemDetailFilteredId";
import { useEffect, useState } from "react";
import { doc, getDoc, getFirestore } from "firebase/firestore"
import './_getprodu.scss'



const ItemDetailsId = () => {

    const [productid, setproductid] = useState([]);
  

    const { id } = useParams();


    const getproduct = () => {
        const db = getFirestore();
        const query = doc(db, 'products', id);
        getDoc(query)
            .then((response) => {


                setproductid( { id: response.id, ...response.data() } );

            })
    }


    useEffect(() => {
        getproduct();


    }, [id])



    return (

        <div className="itemslistipro">  <ItemDetailFilteredId productid={productid} />  </div>

    )

};

export default ItemDetailsId;