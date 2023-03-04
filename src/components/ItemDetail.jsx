import ItemCount from "./ItemCount";
const ItemDetail = ({item}) => {
    return(
        <div className="container">
            <div className="row">
                <div className="col d-flex align-items-center justify-content-center">
                    <img src={item.imagen} alt={item.nombre} style={{maxHeight:"400px", maxWidth:"500px"}} /> 
                </div>
                <div className="col align-items-center">
                    <div>
                        <h1>{item.nombre}</h1>
                        <h2>{item.precio}</h2>
                        <ItemCount stock={item.stock}/>
                        <p>{item.descripcion}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail;