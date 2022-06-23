import React from 'react';
import LinearProgress from "@mui/material/LinearProgress";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

function LinearProgressWithLabel( { progress_value } ) {
    return (
        <>
        <Box sx={{display: progress_value ? "flex" : "none" , alignItems: 'center', margin: "1vw"}}>
            <Box sx={{ width: '100%', mr: 1 }}>
                <LinearProgress variant="determinate"
                                style={{ borderRadius: "10px" }}
                                color={"warning"}
                                value={progress_value}

                />
            </Box>
            <Box sx={{ minWidth: 35 }}>
                <Typography variant="body2" color="text.secondary">{`${Math.round(
                    progress_value,
                )}%`}</Typography>
            </Box>
        </Box>
        </>
    );
}

export default LinearProgressWithLabel;
