import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header/Header';
import Nav from '../components/Nav/Nav';

const Main = () => {
    return (
        <div>
            <Nav></Nav>
            <div className='flex-column md:flex justify-center gap-3 md:m-9'>
                <Header></Header>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Main;