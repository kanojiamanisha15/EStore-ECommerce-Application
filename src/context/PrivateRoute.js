import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from './AuthProvider';
import HomePage from '../pages/HomePage';

const PrivateRoute = () => {
    const { user } = useAuth();

    return (
        user ? (
            <HomePage />
        ) : (
            <Navigate to="/" />
        )
    );
};

export default PrivateRoute;