import React from 'react';
import {Outlet} from 'react-router-dom';

const Layout = () => {
    return (
        <div className='wrapper'>
            <Outlet/>
        </div>
    );
};

export {Layout};