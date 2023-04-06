import { useContext } from "react";
import { CartContext } from "./context/CartContext";
import { Link } from "react-router-dom";
import trash from "./images/trash3.svg";


const Cart = () => {
    const {cart, cartTotal, removeItem, clear, cartSuma} = useContext(CartContext);


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
                <div className="col-md-12">               
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
                                    <td className="text-end align-middle" width="30%"><button type="button" className="btn btn-danger bg-danger" onClick={() => {removeItem(item.index)}} title={"Eliminar Producto"}><img src={trash} alt={"Eliminar Producto"} width={20} /></button></td>
                                </tr>
                            ))
                        }
                        <tr>
                            <td colSpan={2}>&nbsp;</td>
                            <td className="text-center"><b>Total a pagar</b></td>
                            <td className="text-center"><b>$ {cartSuma()}</b></td>
                            <td className="text-end"><Link to={"/checkout"} className="btn btn-danger bg-danger">Finalizar compra</Link></td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Cart;