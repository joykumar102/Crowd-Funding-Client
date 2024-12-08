import React from 'react';
import Navbar from '../assets/Components/Navbar/Navbar';
import Footer from '../assets/Components/Navbar/Footer/Footer';
import { Outlet } from 'react-router-dom';

const MainLayouts = () => {
    return (
        <div>
            {/* navbal */}
                <Navbar></Navbar>


            {/* dynamic section */}
            <div className='min-h-[345px] '>
                <Outlet></Outlet>
            </div>


            {/* footer  */}
            <Footer></Footer>
        </div>
    );
};

export default MainLayouts;