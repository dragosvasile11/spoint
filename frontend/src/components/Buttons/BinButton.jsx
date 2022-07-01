import React from 'react';
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";

const BinButton = ({ display, onClick }) => {
    return (
        <>
            <IconButton
                style={ {display: display ? "" : "none" }}
                aria-label="delete"
                onClick={onClick}
                color={"warning"}
            >
                <DeleteIcon/>
            </IconButton>
        </>
    );
};

export default BinButton;
