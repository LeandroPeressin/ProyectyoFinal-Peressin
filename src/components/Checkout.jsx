import { useContext, useState } from "react";
import { CartContext } from "./context/CartContext";
import { Navigate } from "react-router-dom";
import {addDoc, collection, getFirestore} from "firebase/firestore";


const Checkout = () => {
    const [nombre, setNombre] = useState("");
    const [email, setEmail] = useState("");
    const [telefono, setTelefono] = useState("");
    const [orderId, setOrderId] = useState("");
    const {cart, clear, cartSuma} = useContext(CartContext);

    const generarOrden = () => {
        const buyer = {name:nombre, email:email, telefono:telefono};
        const fecha = new Date();
        const date = `${fecha.getFullYear()}-${fecha.getMonth() + 1}-${fecha.getDay()} ${fecha.getHours()}:${fecha.getMinutes()}:${fecha.getSeconds()}`;
        const order = {buyer:buyer, items:cart, date:date, total:cartSuma()};

        if (nombre.length === 0) {
            return false;
        }

        if (email.length === 0) {
            return false;
        }

        if (telefono.length === 0) {
            return false;
        }


        const db = getFirestore();
        const ordersCollection = collection(db, "orders");
        addDoc(ordersCollection, order).then(data => {
            setOrderId(data.id);
            clear();
        });
    }
    
    return (
        <div className="container my-5">
            <div className="row">
            <h2 className="text-center">Finalizar compra</h2> 
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
                        {
                            cart.map(item => (
                                <tr key={item.index}>
                                    <td className="text-start"><img src={item.imagen} alt={item.nombre} width={80}/></td>
                                    <td className="text-center align-middle">{item.nombre}</td>
                                    <td className="text-center align-middle">{item.quantity} x ${item.precio}</td>
                                    <td className="text-center align-middle">$ {item.quantity * item.precio}</td>
                                </tr>
                                ))
                        }
                        <tr>
                            <td colSpan={2}>&nbsp;</td>
                            <td className="text-center">Total a pagar</td>
                            <td className="text-center"><b>$ {cartSuma()}</b></td>
                        </tr>
                    </table>
                </div>
                {orderId ? <Navigate to={"/agradecimiento/" + orderId}/> : ""}
            </div>
        </div>
    )
}

export default Checkout;