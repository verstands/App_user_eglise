import React, { useEffect, useState } from 'react'
import NavBar from '../components/NavBar'
import VideoList from './Videos'
import { getVideo, getVideoseul } from '../components/Actions/videoAction';
import dateFormat from 'dateformat';

const Predication = () => {
    const [video, setvideo] = useState([]);
    const [videoseul, setvideoseul] = useState('');
    const [selectedVideo, setSelectedVideo] = useState('');

    useEffect(() => {
        getVideo().then((membre) => {
            setvideo(membre);
        }).catch((error) => {
            console.log(error);
        });
    }, []);

    useEffect(() => {
        getVideoseul().then((membre) => {
            setvideoseul(membre);
        }).catch((error) => {
            console.log(error);
        });
    }, []);

    const handleVideoClick = (url) => {
        setSelectedVideo(url);
    }

    function toggleFullScreen() {
        const iframe = document.querySelector('iframe');
        if (iframe) {
          if (iframe.requestFullscreen) {
            iframe.requestFullscreen();
          } else if (iframe.mozRequestFullScreen) {
            iframe.mozRequestFullScreen();
          } else if (iframe.webkitRequestFullscreen) {
            iframe.webkitRequestFullscreen();
          } else if (iframe.msRequestFullscreen) {
            iframe.msRequestFullscreen();
          }
        }
      }
    return (
        <>
            <NavBar />
            <div class="banner-area banner-inner-1 bg-black" id="banner">

                <div class="banner-inner pt-5">
                    <div class="container">
                        <div class="row">
                            {

                                <>
                                    <div class="col-lg-6">
                                        <div class="thumb after-left-tops">
                                            <iframe width="560" height="315" src={videoseul.lien} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                                        </div>
                                    </div>
                                    <div class="col-lg-6 align-self-center">
                                        <div class="banner-details mt-4 mt-lg-0">
                                            <div class="post-meta-single">
                                                <ul>
                                                    <button className='btn btn-primary' onClick={toggleFullScreen}>Activer le mode plein écran</button>
                                                    <li class="date"><i class="fa fa-clock-o"></i>{dateFormat(videoseul.created_at, 'dd/mm/yyyy')}</li>
                                                </ul>
                                            </div>
                                            <h2>{videoseul.titre}</h2>
                                        </div>
                                    </div>
                                </>
                            }
                        </div>
                    </div>
                </div>

                <div class="container">
                    <div class="row">
                        {video.map((vd) => {
                            return (
                                <div class="col-lg-3 col-sm-6">
                                    <div class="single-post-wrap style-white">
                                        <div class="thumb">
                                            <div className="video-overlay">
                                                <button className="btn-video" onClick={() => handleVideoClick(vd.lien)}>.</button>
                                            </div>
                                            <iframe width="560" height="315" src={vd.lien} title="Lecteur vidéo YouTube" frameborder="0" allow="accéléromètre ; lecture automatique ; écriture dans le presse-papiers ; média chiffré ; gyroscope ; image dans l'image" allowfullscreen></iframe>
                                            <div className="modal" style={{ display: selectedVideo ? 'block' : 'none' }}>
                                                <div className="modal-content">
                                                    <span className="close" style={{color : "white"}} onClick={() => setSelectedVideo('')}>sssss</span>
                                                    <iframe style={{width : '100%'}} width="10" height="100%" src={vd.lien} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="details">
                                            <h6 class="title"><a href="#">{vd.titre}</a></h6>
                                            <div class="post-meta-single mt-3">
                                                <ul>
                                                    <li><i class="fa fa-clock-o"></i>{dateFormat(vd.created_at, 'dd/mm/yyyy')}</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
            <div className="modal" style={{ display: selectedVideo ? 'block' : 'none' }}>
                <div className="modal-content">
                    <span className="close" onClick={() => setSelectedVideo('')}>&times;</span>
                    <iframe width="560" height="315" src={selectedVideo} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
            </div>

            <style>
                {`
            .frame {
                position : relative;
                width  : 100%
                background : yellow;
            }
          .modal {
            display: none;
            position: fixed;
            z-index: 1;
            padding-top: 100px;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            overflow: auto;
            background-color: rgba(0, 0, 0, 0.9);
          }

          .modal-content {
            margin: auto;
            display: block;
            width: 100%;
            max-width: 700px;
            background-color: black;
          }

          .close {
            color: #fff;
            float: right;
            font-size: 28px;
            font-weight: bold;
            cursor: pointer;
            background: red;
          }

          .close:hover,
          .close:focus {
            color: #bbb;
            text-decoration: none;
            cursor: pointer;
          }

          .video-overlay {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            z-index: 1;
          }

          .btn-video {
            background-color: transparent;
            border: none;
            color: #fff;
            font-size: 24px;
            cursor: pointer;
          }
        `}
            </style>
        </>
    )
}

export default Predication