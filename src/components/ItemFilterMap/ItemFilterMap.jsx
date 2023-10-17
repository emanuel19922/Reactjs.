import ItemsFiltereds from "../ItemsFiltereds/ItemsFiltereds"


const ItemFilterMap = ({ product }) => {
    
   
  

    return (


         product.map((produ) => <ItemsFiltereds  key={produ.id} produs={produ}   />
        )
       
    )


}

export default ItemFilterMap