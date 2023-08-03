import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from '../pages/Login';
import Home from '../pages/Home';
import Predication from '../pages/Predication';
import About from '../pages/About';
import Don from '../pages/Don';
class IndexRoute extends Component {
    render(){
        return(
            <Routes>
                <Route path="/"  element={<Login />} />
                <Route path="/home"  element={<Home />} />
                <Route path="/predication"  element={<Predication />} />
                <Route path="/eglise"  element={<About />} />
                <Route path="/don"  element={<Don />} />
            </Routes> 
        );
    }
}

export default IndexRoute;