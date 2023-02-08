import facebook from "./images/facebook.svg";
import instagram from "./images/instagram.svg";
import telefono from "./images/telefono.svg";
import ubicacion from "./images/ubicacion.svg";

const Footer = () => {
    return (
        <div className="container my-3">
            <div className="row">
                <div className="col">
                    <h6>REDES SOCIALES</h6>
                    <a href={"https://www.facebook.com/rodados.ardana/"} className="ms-3 me-2"><img src={facebook} alt={"Facebook"} width={"35"}></img></a>
                    <a href={"https://instagram.com/RODADOSARDANA"} className="ms-3"><img src={instagram} alt={"Instagram"} width={"35"}></img></a>
                </div>
                <div className="col">
                    <h6>CONTACTANOS</h6>
                    <p className="my-1"><img src={telefono} alt="telefono" width={20} ></img> 342 536-9466</p>
                    <a href={"https://goo.gl/maps/rNovQ6n641JvZQe66"}><p className="my-0"><img src={ubicacion} alt="ubicacion" width={24}></img>Belgrano 2071 · (3016) Santo Tomé (Santa Fe)</p></a>
                </div>
            </div>
        </div>
    )
}

export default Footer;