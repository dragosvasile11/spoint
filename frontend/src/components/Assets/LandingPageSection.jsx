import React from 'react';

const LandingPageSection = ({ image, title, description, textVerticalPosition }) => {

    const textPosition = {
        display: "inline-block",
        float: textVerticalPosition,
        margin: "5%",
        width: "50%"
    }

    return (
        <div style={{ padding: "50px" }}>
            <img src={image} alt={"icon"} style={imageSize}/>
            <div style={textPosition}>
                <h2><b>{title}</b></h2>
                <br/>
                <h5 >{description}</h5>
            </div>
        </div>
    );

};

const imageSize = {
    width: "35%",
}

export default LandingPageSection;
