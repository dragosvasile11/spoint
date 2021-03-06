import React, {useState} from 'react';
import {MDBBtn} from "mdb-react-ui-kit";
import TestMap from "./ResultsPageMap/TestMap";

const modalStyles = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    width: '900px',
    height: '450px',
    transform: 'translate(-50%, -50%)',
    padding: '50px',
    zIndex: 1000
}

const overlayStyles = {
    position: 'fixed',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    backgroundColor: 'rgba(0, 0, 0, .7)',
    zIndex: 1000
}

const Modal = ({ open, position, onClose}) => {

    if (!open) return null

    return (
        <>
            <div style={overlayStyles}/>
            <div style={modalStyles}>
                <button onClick={onClose}>Close</button>

                <MDBBtn rounded color='warning' >I have chosen!</MDBBtn>

                <TestMap position={position} />
            </div>
        </>
    );
};

export default Modal;
