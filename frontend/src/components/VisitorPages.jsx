import React from 'react';
import {getCookie} from "./Contexts/Cookies";
import {Outlet, Navigate} from "react-router";

const VisitorPages = () => {

    return getCookie("loginToken") ? <Navigate to={"../gameplay/"}/> : <Outlet/>
}

export default VisitorPages;
