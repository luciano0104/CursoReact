import React from "react";
import { Link, NavLink } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";
import '../NavBar/NavBar.css'
const NavBar = () => {
    return(
        <div className="container" id="navbar">
            <div className="row">
                <div className>
                     <nav className="navbar navbar-expand-lg ">
                        <div className="container-fluid">
                        <Link className="navbar-brand" to={"/"}><img src="../Eternia liston.png" alt="Eternia Pop" width={100} /></Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                <NavLink className="nav-link" aria-current="page" to={"/category/indumentaria"} >Indumentaria</NavLink>
                                </li>
                                <li className="nav-item">
                                <NavLink className="nav-link" to={"/category/mate"}>Mates</NavLink>
                                </li>
                                <li className="nav-item">
                                <NavLink className="nav-link" to={"/category/taza"}>Tazas</NavLink>
                                </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-6 d-flex justify-content-end  align-items-center">
                            <CartWidget/>
                        </div> 
                     </nav>
                </div>
                               
            </div>
        </div>
        
            
    )
}

export default NavBar;