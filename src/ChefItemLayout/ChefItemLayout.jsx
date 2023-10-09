import React from 'react';
import Header from '../components/Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer/Footer';

const ChefItemLayout = () => {
    return (
        <div>
            <Header></Header>
             <Outlet></Outlet>
             <Footer></Footer>
        </div>
    );
};

<Header></Header>
export default ChefItemLayout;