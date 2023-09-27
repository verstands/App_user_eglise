import { colors } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { getProfile } from "./Actions/ProfileAction";
import zIndex from "@mui/material/styles/zIndex";
import { getVideo } from "./Actions/videoAction";

const NavBar = () => {
    const [profile, setProfile] = useState([]);
    const [predication, setpredication] = useState([]);
    const [predicationM, setpredicationM] = useState([]);
    const [activeL, setactive] = useState('home');
    const [searchTerm, setSearchTerm] = useState("");
    const [searchTermM, setSearchTermM] = useState("");
    const [disNow, setdisNow] = useState('none')
    const [disNowM, setdisNowM] = useState('none')
    let token = localStorage.getItem("token");

    const navFiltreRef = useRef(null);
    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
        if (searchTerm.length > 0) {
            setdisNow('block')
        }
        if (searchTerm === '') {
            setdisNow('none')
            console.log(disNow)
        }
    };

    const handleSearchM = (event) => {
        setSearchTermM(event.target.value);
        if (searchTermM.length > 0) {
            setdisNowM('block')
        }
        if (searchTermM === '') {
            setdisNowM('none')
            console.log(disNow)
        }
    };

    useEffect(() => {
        if (token) {
            getProfile()
                .then((membre) => {
                    setProfile(membre);
                })
                .catch((error) => {
                    console.log(error);
                });
        }
    }, [token]);

    useEffect(() => {
        getVideo().then((membre) => {
            setpredication(membre);
            setpredicationM(membre);
        }).catch((error) => {
            console.log(error);
        });
    }, []);

    const handleClickOutside = (event) => {
        if (navFiltreRef.current && !navFiltreRef.current.contains(event.target)) {
            setdisNow('none');
        }
    };

    useEffect(() => {
        document.addEventListener("click", handleClickOutside);
        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, []);

    return (
        <>

            <div class="td-search-popup" id="td-search-popup">
                <form action="index.html" class="search-form">
                    <div class="form-group">
                        <input
                            type="text"
                            class="form-control"
                            placeholder="Recherche predication..."
                            value={searchTermM}
                            onChange={handleSearchM}
                        />
                    </div>
                    <button type="submit" class="submit-btn"><i class="fa fa-search"></i></button>
                    <div className="NavFiltre" style={{ display: disNowM }} ref={navFiltreRef}>
                        {
                            Array.isArray(predicationM) && predicationM
                                .filter((data) => {
                                    if (typeof data.titre !== 'string'
                                    ) {
                                        return false; // ignore non-string values
                                    }
                                    return data.titre.toLowerCase().includes(searchTermM.toLowerCase())

                                })
                                .map((pv) => {
                                    return (
                                        <>
                                            <Link to={`/VideoD/${pv.id}`} style={{
                                                color
                                                    : "black"
                                            }}>
                                                <i className="fa fa-video-camera"> </i>
                                                {pv.titre}
                                            </Link><br />
                                        </>
                                    )
                                })
                        }
                    </div>
                </form>
            </div>
            <div class="body-overlay" id="body-overlay"></div>
            <div class="navbar-area">
                <div class="topbar-area">
                    <div class="container">
                        <div class="row justify-content-center">
                            <div class="col-lg-6 col-md-7 align-self-center">
                                <div class="topbar-menu text-md-left text-center">
                                    <ul class="align-self-center">
                                        <li><a href="#">

                                        </a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-5 mt-2 mt-md-0 text-md-right text-center">
                                <div className="topbar-social">
                                    <ul className="social-area social-area-2">
                                        {token && profile && profile.prenom && profile.nom && (
                                            <Link to={`/profile`} style={{ color: 'white', fontFamily: "fantasy" }}>
                                                <i className="fa fa-user-circle" style={{ fontSize: 25, color: "white" }}> </i>
                                                {profile.prenom} {profile.nom}
                                            </Link>
                                        )}
                                        {
                                            !token && (
                                                <Link to='/login' className="btn btn-primary"><i className="fa fa-sign-in"></i> Se connecter</Link>
                                            )
                                        }
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="adbar-area bg-black d-none d-lg-block">
                    <div class="container">
                        <div class="row">
                            <div class="col-xl-6 col-lg-5 align-self-center">
                                <div class="logo text-md-left text-center">
                                    <Link class="main-logo" to="/home"><img src="assets/img/logo.png" alt="img" /></Link>
                                </div>
                            </div>
                            <div class="col-xl-6 col-lg-7 text-md-right text-center">
                                <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
                                    <div class="carousel-inner">
                                        <div class="carousel-item active" style={{padding : "10px", transition : '1.2'}}>
                                            <strong style={{ color: "white" }}>(1 Jean 4 : 7-8)</strong>
                                            <p style={{ fontFamily: "fantasy", color: "white" }}>
                                                Bien-aimés, aimons nous les uns les autres; car l'amour est de Dieu, et quiconque aime est né de Dieu et connaît Dieu.
                                            </p>
                                        </div>
                                        <div class="carousel-item">
                                            <strong style={{ color: "white" }}>(1 J 4 : 7-8)</strong>
                                            <p style={{ fontFamily: "fantasy", color: "white" }}>
                                                Bien-aimés, aimons nous les uns les autres; car l'amour est de Dieu, et quiconque aime est né de Dieu et connaît Dieu.
                                            </p>
                                        </div>
                                        <div class="carousel-item">
                                            <strong style={{ color: "white" }}>(p 4 : 7-8)</strong>
                                            <p style={{ fontFamily: "fantasy", color: "white" }}>
                                                Bien-aimés, aimons nous les uns les autres; car l'amour est de Dieu, et quiconque aime est né de Dieu et connaît Dieu.
                                            </p>
                                        </div>
                                    </div>
                                    <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                        <span class="sr-only">Previous</span>
                                    </a>
                                    <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                        <span class="sr-only">Next</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <nav class="navbar navbar-expand-lg">
                    <div class="container nav-container">
                        <div class="responsive-mobile-menu">
                            <div class="logo d-lg-none d-block">
                                <Link class="main-logo" to="/home"><img src="assets/img/logo.png" alt="img" /></Link>
                            </div>
                            <button class="menu toggle-btn d-block d-lg-none" data-target="#nextpage_main_menu"
                                aria-expanded="false" aria-label="Toggle navigation">
                                <span class="icon-left"></span>
                                <span class="icon-right"></span>
                            </button>
                        </div>
                        <div class="nav-right-part nav-right-part-mobile">
                            <Link class="search header-search" to="#"><i class="fa fa-search"></i></Link>
                        </div>
                        <div className="collapse navbar-collapse" id="nextpage_main_menu">
                            <ul className="navbar-nav menu-open" style={{ fontFamily: "fantasy" }}>
                                <li className={`current-menu-item`} >
                                    <NavLink to={"/home"}>Accueil</NavLink>
                                </li>
                                <li className="current-menu-item" >
                                    <NavLink to="/evenements">Evenements</NavLink>
                                </li>
                                <li className={`current-menu-item`}>
                                    <NavLink to={"/predication"}>Predications</NavLink>
                                </li>
                                <li className={`current-menu-item`}>
                                    <NavLink to={"/eglise"}>Notre eglise</NavLink>
                                </li>
                                <li className={`current-menu-item`} >
                                    <NavLink to={"/don"}>Don</NavLink>
                                </li>
                                {
                                    token && (
                                        <li className={`current-menu-item`}>
                                            <NavLink to={"/chat"}>forums de discussion</NavLink>
                                        </li>
                                    )
                                }
                            </ul>
                        </div>
                        <div class="nav-right-part nav-right-part-desktop">
                            <div class="menu-search-inner">
                                <input
                                    type="text"
                                    placeholder="Rechercher..."
                                    value={searchTerm}
                                    onChange={handleSearch}
                                />
                                <button type="submit" class="submit-btn"><i class="fa fa-search"></i></button>
                            </div>
                        </div>
                    </div>
                </nav>
                <div className="NavFiltre" style={{ display: disNow }} ref={navFiltreRef}>
                    {
                        Array.isArray(predication) && predication
                            .filter((data) => {
                                if (typeof data.titre !== 'string'
                                ) {
                                    return false; // ignore non-string values
                                }
                                return data.titre.toLowerCase().includes(searchTerm.toLowerCase())

                            })
                            .map((pv) => {
                                return (
                                    <>
                                        <Link to={`/VideoD/${pv.id}`} style={{
                                            color
                                                : "black"
                                        }}>
                                            <i className="fa fa-video-camera"> </i>
                                            {pv.titre}
                                        </Link><br />
                                    </>
                                )
                            })
                    }
                </div>
            </div>
        </>


    )
}

export default NavBar;