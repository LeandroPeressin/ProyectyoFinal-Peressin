import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import arrayCatalogo from "./json/catalogo.json"

const ItemListContainer = () => {
    const [items, setItems] = useState([]);
    const {id} = useParams();
    
    useEffect(() => {
        const promesa = new Promise((resolve) => {
            setTimeout(() => {
                resolve(id ? arrayCatalogo.filter(item => item.categoria === id) : arrayCatalogo);
            })
        })
        promesa.then((respuesta) => {
            setItems(respuesta);
        })


    }, [id])




    return (
        <div className="container">            
            <ItemList items={items} />            
        </div>
    )
}

export default ItemListContainer;