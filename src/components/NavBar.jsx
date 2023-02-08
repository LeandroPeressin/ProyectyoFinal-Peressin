import CartWidget from "./CartWidget";
import logo from "./images/logo.jpg"

const NavBar = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <nav className="navbar navbar-expand-lg">
                        <div className="container-fluid">
                            <a className="navbar-brand" href={"/"}><img src={logo} alt="Rodados Ardana" width={180} title={"Rodados Ardana"} /></a>
                            <div className="collapse navbar-collapse" id="navbarNav">
                                <ul className="navbar-nav">
                                <li className="nav-item">
                                    <a className="nav-link " aria-current="page" href={"/"} title={"Inicio"}>Inicio</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href={"/Productos"} title={"Productos"}>Productos</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href={"/Contacto"} title={"Contacto"}>Contacto</a>
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