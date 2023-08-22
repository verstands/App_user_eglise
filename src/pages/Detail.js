import React, { useEffect, useState } from 'react'
import NavBar from '../components/NavBar'
import { getEvenementId, getEvenementTous } from '../components/Actions/evenementAction';
import { useParams } from 'react-router-dom';

const Detail = () => {
    const [profile, setProfile] = useState([]);
    const param = useParams('id')

    useEffect(() => {
        getEvenementId(param.id).then((membre) => {
            setProfile(membre);
        }).catch((error) => {
            console.log(error);
        });
    }, []);

    return (
        <>
            <NavBar />
            <div class="banner-inner pt-5">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-6">
                        <div class="thumb after-left-top">
                            <img src={profile.image} alt="img" />
                        </div>
                        </div>
                        <div class="col-lg-6 align-self-center">
                            <div class="banner-details mt-4 mt-lg-0">
                                <div class="post-meta-single">
                                    <ul>
                                        <li style={{ fontFamily: "fantasy", color: "black" }} class="date"><i class="fa fa-clock-o"></i>{profile.date}</li>
                                    </ul>
                                </div>
                                <h2 style={{ fontFamily: "fantasy", color: "black" }}>{profile.titre}</h2>
                                <p style={{ fontFamily: "fantasy", color: "black" }}>{profile.text}</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Detail