import React from 'react';
import {Link} from "react-router-dom";

const PageNotFound404 = () => {

    return (
        <>
            <Link to={"/"} aria-current="page">
                <img src={"/NotFound404.gif"} alt={"page not found"} style={imgStyle}></img>
            </Link>

            {/*<div style={textStyle}>*/}
            {/*    <h3>Oops.. looks like you got lost</h3>*/}
            {/*    <h4>Get back home by clicking the air balloon</h4>*/}
            {/*</div>*/}
        </>
    );
}

const textStyle = {
    display: "fixed",
    textAlign: "center",
}

const imgStyle = {
    display: "block",
    width: "40%",
    marginLeft: "auto",
    marginRight: "auto",
    paddingTop: "15vh"
}

export default PageNotFound404;
