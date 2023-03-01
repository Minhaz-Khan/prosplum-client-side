import React, { useContext } from 'react';
import { Triangle } from 'react-loader-spinner';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider/AuthProvider';

const PrivetRoute = ({ children }) => {
    const { user, isLoading } = useContext(AuthContext);
    const location = useLocation();
    if (isLoading) {
        <Triangle
            height="80"
            width="80"
            color="blue"
            ariaLabel="triangle-loading"
            wrapperStyle={{}}
            wrapperClassName=""
            visible={true}
        />
    }

    if (user) {
        return children;
    }
    else {
        return <Navigate to={'/login'} state={{ from: location }}></Navigate>
    }
};

export default PrivetRoute;