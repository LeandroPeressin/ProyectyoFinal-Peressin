import { useContext, useState } from "react";
import { CartContext } from "./context/CartContext";
import { Link } from "react-router-dom";
import trash from "./images/trash3.svg";
import {addDoc, collection, getFirestore} from "firebase/firestore";


const Cart = () => {
    const [nombre, setNombre] = useState("");
    const [email, setEmail] = useState("");
    const [telefono, setTelefono] = useState("");
    const [orderId, setOrderId] = useState("");
    const {cart, cartTotal, removeItem, clear, cartSuma} = useContext(CartContext);

    const generarOrden = () => {
        const buyer = {name:nombre, email:email, telefono:telefono};
        const fecha = new Date();
        const date = `${fecha.getFullYear()}-${fecha.getMonth() + 1}-${fecha.getDay()} ${fecha.getHours()}:${fecha.getMinutes()}:${fecha.getSeconds()}`;
        const order = {buyer:buyer, items:cart, date:date, total:cartSuma()};

        const db = getFirestore();
        const ordersCollection = collection(db, "orders");
        addDoc(ordersCollection, order).then(data => {
            setOrderId(data.id);
        });
    }
    
    if (cartTotal() === 0){
        return(
            <div className="container">
                <div className="row">
                    <div className="col-md-12"></div>
                        <div className="alert alert-warning text-center" role="alert"> No se encontraron productos en el carrito</div>
                </div>
            </div>
            
        )
    }

    return (
        <div className="container my-5">
            <div className="row">
            <h2 className="text-center">Productos Seleccionados</h2> 
                <div className="col-md-3">
                    <form>
                        <div className="mb-3">
                            <label htmlFor="nombre" className="form-label">Nombre</label>
                            <input type="text" className="form-control" id="nombre" onInput={(e) => {setNombre(e.target.value)}} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email</label>
                            <input type="text" className="form-control" id="email" onInput={(e) => {setEmail(e.target.value)}} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="telefono" className="form-label">Teléfono</label>
                            <input type="text" className="form-control" id="telefono" onInput={(e) => {setTelefono(e.target.value)}} />
                        </div>
                        <button type="button" className="btn btn-danger" onClick={generarOrden}>Generar Orden</button>
                    </form>
                </div>

                <div className="col-md-9">               
                    <table className="table">
                        <tr>
                        <td className="text-end" colSpan={5}><Link className="btn btn-danger bg-danger" onClick={() => {clear()}}>Vaciar Carrito</Link></td>
                        </tr>
                        {
                            cart.map(item => (
                                <tr key={item.index}>
                                    <td className="text-start"><img src={item.imagen} alt={item.nombre} width={80}/></td>
                                    <td className="text-center align-middle">{item.nombre}</td>
                                    <td className="text-center align-middle">{item.quantity} x ${item.precio}</td>
                                    <td className="text-center align-middle">$ {item.quantity * item.precio}</td>
                                    <td className="text-end align-middle" width="10%"><button type="button" className="btn btn-danger bg-danger" onClick={() => {removeItem(item.index)}} title={"Eliminar Producto"}><img src={trash} alt={"Eliminar Producto"} width={20} /></button></td>
                                </tr>
                                ))
                        }
                        <tr>
                            <td colSpan={2}>&nbsp;</td>
                            <td className="text-center">Total a pagar</td>
                            <td className="text-center"><b>$ {cartSuma()}</b></td>
                            <td>&nbsp;</td>
                        </tr>
                    </table>
                </div>
            </div>
            <div className="row my-3">
                <div className="col-md-12">
                    {orderId ? <div className="alert alert-warning text-center" role="alert"> <h3>Gracias por tu compra!</h3><p>Se generó una orden con el ID: <b>{orderId}</b></p></div>: ""}
                </div>
            </div>
        </div>
    )
}

export default Cart;