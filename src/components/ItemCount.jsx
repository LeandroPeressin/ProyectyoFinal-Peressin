import { useEffect, useState } from "react";

const ItemCount = ({stock}) => {
    const [items, setItems] = useState(1);
    const [itemStock, setItemStock] = useState(stock);

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

    const onAdd = () => {
        if (itemStock >= items){
            setItemStock(itemStock - items) 
            setItems(1);
            console.log("agregaste " + items + " prod al carro") 
        } else {
            alert("Lo sentimos, nos quedamos sin stock de este producto.")
        }
       
    }

    useEffect(()=>{
        setItemStock(stock)
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
                    <button onClick={onAdd} className="btn btn-success">Agregar al carrito</button>
                </div>
            </div>
        </div>
    )
}

export default ItemCount;