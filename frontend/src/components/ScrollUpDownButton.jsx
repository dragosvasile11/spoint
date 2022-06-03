import ExpandCircleDownIcon from "@mui/icons-material/ExpandCircleDown";
import React, {useEffect, useState} from "react";

const ScrollUpDownButton = () => {

    const [scrollPosition, setScrollPosition] = useState(0);
    const handleScroll = () => {
        const position = window.scrollY;
        setScrollPosition(position);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);


        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [window.scrollY]);

    return (
        <div id="scroll-to" className={scrollPosition > window.outerHeight / 2 ? "up" : ""}>
            <a className="hover-button scrollto active btn-floating m-1 btn" href={scrollPosition === 0 ? "#bottom" : "#root"}>
                <ExpandCircleDownIcon style={{color: "FFA900"}} fontSize="large"/>
            </a>
        </div>
    );
};

export default ScrollUpDownButton;
