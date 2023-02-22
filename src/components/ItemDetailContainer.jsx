import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import arrayCatalogo from "./json/catalogo.json"

const ItemDetailContainer = () => {
    const [item, setItem] = useState({});
    const {id} = useParams();
    useEffect(()=>{
        const promesa = new Promise((resolve) => {
            setTimeout(()=>{
                resolve(arrayCatalogo.find(prod => prod.id === parseInt(id)));
            }, 2000);
        });
        promesa.then((respuesta) => {
            setItem(respuesta);
        })
    }, [id]);

    return(
       <ItemDetail item={item} />
    )
}

export default ItemDetailContainer; 