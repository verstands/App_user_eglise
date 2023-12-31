import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from '../pages/Login';
import Home from '../pages/Home';
import Predication from '../pages/Predication';
import About from '../pages/About';
import Don from '../pages/Don';
import Evenements from '../pages/Evenements';
import Profile from '../pages/Profile';
import Detail from '../pages/Detail';
import Paiement from '../pages/Paiement';
import Page404 from '../pages/Page404';
import Enregistrer from '../pages/Enregistrer';
import Ggroupe from '../pages/Ggroupe';
import VideoDetail from '../pages/VideoDetail';
class IndexRoute extends Component {
    render(){
        return(
            <Routes>
                <Route path="/"  element={<Home />} />
                <Route path="/login"  element={<Login />} />
                <Route path="/home"  element={<Home />} />
                <Route path="/evenements"  element={<Evenements />} />
                <Route path="/predication"  element={<Predication />} />
                <Route path="/eglise"  element={<About />} />
                <Route path="/don"  element={<Don />} />
                <Route path="/profile"  element={<Profile />} />
                <Route path="/detail/:id"  element={<Detail />} />
                <Route path="/mespaiement"  element={<Paiement />} />
                <Route path="/register"  element={<Enregistrer />} />
                <Route path="/chat"  element={<Ggroupe />} />
                <Route path="/VideoD/:id"  element={<VideoDetail />} />
                <Route path="/*"  element={<Page404 />} />
            </Routes> 
        );
    }
}

export default IndexRoute;