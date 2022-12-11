import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Component/Header/Header';

const ProjectLayout = () => {
    return (
        <div>
            <Header/>
            <Outlet/>
        </div>
    );
};

export default ProjectLayout;