import { Link } from "react-router-dom";
import "../index.css";

const Item = ({item}) => {
    return (
        <Link to={"/item/"+item.id} className="text-decoration-none text-dark">
            <div className="card my-2" style={{height:"320px"}}>
                <img src={item.imagen} style={{maxHeight:"220px", maxWidth:"260px"}} className="card-img-top" alt={item.nombre}/>
                <div className="card-body text-center">
                    <p className="card-title mt-1">{item.nombre}</p>
                    <p className="card-text"><strong>$ {item.precio}</strong></p>
                </div>
            </div>
        </Link>
    )
}

export default Item;