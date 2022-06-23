import React from 'react';
import {Snackbar} from "@mui/material";
import MuiAlert from '@mui/material/Alert';

export default function AlertPopUp( {props} ) {

    const {vertical, horizontal} = props;

    return (
            <Snackbar
                open={props.openAlert}
                autoHideDuration={props.duration}
                onClose={props.handleAlertClose}
                anchorOrigin={{ vertical, horizontal }}
                TransitionComponent={props.Transition}
                key={vertical + horizontal}
            >
                <MuiAlert
                    onClose={props.handleAlertClose}
                    severity="warning"
                >
                    {props.message}
                </MuiAlert>
            </Snackbar>
    );
}
