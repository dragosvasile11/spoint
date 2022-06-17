import React from 'react';
import {getCookieObject} from "./Contexts/Cookies";
import {Outlet, Navigate} from "react-router";

const UserPages = () => {

    return getCookieObject("loginToken") ? <Outlet/> : <Navigate to={"/"} />
}

export default UserPages;
