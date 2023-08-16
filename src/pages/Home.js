import React, { useEffect, useState } from 'react'
import NavBar from '../components/NavBar'
import { getEvenement, getSeulEvenement } from '../components/Actions/evenementAction';
import { Link } from 'react-router-dom';

const Home = () => {
    const [seulEvenement, setseulEvenement] = useState([]);
    const [Evenement, setEvenement] = useState([]);

    useEffect(() => {
        getSeulEvenement().then((membre) => {
            setseulEvenement(membre);
        }).catch((error) => {
            console.log(error);
        });
    }, []);

    useEffect(() => {
        getEvenement().then((membre) => {
            setEvenement(membre);
        }).catch((error) => {
            console.log(error);
        });
    }, []);
    return (
        <>
            <NavBar />
            <div class="bg-sky pd-top-80 pd-bottom-50" id="latest">
                <div class="container">
                    <div class="row">
                        {
                            <div class="col-lg-3 col-sm-6">
                                <div class="single-post-wrap style-overlay-bg">
                                    <div class="thumb">
                                        <img src="assets/img/post/9.png" alt="img" />
                                    </div>
                                    <div class="details">
                                        <div class="post-meta-single mb-3">
                                            <ul>
                                                <li><a class="tag-base tag-blue" href="cat-fashion.html">Date</a></li>
                                                <li><p><i class="fa fa-clock-o"></i>{seulEvenement.date}</p></li>
                                            </ul>
                                        </div>
                                        <h6 style={{ fontFamily: "fantasy" }} class="title"><Link to={`/detail/${seulEvenement.id}`}>{seulEvenement && seulEvenement.titre && seulEvenement.titre.slice(0, 20)}...</Link></h6>
                                    </div>
                                </div>
                            </div>
                        }
                        <div class="col-lg-6 col-sm-6">
                            <div className="row">
                                {
                                    Evenement.map((evTs) => {
                                        return (
                                            <div className="col-md-6">
                                                <div class="single-post-wrap">
                                                    <div class="thumb">
                                                        <img src="assets/img/post/10.png" alt="img" />
                                                        <p class="btn-date"><i class="fa fa-clock-o"></i>{evTs.date}</p>
                                                    </div>
                                                    <div class="details">
                                                        <h6 class="title"><Link style={{ fontFamily: "fantasy" }} to={`/detail/${evTs.id}`}>{evTs.titre.slice(0, 25)}...</Link></h6>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                                
                            </div>
                        </div>

                        <div class="col-lg-3 col-sm-6">
                            <div class="trending-post style-box">
                                <div class="section-title">
                                    <h6 class="title" style={{ fontFamily: "fantasy" }}>Rejoignez-nous</h6>
                                </div>
                                <div class="social-area-list mb-4">
                                    <ul>
                                        <li><a class="facebook" href="#"><i class="fa fa-facebook social-icon"></i><span>12,300</span><span>Like</span> <i class="fa fa-plus"></i></a></li>
                                        <li><a class="twitter" href="#"><i class="fa fa-twitter social-icon"></i><span>12,600</span><span>Followers</span> <i class="fa fa-plus"></i></a></li>
                                        <li><a class="youtube" href="#"><i class="fa fa-youtube-play social-icon"></i><span>1,300</span><span>Subscribers</span> <i class="fa fa-plus"></i></a></li>
                                        <li><a class="instagram" href="#"><i class="fa fa-instagram social-icon"></i><span>52,400</span><span>Followers</span> <i class="fa fa-plus"></i></a></li>
                                        <li><a class="google-plus" href="#"><i class="fa fa-google social-icon"></i><span>19,101</span><span>Subscribers</span> <i class="fa fa-plus"></i></a></li>
                                    </ul>
                                </div>
                                <div class="add-area">
                                    <a href="#"><img class="w-100" src="assets/img/add/6.png" alt="img" /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <a href='/evenements' style={{ fontFamily: "fantasy" }} className='btn btn-primary'>Voir plus</a>
                </div>
            </div>
        </>
    )
}

export default Home