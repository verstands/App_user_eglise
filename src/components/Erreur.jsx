import React from "react";
import NavBar from "./NavBar";
import NavOt from "./NavOt";
import { Link } from "react-router-dom";

const Erreur = () => {
    return(
        <div class="wrapper">
            
            <div class="main">
                
                <main className="content">
                    <center>
                    <div className="container-fluid p-0">
                    <h1 className="h3 mb-3 text-center"><strong>Page non trouvé</strong> Erreur 404 </h1>
                    <Link to="/" className="btn btn-primary">Actualiser</Link>
                </div>
                    </center>
                </main>
            </div>
        </div>
    )
}

export default Erreur;