import fondo from "./images/fondo.jpg";
const Body = () => {
    return (
        <div className="container-fluid ">
            <div className="row">
                <div className="col">
                    <img src={fondo} alt={"fondo"}></img>  
                </div>
            </div>
        </div>
    )
}

export default Body;