import { useContext} from "react";
import { Link } from "react-router-dom";
import { CartContext } from "./context/CartContext";
import carrito from "./images/cart3.svg";

const CartWidget = () => {
    const {cartTotal} = useContext(CartContext);

    return cartTotal() > 0 ?
        <Link to={"/cart"} className="btn position-relative bg-danger">
            <img src={carrito} alt={"carrito"} width={25}/>
            <span className="position-absolute top-0 start-75 translate-middle badge rounded-pill text-white bg-dark">{cartTotal()}</span>
        </Link> : "";
    
}

export default CartWidget;