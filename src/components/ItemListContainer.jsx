import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import { collection, getDocs, getFirestore, query, where } from "firebase/firestore";
//import arrayCatalogo from "./json/catalogo.json";


const ItemListContainer = () => {
    const [items, setItems] = useState([]);
    const {id} = useParams();
    
    /*useEffect(() => {
        const promesa = new Promise((resolve) => {
            setTimeout(() => {
                resolve(id ? arrayCatalogo.filter(item => item.categoria === id) : arrayCatalogo);
            }, 2000)
        })
        promesa.then((respuesta) => {
            setItems(respuesta);
        });
    }, [id]);*/

    /*useEffect(() => { // Para subir todos los Productos de mi json local al Firestore
        const db = getFirestore();
        const itemsCollection = collection(db, "items");
        arrayCatalogo.forEach(item => {
            addDoc(itemsCollection, item);
        });
    }, []);*/

    useEffect(() => {
        const db = getFirestore();
        const itemsCollection = collection(db, "items");
        const filter = id ? query(itemsCollection, where("categoria", "==", id)) : itemsCollection;
        getDocs(filter).then(elements => {
            setItems(elements.docs.map(element => ({id:element.id, ...element.data()})));
        });
    }, [id]);
    
    return (
        <div className="container">            
            <ItemList items={items} />        
        </div>
    )
    
}

export default ItemListContainer;