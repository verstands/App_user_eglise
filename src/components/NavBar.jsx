import { colors } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getProfile } from "./Actions/ProfileAction";

const NavBar = () => {
    const [profile, setProfile] = useState([]);

    useEffect(() => {
        getProfile().then((membre) => {
            setProfile(membre);
        }).catch((error) => {
            console.log(error);
        });
    }, []);
    return (
        <>
            <div class="td-search-popup" id="td-search-popup">
                <form action="index.html" class="search-form">
                    <div class="form-group">
                        <input type="text" class="form-control" placeholder="Search....." />
                    </div>
                    <button type="submit" class="submit-btn"><i class="fa fa-search"></i></button>
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
                            <div class="col-lg-6 col-md-5 mt-2 mt-md-0 text-md-right text-center">
                                <div class="topbar-social">
                                    <ul class="social-area social-area-2">
                                        
                                        <Link to='/profile' style={{color : 'white', fontFamily : "fantasy"}}>
                                            <i className="fa fa-user-circle" style={{ fontSize: 25, color : "white" }}> </i>
                                            {profile.prenom } { profile.nom }
                                        </Link>
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
                                    <a class="main-logo" href="index.html"><img src="assets/img/logo.png" alt="img" /></a>
                                </div>
                            </div>
                            <div class="col-xl-6 col-lg-7 text-md-right text-center">
                            <strong  style={{color: "white"}}>(1 Jean 4 : 7-8)</strong>
                                <p style={{ fontFamily: "fantasy", color: "white" }}>
                                    Bien-aimés, aimons nous les uns les autres; car l'amour est de Dieu, et quiconque aime est né de Dieu et connaît Dieu.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <nav class="navbar navbar-expand-lg">
                    <div class="container nav-container">
                        <div class="responsive-mobile-menu">
                            <div class="logo d-lg-none d-block">
                                <a class="main-logo" href="index.html"><img src="assets/img/logo.png" alt="img" /></a>
                            </div>
                            <button class="menu toggle-btn d-block d-lg-none" data-target="#nextpage_main_menu"
                                aria-expanded="false" aria-label="Toggle navigation">
                                <span class="icon-left"></span>
                                <span class="icon-right"></span>
                            </button>
                        </div>
                        <div class="nav-right-part nav-right-part-mobile">
                            <a class="search header-search" href="#"><i class="fa fa-search"></i></a>
                        </div>
                        <div class="collapse navbar-collapse" id="nextpage_main_menu">
                            <ul class="navbar-nav menu-open" style={{fontFamily : "fantasy"}}>
                                <li class="current-menu-item">
                                    <Link to="/home">Accueil</Link>
                                </li>
                                <li class="current-menu-item">
                                    <Link to="/evenements">Evenements</Link>
                                </li>
                                <li class="current-menu-item">
                                    <Link to="/predication">Predications</Link>
                                </li>
                                <li class="current-menu-item">
                                    <Link to="/eglise">Notre eglise</Link>
                                </li>
                                <li class="">
                                    <Link to="/don">Don</Link>
                                </li>
                            </ul>
                        </div>
                        <div class="nav-right-part nav-right-part-desktop">
                            <div class="menu-search-inner">
                                <input type="text" placeholder="Search For" />
                                <button type="submit" class="submit-btn"><i class="fa fa-search"></i></button>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </>

        
    )
}

export default NavBar;