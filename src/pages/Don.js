import React from 'react'
import NavBar from '../components/NavBar'

function Don() {
    return (
        <>
            <NavBar />
            <div class="column church-staff__item">
                <div class="church-staff__header">
                    <div class="church-staff__picture">
                        <img src="images/avatars/user-06.jpg" alt="" />
                    </div>
                    <h4 className="church-staff__name text-center" style={{ fontFamily: "fantasy" }}>
                        Faire un Don
                    </h4>
                </div>
                <p>
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-md-6" >
                                <form action="">
                                <div className="form-group">
                                        <label htmlFor="" style={{ fontFamily: "fantasy" }}>Type de don</label>
                                        <select style={{ fontFamily: "fantasy" }} className="form-control" name="" id="">
                                            <option>Construction</option>
                                            <option>Offrande</option>
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="" style={{ fontFamily: "fantasy" }}>Numero de telephone</label>
                                        <input type="number" className='form-control' placeholder='Exemple : 243xxxxxxx' />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="" style={{ fontFamily: "fantasy" }}>Montant</label>
                                        <input type="number" className='form-control' />
                                    </div>
                                    <div className="form-group">
                                       
                                        <input  type="hidden" className='form-control' />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="" style={{ fontFamily: "fantasy" }}>Devise</label>
                                        <select style={{ fontFamily: "fantasy" }} className="form-control" name="" id="">
                                            <option>CDF</option>
                                            <option>USD</option>
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="" style={{ fontFamily: "fantasy" }}>Type de paiement</label>
                                        <select name="" style={{ fontFamily: "fantasy" }} className="form-control" id="">
                                            <option>Mobile money</option>
                                            <option>Carte visa</option>
                                        </select>
                                    </div>
                                    <button className="btn btn-primary btn-block">Valider</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </p>
            </div>
        </>
    )
}

export default Don