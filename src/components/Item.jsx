import { Link } from "react-router-dom";

const Item = ({item}) => {
    return (
        <Link to={"/item/"+item.id} className="text-decoration-none text-dark">
            <div className="card my-2">
                <img src={item.imagen} className="card-img-top" alt={item.nombre}/>
                <div className="card-body text-center">
                    <p className="card-title">{item.nombre}</p>
                    <p className="card-text"><strong>{item.precio}</strong></p>
                </div>
            </div>
        </Link>
    )
}

export default Item;