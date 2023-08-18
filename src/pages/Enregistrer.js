import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { toast } from "react-toastify";
import '../style.css'

function Enregistrer() {
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
    const [name, setname] = useState("");
    const navigate = useNavigate();
    const [loading, setloading] = useState(false);

    const handleConnecter = (e) => {
        e.preventDefault();

        axios.post(`${process.env.REACT_APP_SERVICE_API}membre`,
            {

                nom: name,
                email: email,
                postnom : 'NULL',
                prenom : 'NULL',
                sexe : 'H',
                telephone : 'NULL',
                adresse : 'NULL',
                datenaissance : '00-00-0000',
                etatcivil : 'NULL',
                activite : 'NULL',
                profession : 'NULL',
                password: password
            }
        ).then((response) => {
            let token = JSON.stringify(response.data.token);
            let tokenT = token.substring(1, token.length - 1);
            localStorage.setItem("token", tokenT)
            setloading(false)
            navigate('/home')
            toast.success(`success`)
        }).catch((error) => {
            if (error?.response?.status === 401) {
                setloading(false)
                toast.error(`${error.response.data.message}`)
            } else if (error?.response?.status === 500) {
                setloading(false)
                toast.error(`Erreur de la connexion`)
            } else if (error?.response?.status === 403) {
                setloading(false)
                toast.error(`Service non trouvée !!!`)
            } else if (error?.response?.status === 422) {
                setloading(false)
                toast.error(`${error.response.data.message}`)
            } else {
                alert(error)
            }
        })
    }
    return (
        <section class="ftco-section">
            <div class="container">
                <div class="row justify-content-center">

                </div>
                <div class="row justify-content-center">
                    <div class="col-md-6 col-lg-5">
                        <div class="login-wrap p-4 p-md-5">
                            <div class="icon d-flex align-items-center justify-content-center">
                                <span class="fa fa-user-o"></span>
                            </div>
                            <h3 class="text-center mb-4">S"eregistrer</h3>
                            <form action="" onSubmit={handleConnecter} class="login-form">
                                <div class="form-group">
                                    <input
                                        type="text"
                                        class="form-control rounded-left"
                                        placeholder="Nom"
                                        onChange={(e) => setname(e.target.value)}
                                    />
                                </div>
                                <div class="form-group">
                                    <input
                                        type="text"
                                        class="form-control rounded-left"
                                        placeholder="Email"
                                        onChange={(e) => setemail(e.target.value)}
                                    />
                                </div>
                                <div class="form-group d-flex">
                                    <input
                                        type="password"
                                        class="form-control rounded-left"
                                        placeholder="Password"
                                        onChange={(e) => setpassword(e.target.value)}
                                    />
                                </div>
                                <div class="form-group d-md-flex">
                                    <div class="w-50">
                                        <label class="checkbox-wrap checkbox-primary">Remember Me
                                            <input type="checkbox" checked />
                                            <span class="checkmark"></span>
                                        </label>
                                    </div>
                                    <div class="w-50 text-md-right">
                                        <Link to="/">Se connecter</Link>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <button type="submit" class="btn btn-primary rounded submit p-1 px-5">
                                        {
                                            loading === true && (
                                                <i className="fa fa-spinner fa-pulse"></i>
                                            )
                                        }
                                        Se connecter
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Enregistrer