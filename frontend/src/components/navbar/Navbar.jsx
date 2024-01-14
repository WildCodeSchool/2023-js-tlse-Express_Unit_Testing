import React from "react";
import "./navbar.css";

function Navbar() {
    return(
        <div className="navbarContainer">
       
            <div className="navbarMenu">
                <a href="/">Home</a>
                <a href="/pageAppareil">Appareils</a>
                <a href="/pageDispositifs">Dispositifs</a>
                <a href="/pageUsers">Utilisateurs</a>
            </div>
        </div>
    )
}
export default Navbar;