import React from 'react';
import { Outlet } from 'react-router-dom';
import Home from '../Components/Home/Home';
import Footer from './Footer';
import Header from './Header';
import SkewNav from './SkewNav';

const Main = () => {
    return (
        <div>
            <SkewNav></SkewNav>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;