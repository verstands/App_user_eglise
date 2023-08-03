import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import Loading from "../loadingErr/Loading";
import { toast } from "react-toastify";

const Login = () => {
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
    const navigate = useNavigate();
    const [loading, setloading] = useState(false);

    const handleConnecter = (e) => {
        e.preventDefault();
        axios.post(`${process.env.REACT_APP_SERVICE_API}login`,
            {
                email: email,
                password: password
            }
        ).then((response) => {
           let token = JSON.stringify(response.data.token);
            let tokenT = token.substring(1, token.length - 1);
            localStorage.setItem("token", tokenT)
            navigate('/home') 
            toast.success(`success`)
            window.location.reload();
        }).catch((error) => {
            if (error?.response?.status === 401) {
                toast.error(`${error.response.data.message}`)
            } else if (error?.response?.status === 500) {
                toast.error(`Erreur de la connexion`)
            } else if (error?.response?.status === 404) {
                toast.error(`Service non trouvée !!!`)
            } else if (error?.response?.status === 422) {
                toast.error(`${error.response.data.message}`)
            } else {
                alert(error)
            }
        })
    }
    return (
        <div>
            <main className="d-flex w-100">
                <div className="container d-flex flex-column">
                    <div className="row vh-100">
                        <div className="col-sm-10 col-md-8 col-lg-6 mx-auto d-table h-100">
                            <div className="d-table-cell align-middle">
                                <div className="text-center mt-4">
                                  
                                    
                                </div>
                                <div className="card">
                                    <div className="card-body">
                                        <div className="m-sm-4">
                                            <div className="text-center">
                                               <i className="fa fa-user-circle" style={{fontSize : 100}}> </i>
                                            </div>
                                            <form action="" onSubmit={handleConnecter}>
                                                <div className="mb-3">
                                                    <label className="form-label">Email</label>
                                                    <input
                                                        className="form-control form-control-lg"
                                                        type="email"
                                                        name="email"
                                                        onChange={(e) => setemail(e.target.value)} />
                                                </div>
                                                <div className="mb-3">
                                                    <label className="form-label">Password</label>
                                                    <input
                                                        className="form-control form-control-lg"
                                                        type="password"
                                                        name="password"
                                                        onChange={(e) => setpassword(e.target.value)} />
                                                    <small>
                                                        <a href="index.html">Mot de passe  oublié?</a>
                                                    </small>
                                                </div>
                                                <div>
                                                    <label className="form-check">
                                                        <input className="form-check-input" type="checkbox" value="remember-me" name="remember-me" checked />
                                                        <span className="form-check-label">
                                                            Remember me next time
                                                        </span>
                                                    </label>
                                                </div>
                                                <div className="text-center mt-3">
                                                    <button type="submit" className="btn btn-lg btn-primary">
                                                        {
                                                            loading === true && (
                                                               <Loading />
                                                            )
                                                        }
                                                        Se  connecter
                                                    </button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
export default Login;