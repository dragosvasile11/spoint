import React from "react";

const SunglassesButton = ({ onClick }) => {

    const SUNGLASSES_STYLE = {
        position: 'absolute',
        zIndex: '1',
        alignSelf: 'flex-end',
        marginTop: '-97vh',
        marginRight: '95%',
        background: "none",
        border: "none",
        padding:'10px',
        paddingTop: '0',
        color:'#FFA900'
    }

    return (
        <div id='sunglasses'>
            <button className='hover-button' type='button' onClick={() => onClick()} style={SUNGLASSES_STYLE}>
                <i className="fas fa-glasses fa-4x"></i>
            </button>
        </div>
    );
};

export default SunglassesButton;
