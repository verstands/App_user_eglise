import React, { useEffect, useState } from 'react';
import NavBar from '../components/NavBar';
import { Link } from 'react-router-dom';
import { getEvenement, getEvenementTous } from '../components/Actions/evenementAction';

const Evenements = () => {
    const [profile, setProfile] = useState([]);


    useEffect(() => {
        getEvenementTous().then((membre) => {
            setProfile(membre);
        }).catch((error) => {
            console.log(error);
        });
    }, []);
    return (
        <>
            <NavBar />
            <br />
            <h4 className='text-center' style={{ fontFamily: "fantasy" }}>Les evenements</h4>
            <div class="bg-sky pd-top-80 pd-bottom-50" id="latest">
                <div class="container">
                    <div class="row">
                        {
                            profile.map((eve) => {
                                return (
                                    <div class="col-lg-4 col-sm-6">
                                        <div class="single-post-wrap">
                                            <div class="thumb">
                                                <img src= {eve.image} width={300} height={300}/>
                                                <p class="btn-date"><i class="fa fa-clock-o"></i>{eve.date}</p>
                                            </div>
                                            <div class="details">
                                                <h6 class="title"><Link to={`/detail/${eve.id}`}>{eve.titre.slice(0, 100)}...</Link></h6>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                    {
                        profile.length <= 0 && (
                            <p className='text-center' style={{ fontFamily: "fantasy" }}> <i className='fa fa-pulse fa-spinner'> </i></p>
                        )
                    }
                </div>
            </div>
        </>
    )
}

export default Evenements