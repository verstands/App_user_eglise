import React, { useEffect, useState } from 'react'
import NavBar from '../components/NavBar'
import { DeleteProfile, getProfile } from '../components/Actions/ProfileAction';
import { Link } from 'react-router-dom';
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";




function Paiement() {
    const [Paiement, setPaiement] = useState([]);
    const navigate = useNavigate();

    const supprimer = () => {
        DeleteProfile(1)
    }

    const Sedeconnecter = () => {
        localStorage.removeItem("token");
        navigate('/') 
        toast.error(`Vous etes deconnecter`)
    }
    return (
        <>
            <NavBar />
            <div class="bg-sky pd-top-80 pd-bottom-50" id="latest">
                <div class="container">
                    <div className='row'>
                        <div className="col-md-4">
                            <div class="card" style={{ width: "18rem" }} >
                                <ul class="list-group list-group-flush" style={{ fontFamily: 'fantasy' }}>
                                    <li class="list-group-item">
                                        <Link to="/profile">
                                            <i className='fa fa-user'></i>  Profile
                                        </Link>
                                    </li>
                                    <li class="list-group-item">
                                        <Link>
                                            <i className='fa fa-dollar'></i>  Mes paiements
                                        </Link>
                                    </li>
                                    <li class="list-group-item">
                                        <Link onClick={Sedeconnecter}>
                                            <i className='fa fa-sign-out'></i>  Se deconnecter
                                        </Link>
                                    </li>
                                    <li class="list-group-item">
                                        <Link onClick={supprimer} className='text-danger'>
                                            <i className='fa fa-trash'></i>  Supprimer le compte
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-8" >
                            <h3 style={{ fontFamily: 'fantasy' }} className='text-center'> Mes paiements</h3>
                            <table id="zero_config"
                                class="table table-striped table-bordered">
                                <thead>
                                    <tr>
                                        <th>Titre</th>
                                        <th>Date</th>
                                    </tr>
                                </thead>


                            </table>
                            {
                                Paiement.length >= 0 && (
                                    <p style={{ fontFamily: 'fantasy' }} className='text-center'>Pas de paiement</p>
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Paiement