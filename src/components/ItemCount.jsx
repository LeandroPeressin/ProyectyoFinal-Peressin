import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ItemCount = ({stock, onAdd}) => {
    const [items, setItems] = useState(1);
    const [itemStock, setItemStock] = useState(stock);
    const [itemAdded, setItemAdded] = useState(false);

    const incrementarStock = () => {
        if (items < itemStock){
            setItems(items + 1);
        }
    };
    const decrementarStock = () => {
        if (items > 1){
            setItems(items - 1);
        }
    };

    const addToCart = () => {
        if (itemStock >= items){
            setItemStock(itemStock - items) 
            setItems(1);
            setItemAdded(true);
            onAdd(items);
        }
       
    }

    useEffect(()=>{
        setItemStock(stock);
    },[stock])
    
    return (
        <div className="container">
            <div className="row my-1">
                <div className="col">
                    <div className="btn-group">
                        <button className="btn btn-light" onClick={decrementarStock}>-</button>
                        <button className="btn btn-light">{items}</button>
                        <button className="btn btn-light" onClick={incrementarStock}>+</button>
                    </div>
                </div>
            </div>
            <div className="row my-1">
                <div className="col">
                    {itemAdded ? <Link to={"/cart"} className="btn btn-success">Terminar Mi Compra</Link> : <button onClick={addToCart} className="btn btn-success">Agregar al carrito</button>}
                </div>
            </div>
        </div>
    )
}

export default ItemCount;