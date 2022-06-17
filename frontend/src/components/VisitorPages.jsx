import React from 'react';
import {getCookieObject} from "./Contexts/Cookies";
import {Outlet, Navigate} from "react-router";

const VisitorPages = () => {

    return getCookieObject("loginToken") ? <Navigate to={"../gameplay/"}/> : <Outlet/>
}

export default VisitorPages;
