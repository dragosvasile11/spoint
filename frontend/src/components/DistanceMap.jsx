import React, {useState} from 'react'
import { useLocation } from 'react-router-dom'


const DistanceMap = () => {
    const location = useLocation()
    const { from } = location.state
    const [clicks, setClicks] = React.useState([]);
    return (
        <>
        </>
    )
}

export default DistanceMap;