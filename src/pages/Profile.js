import React, { useEffect, useRef, useState } from 'react'
import NavBar from '../components/NavBar'
import { DeleteProfile, UpdateProfile, getProfile } from '../components/Actions/ProfileAction';
import { Link } from 'react-router-dom';
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function Profile() {
    const [profile, setProfile] = useState([]);
    const form = useRef()
    const navigate = useNavigate();

    useEffect(() => {
        getProfile().then((membre) => {
            setProfile(membre);
        }).catch((error) => {
            console.log(error);
        });
    }, []);

    const supprimer = () => {
        DeleteProfile(1)
    }

    const update = async (e) => {
        e.preventDefault();
        const postData = {
            nom: form.current[0].value,
            postnom: form.current[1].value,
            prenom: form.current[3].value,
            email: form.current[1].value,
            sexe: form.current[4].value,
            telephone: form.current[5].value,
            adresse: form.current[6].value,
            datenaissance: form.current[7].value,
            password: form.current[2].value,
        }
        
        await UpdateProfile(postData, profile.id)
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
                                        <Link to="/mespaiement">
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
                            <h3 style={{ fontFamily: 'fantasy' }} className='text-center'>Mon profil</h3>
                            <form  ref={form} onSubmit={update}>
                                <div className="row">
                                    <div className='col-md-6'>
                                        <label htmlFor="">Nom</label>
                                        <input 
                                            type="text" 
                                            value={profile.nom}   
                                            className='form-control' 
                                            onChange={(e) => setProfile({ ...profile, nom: e.target.value })}
                                            />
                                    </div>
                                    <div className='col-md-6'>
                                        <label htmlFor="">Email</label>
                                        <input 
                                            type="text" 
                                            value={profile.email} 
                                            className='form-control'
                                            onChange={(e) => setProfile({ ...profile, email: e.target.value })}
                                         />
                                    </div>
                                    <div className='col-md-6'>
                                        <label htmlFor="">Password</label>
                                        <input 
                                            type="text" 
                                            value={profile.password} 
                                            className='form-control'
                                            onChange={(e) => setProfile({ ...profile, password: e.target.value })}
                                         />
                                    </div>
                                    <div className='col-md-6'>
                                        <label htmlFor="">Prenom</label>
                                        <input 
                                            type="text" 
                                            value={profile.prenom} 
                                            className='form-control'
                                            onChange={(e) => setProfile({ ...profile, prenom: e.target.value })}
                                         />
                                    </div>
                                    <div className='col-md-6'>
                                        <label htmlFor="">Sexe</label>
                                        <select name="" className='form-control' id="">
                                            <option value="M">M</option>
                                            <option value="F">F</option>
                                        </select>
                                    </div>
                                    <div className='col-md-6'>
                                        <label htmlFor="">Telephone</label>
                                        <input 
                                            type="text"
                                            value={profile.telephone} 
                                            className='form-control' 
                                            onChange={(e) => setProfile({ ...profile, telephone: e.target.value })}
                                            />
                                    </div>
                                    <div className='col-md-6'>
                                        <label htmlFor="">Adresse</label>
                                        <input 
                                            type="text" 
                                            value={profile.adresse} 
                                            className='form-control' 
                                            onChange={(e) => setProfile({ ...profile, adresse: e.target.value })}
                                            />
                                    </div>
                                    <div className='col-md-6'>
                                       
                                        <input 
                                            type="hidden" 
                                            value={profile.datenaissance} 
                                            className='form-control'
                                            onChange={(e) => setProfile({ ...profile, datenaissance: e.target.value })}
                                         />
                                    </div>
                                    <div className='col-md-6'>
                                    <br />
                                    <button className='btn btn-primary'>Modfier</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Profile