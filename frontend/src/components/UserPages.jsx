import React from 'react';
import {getCookie} from "./Contexts/Cookies";
import {Outlet, Navigate} from "react-router";

const UserPages = () => {

    return getCookie("loginToken") ? <Outlet/> : <Navigate to={"/"} />
}

export default UserPages;
