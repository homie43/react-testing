import { Routes, Route } from 'react-router';
import AboutPage from '../pages/AboutPage';
import MainPage from '../pages/MainPage';
import Users from '../users/Users';
import ErrorPage from '../pages/ErrorPage';
import UserDeatilsPage from '../users/UserDeatilsPage';

import React from 'react';

const AppRouter = () => {
    return (
        <div>
            <Routes>
                <Route path='/about' element={<AboutPage />} />
                <Route path='/' element={<MainPage />} />
                <Route path='/*' element={<ErrorPage />} />
                <Route path='/users/' element={<Users />} />
                <Route path='/users/:id' element={<UserDeatilsPage />} />
            </Routes>
        </div>
    );
};

export default AppRouter;
