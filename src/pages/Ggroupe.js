import React, { useEffect, useState } from 'react'
import NavBar from '../components/NavBar'
import { getGroupe, getSeulGroupe } from '../components/Actions/groupeAction';
import { Link } from 'react-router-dom';
import { addChat, getChatInterne } from '../components/Actions/chatAction';
import { getProfile } from '../components/Actions/ProfileAction';
import moment from 'moment';

function Ggroupe() {
    const [groupe, setgroupe] = useState([]);
    const [chat, setchat] = useState([]);
    const [activeMessage, setactiveMessage] = useState('none');
    const [profile, setProfile] = useState([]);
    const [groupeId, setgroupeId] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [champchat, setchampchat] = useState('');
    const [idgroupe, setidgroupe] = useState('');
    const [activeCss, setactiveCss] = useState(null);
    const [showIcon, setShowIcon] = useState(false);

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
    };
    const handleOnclick = (id) => {
        setidgroupe(id)
        setactiveCss(id)
        getChatInterne(id).then((membre) => {
            setchat(membre)
            setactiveMessage('block')
        }).catch((error) => {
            console.log(error);
        });

        getProfile().then((membre) => {
            setProfile(membre)
        }).catch((error) => {
            console.log(error);
        });

        getSeulGroupe(id).then((membre) => {
            setgroupeId(membre);
        }).catch((error) => {
            console.log(error);
        });

    }

    useEffect(() => {
        getGroupe().then((membre) => {
            setgroupe(membre);
        }).catch((error) => {
            console.log(error);
        });
    }, []);


    const formatDate = (date) => {
        const today = moment().startOf('day');
        const yesterday = moment().subtract(1, 'day').startOf('day');
        const messageDate = moment(date);
        const messageDateTime = moment(date);

        if (messageDate.isSame(today, 'd')) {
            return messageDateTime.format('HH:mm');
        } else if (messageDate.isSame(yesterday, 'd')) {
            return 'Hier' + messageDateTime.format('HH:mm');
        } else {
            return messageDate.format('DD/MM/YYYY');
        }
    };

    const Envoie = async (e) => {
        e.preventDefault();
        const postData = {
            id_groupe: idgroupe,
            recever: idgroupe,
            send: profile.id,
            message: champchat,
        }
        addChat(postData)

        try {
            const membre = await getChatInterne(idgroupe); // Remplacez id par la valeur appropriée
            setchat(membre);
            setactiveMessage('block');
        } catch (error) {
            console.log(error);
        }
    }

    const handleMouseEnter = () => {
        setShowIcon(true);
    };

    const handleMouseLeave = () => {
        setShowIcon(false);
    };
    const [showDropdown, setShowDropdown] = useState(false);
    const handleIconClick = () => {
        setShowDropdown(!showDropdown);
    };

    return (
        <>
            <NavBar />
            <br />
            <div class="container-fluid h-100">
                <div class="row justify-content-center h-100">
                    <div class="col-md-4 col-xl-3 chat"><div class="card mb-sm-3 mb-md-0 contacts_card">
                        <div class="card-header">
                            <h5 style={{ fontFamily: 'fantasy' }}>Les groupes de l'eglise</h5>
                            <div class="input-group">
                                <input
                                    type="text"
                                    placeholder="Recherche..."
                                    className="form-control"
                                    value={searchTerm}
                                    onChange={handleSearch}
                                />
                                <div class="input-group-prepend">
                                    <span class="input-group-text search_btn"><i class="fa fa-search"></i></span>
                                </div>
                            </div>
                        </div>
                        <div class="card-body contacts_body">
                            <ui class="contacts">
                                {

                                    Array.isArray(groupe) && groupe
                                        .filter((data) => {
                                            if (typeof data.nom_groupe !== 'string'
                                            ) {
                                                return false; // ignore non-string values
                                            }
                                            return data.nom_groupe.toLowerCase().includes(searchTerm.toLowerCase())

                                        })
                                        .map((gp, index) => {
                                            return (
                                                <Link onClick={() => handleOnclick(gp.id)}>
                                                    <li className={activeCss === gp.id ? "active" : ""}>
                                                        <div class="d-flex bd-highlight">
                                                            <div class="img_cont">
                                                                <img src="https://static.turbosquid.com/Preview/001292/481/WV/_D.jpg" class="rounded-circle user_img" />
                                                                <span class="online_icon"></span>
                                                            </div>
                                                            <div class="user_info">
                                                                <span>{gp.nom_groupe}</span>
                                                                <p>Kalid</p>
                                                            </div>
                                                        </div>
                                                    </li>
                                                </Link>
                                            )
                                        })
                                }
                            </ui>
                            {
                                groupe.length <= 0 && (
                                    <i className='fa fa-pulse fa-spinner'></i>
                                )
                            }
                        </div>
                        <div class="card-footer"></div>
                    </div></div>
                    <div class="col-md-8 col-xl-6 chat" >
                        <div class="card" style={{ display: activeMessage }}>
                            <div class="card-header msg_head" >
                                <div class="d-flex bd-highlight">
                                    <div class="img_cont">
                                        <img src="https://static.turbosquid.com/Preview/001292/481/WV/_D.jpg" class="rounded-circle user_img"/>
                                        <span class="online_icon"></span>
                                    </div>
                                    <div class="user_info">
                                        <span style={{ fontWeight: 'bolder' }}>{groupeId.nom_groupe}</span>
                                        <p>{chat.length} Messages</p>
                                    </div>
                                    <div class="video_cam">
                                        <span><i class="fa fa-video-camera" style={{ color: 'red' }}></i></span>
                                        <span><i class="fa fa-phone" style={{ color: 'red' }}></i></span>
                                    </div>
                                </div>
                                <span id="action_menu_btn"><i class="fa fa-ellipsis-v" style={{ color: 'red' }}></i></span>
                                <div class="action_menu">
                                    <ul>
                                        <li><i class="fa fa-user-circle"></i> View profile</li>
                                        <li><i class="fa fa-users"></i> Add to close friends</li>
                                        <li><i class="fa fa-plus"></i> Add to group</li>
                                        <li><i class="fa fa-ban"></i> Block</li>
                                    </ul>
                                </div>
                            </div>
                            <div class="card-body msg_card_body NavFiltres">
                                {
                                    Array.isArray(chat) && chat.map((ms) => {
                                        const isMyMessage = ms.send.id === profile.id; // Vérifier si c'est mon message
                                        return (
                                            <div class={isMyMessage ? "d-flex justify-content-end mb-4" : "d-flex justify-content-start mb-4"}>
                                                {!isMyMessage && (
                                                    <div class="img_cont_msg">
                                                        <img src="https://static.turbosquid.com/Preview/001292/481/WV/_D.jpg" class="rounded-circle user_img_msg" />
                                                    </div>
                                                )}
                                                <div className={isMyMessage ? "msg_cotainer_send" : "msg_cotainer"} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                                                    {ms.message}
                                                    <i className={`fa btn fa-ellipsis-v dropdown ${showDropdown ? 'active' : ''}`} onClick={handleIconClick}></i>
                                                    {showDropdown && (
                                                        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                                            <a class="dropdown-item" href="#">Action</a>
                                                            <a class="dropdown-item" href="#">Another action</a>
                                                            <a class="dropdown-item" href="#">Something else here</a>
                                                        </div>
                                                    )}
                                                    <span class={isMyMessage ? "msg_time_send" : "msg_time"}>{ms.send.id === isMyMessage ? formatDate(ms.created_at) : formatDate(ms.created_at)}</span>
                                                </div>
                                            </div>
                                        );
                                    })
                                }
                            </div>
                            <form action="">
                                <div class="card-footer">
                                    <div class="input-group">
                                        <div class="input-group-append">
                                            <span class="input-group-text attach_btn"><i class="fa fa-paperclip"></i></span>
                                        </div>

                                        <textarea name="" onChange={(e) => setchampchat(e.target.value)} class="form-control type_msg" placeholder="Tapez un mesaage..."></textarea>
                                        <div class="input-group-append">

                                            <span class="input-group-text send_btn">
                                                <button onClick={(e) => Envoie(e)}>
                                                    <i class="fa fa-location-arrow"></i>
                                                </button>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                        {
                            chat.length <= 0 && (
                                <h5>Message</h5>
                            )
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Ggroupe