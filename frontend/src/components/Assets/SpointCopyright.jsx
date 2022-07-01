import React from 'react';
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";

function SpointCopyright(props, {color}) {

    return (
        <>

            <Typography variant="body2" color="text.secondary" align="center" bottom={"0px"} fontSize={"1vw"} {...props}>
                {'Copyright © '}
                <Link color={ color ? color : "inherit"}
                      href="/about"
                      className="text-warning"
                >
                    Spoint
                </Link>{' '}
                {new Date().getFullYear()}
                {'.'}
            </Typography>
        </>
    );
}

export default SpointCopyright;
