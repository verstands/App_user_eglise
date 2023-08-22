import React, { useEffect, useState } from 'react'
import NavBar from '../components/NavBar'
import { getEvenement, getSeulEvenement } from '../components/Actions/evenementAction';
import { Link } from 'react-router-dom';
import { Skeleton } from '@mui/material';

const Home = () => {
    const [seulEvenement, setseulEvenement] = useState([]);
    const [Evenement, setEvenement] = useState([]);
    const [loading, setloading] = useState(true);

    function convertImageToBase64(imageUrl) {
        return new Promise((resolve, reject) => {
            const img = new Image();
            img.crossOrigin = 'anonymous';

            img.onload = () => {
                const canvas = document.createElement('canvas');
                canvas.width = img.width;
                canvas.height = img.height;

                const ctx = canvas.getContext('2d');
                ctx.drawImage(img, 0, 0);

                const dataURL = canvas.toDataURL('image/png');
                resolve(dataURL);
            };

            img.onerror = reject;
            img.src = imageUrl;
            alert(img.src);
        });
    }

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
            setloading(false)
        }).catch((error) => {
            console.log(error);
        });
    }, []);

    const [imageBase64, setImageBase64] = useState('');
    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        const reader = new FileReader();
    
        reader.onloadend = () => {
          const base64String = reader.result;
          setImageBase64(base64String);
        };
    
        if (file) {
          reader.readAsDataURL(file);
        }

        alert(imageBase64)
        console.log(imageBase64)
      };
    return (
        <>
            <NavBar />
            <div style={{display : 'none'}}>
                <input type="file" accept="image/*" onChange={handleImageUpload} />
                {imageBase64 && (
                    <img src={imageBase64} alt="Uploaded" style={{ maxWidth: '200px' }} />
                )}
                <img src={imageBase64} alt="Uploaded" style={{ maxWidth: '200px' }} />

            </div>
            <div class="bg-sky pd-top-80 pd-bottom-50" id="latest">
                <div class="container">
                   <h4 style={{fontFamily : 'fantasy'}}>Les evenements recents</h4>
                   <br />
                    <div class="row">
                        {
                            <div class="col-lg-3 col-sm-6">
                                <div class="single-post-wrap style-overlay-bg">
                                    <div class="thumb">
                                        <img src={seulEvenement.image} alt="img"  />
                                    </div>
                                    <div class="details">
                                        <div class="post-meta-single mb-3">
                                            <ul>
                                                <li><Link class="tag-base tag-blue" to={`/detail/${seulEvenement.id}`}>Voir plus</Link></li>
                                                <li>
                                                    {seulEvenement && seulEvenement.date && (
                                                        <i class="fa fa-clock-o"> {seulEvenement.date.slice(0, 20)}</i>
                                                    )}
                                                </li>
                                            </ul>
                                        </div>
                                        <h6 style={{ fontFamily: "fantasy" }} className="title">
                                            {seulEvenement && seulEvenement.titre && (
                                                <Link to={`/detail/${seulEvenement.id}`}>
                                                    {seulEvenement.titre.slice(0, 20)}...
                                                </Link>
                                            )}
                                        </h6>
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
                                                        <img src={evTs.image}/>
                                                        <p class="btn-date"><i class="fa fa-clock-o"></i>{evTs.date}</p>
                                                    </div>
                                                    <div class="details">
                                                        <h6 class="title"><Link style={{ fontFamily: "fantasy" }} to={`/detail/${evTs.id}`}>{evTs.titre.slice(0, 45)}...</Link></h6>
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
                    <Link to='/evenements' style={{ fontFamily: "fantasy" }} className='btn btn-primary'>Voir plus</Link>
                </div>
            </div>
        </>
    )
}

export default Home