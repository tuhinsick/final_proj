import React from 'react';
import Header from '../shared/Header/Header';
import { Outlet } from 'react-router-dom';
//use rsc to create this automatically
const LessonsLayout = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default LessonsLayout;