import { Link, useParams } from "react-router-dom";

const Agradecimiento = () => {
    const {orderId} = useParams();

    return (
        <div className="container my-5">
            <div className="row">
                <div className="col-md-12 text-center">
                    {orderId ? <div className="alert alert-warning text-center" role="alert"> <h3>Gracias por tu compra!</h3><p>Se generó una orden con el ID: <b>{orderId}</b></p></div>: ""}
                    <Link to={"/"} className="btn btn-danger text-center">Volver al Inicio</Link>
                </div>
            </div>
        </div>
    )
}

export default Agradecimiento;