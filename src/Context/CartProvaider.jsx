import { createContext } from "react";
import { useState,useContext } from "react";




export const Datacontex = createContext([]);



const CartProvaider = ({ children }) => {


    const [cart, setcart] = useState([])
 



    const isincart = (id) => {

        return cart.some((product) => product.id === id)

    }




    const addtocart = (product, quantiti,) => {
        // aca balido si esta  repetdio me haga un alert 


        if (isincart(product.id)) {

            let carts = cart.map(carts => carts.id === product.id ? { ...carts, quantiti: carts.quantiti + quantiti } :carts)
       
            return setcart(carts)

        }

        setcart([...cart, { ...product, quantiti }])

    }


    return (
        <Datacontex.Provider value={{ cart, addtocart, setcart, }}>
            {children}


        </Datacontex.Provider>

    )

}



export default CartProvaider;