import React, { useEffect, useState } from 'react';
import Cookies from "js-cookie";
import CryptoJS from 'crypto-js';
import { Navigate, Outlet } from 'react-router-dom';
// import { Secret_key } from '../Constant/index';
import { useNavigate } from 'react-router-dom';




const ProtectedRoutes = (props) => {

    const { allowedRoles } = props;
    const navigate = useNavigate();
    const token = Cookies.get("jwt_token");
    const userRole = Cookies.get("role");

    useEffect(() => {
        if (token !== undefined) {
            // const decrypted = CryptoJS.AES.decrypt(token, Secret_key).toString(CryptoJS.enc.Utf8);
        } else if (token === undefined) {
            navigate("/");
        }
    }, [token])


    return token !== undefined ? (
        userRole === allowedRoles ? (
            <Outlet />
        ) : (
            <Navigate to="/" />
        )
    ) : (
        <Navigate to="/" />
    );
}

export default ProtectedRoutes;
