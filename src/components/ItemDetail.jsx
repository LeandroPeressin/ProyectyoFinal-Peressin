const ItemDetail = (item) => {
    return(
        <div className="container">
            <div className="row">
                <div className="col">
                    <img src={item.imagen} alt={item.nombre} /> 
                </div>
                <div className="col">
                    <h1>{item.nombre}</h1>
                    <h2>{item.precio}</h2>
                    <p>{item.descripcion}</p>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail;