import React, { useEffect, useState } from 'react'
import NavBar from '../components/NavBar'
import { useParams } from 'react-router-dom'
import { getVideoId } from '../components/Actions/videoAction';
import dateFormat from 'dateformat';

function VideoDetail() {
    const params = useParams();
    const [videow, setvideo] = useState([]);
    

    useEffect(() => {
        getVideoId(params.id).then((membre) => {
            setvideo(membre);
        }).catch((error) => {
            console.log(error);
        });
    }, []);
    return (
        <>
            <NavBar />
            <div class="banner-area banner-inner-1 bg-black" id="banner">

                <div class="banner-inner pt-5">
                    <div class="container">
                        <div class="row">
                            {
                                <>
                                    <div class="col-lg-12">
                                        <div class="thumb after-left-tops">
                                            <iframe width="700" height="500" src={videow && videow.lien} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                                        </div>
                                    </div>
                                    <div class="col-lg-12 align-self-center">
                                        <div class="banner-details mt-4 mt-lg-0">
                                            <div class="post-meta-single">
                                                <ul style={{ fontFamily: "fantasy" }}>
                                                    <li class="date"><i class="fa fa-clock-o"></i>{videow && dateFormat(videow.created_at, 'dd/mm/yyyy')}</li>
                                                </ul>
                                            </div>
                                            <h2 style={{ fontFamily: "fantasy" }}>{videow && videow.titre}</h2>
                                        </div>
                                    </div>
                                </>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default VideoDetail