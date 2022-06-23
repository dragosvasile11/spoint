import React, {useState} from 'react';
import {Fab} from "@mui/material";
import AddIcon from "@material-ui/icons/Add";

const UploadImage = ( {onChange} ) => {

    return (
        <label htmlFor="upload-photo">
            <input
                style={{ display: "none" }}
                id="upload-photo"
                name="upload-photo"
                type="file"
                onChange={ onChange }
                accept={".gif, .jpg, .jpeg, .png"}
            />
            <Fab
                color="secondary"
                size="small"
                component="span"
                aria-label="add"
                variant="extended"
            >
                <AddIcon /> Upload avatar photo
            </Fab>
        </label>
    );
};

export default UploadImage;
