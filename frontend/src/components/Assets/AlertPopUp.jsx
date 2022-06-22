import React from 'react';
import {Snackbar} from "@mui/material";

export default function AlertPopUp() {
    const [open, setOpen] = React.useState(false);

    const handleClick = () => {
        setOpen(true);
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };

    return (
            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                <AlertPopUp onClose={handleClose} severity="error" sx={{ width: '100%' }}>
                    This is a success message!
                </AlertPopUp>
            </Snackbar>
    );
}
