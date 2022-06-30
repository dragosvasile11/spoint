import React from 'react';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';

const BackButton = ({ backToLink }) => {
    return (
        <div>
            <a className="hover-button scrollto active btn-floating m-1 btn" href={ backToLink }>
                <ArrowCircleLeftIcon style={{color: "FFA900"}} fontSize="large"/>
            </a>
        </div>
    );
};

export default BackButton;
