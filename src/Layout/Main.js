import React from 'react';
import { Outlet } from 'react-router-dom';
import Home from '../Components/Home/Home';
import ScrollToTop from '../Hooks/ScrollToTop';
import Footer from './Footer';
import Header from './Header';
import SkewNav from './SkewNav';

const Main = () => {
    return (
        <ScrollToTop>
            <SkewNav></SkewNav>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </ScrollToTop>
     
    );
};

export default Main;