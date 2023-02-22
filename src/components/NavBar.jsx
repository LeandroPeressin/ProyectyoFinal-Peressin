import CartWidget from "./CartWidget";
import logo from "./images/logo.jpg";
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <nav className="navbar navbar-expand-lg">
                        <div className="container-fluid">
                            <Link className="navbar-brand" to={"/"}><img src={logo} alt="Rodados Ardana" width={180} title={"Rodados Ardana"} /></Link>
                            <div className="collapse navbar-collapse" id="navbarNav">
                                <ul className="navbar-nav">
                                <li className="nav-item">
                                    <NavLink className="nav-link " activeclassname={"active"} to={"/Inicio"}>Inicio</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" activeclassname={"active"} to={"/category/bicicletas"} >Bicicletas</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" activeclassname={"active"} to={"/category/indumentaria"} >Indumentaria</NavLink>
                                </li>
                                </ul>
                            </div>
                        </div>
                    </nav>                   
                </div> 
                <div className="col p-4 d-flex  aling-items-center justify-content-end">
                    <CartWidget />
                </div>              
            </div>
        </div>
    )
}

export default NavBar;