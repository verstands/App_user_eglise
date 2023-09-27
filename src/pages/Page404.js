import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from "react-router-dom";

function Page404() {
    return (
    <>
      <div class="error-header"> </div>
      <div class="container ">
        <section class="error-container text-center">
          <h1>404</h1>
          <div class="error-divider">
            <h2>PAGE NON TROUVÉE..</h2>
            <p class="description" style={{color : 'black'}}>Nous n'avons pas pu trouver cette page</p>
          </div>
          <Link to="/home" class="return-btn"><i class="fa fa-home"></i>Accueil</Link>
        </section>
      </div>
    </>
  )
}

export default Page404