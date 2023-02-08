import carrito from "./images/cart3.svg";
const CartWidget = () => {
    return (
        <button type="button" className="btn position-relative bg-danger">
            <img src={carrito} alt={"carrito"} width={25}/>
            <span className="position-absolute top-0 start-75 translate-middle badge rounded-pill text-white bg-dark">1</span>
        </button>
    )
}

export default CartWidget;