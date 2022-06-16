import {LightSpeed, Fade} from 'react-reveal';
import {useEffect, useState} from "react";
import LandingPageSection from "../../Assets/LandingPageSection";

const Content = () => {

    const [scrollPosition, setScrollPosition] = useState(0);
    const handleScroll = () => {
        const docElement = document.documentElement

        const position =  (document.body.scrollTop || docElement.scrollTop) / (docElement.scrollHeight - docElement.clientHeight) * 100;

        // console.log("Scroll position in percentage " + position.toFixed(0) + "%")

        setScrollPosition(position.toFixed(0));
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);


        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [window.scrollY]);

    return (
        <div>
            <LightSpeed right opposite when={scrollPosition > 13}>
                <LandingPageSection image={"./landingPageIcon1.png"}
                                    title={"Discover the world"}
                                    description={"Discover the world in your own pace and earn medals in our single player mode."}
                                    textVerticalPosition={"right"}
                    />
            </LightSpeed>

            <Fade bottom opposite when={scrollPosition > 25}>
                <hr style={ lineDivider }/>
            </Fade>

            <LightSpeed left opposite when={scrollPosition > 25}>
                <LandingPageSection image={"./landingPageIcon2.png"}
                                    title={"Play with your friends"}
                                    description={
                                        "Put your skills to the test against your friends and family. " +
                                        "Create your own private party and play together."
                                    }
                                    textVerticalPosition={"left"}
                />
            </LightSpeed>

            <Fade bottom opposite when={scrollPosition > 50}>
                <hr style={ lineDivider }/>
            </Fade>

            <LightSpeed right opposite when={scrollPosition > 50}>
                <LandingPageSection image={"./landingPageIcon3.png"}
                                    title={"Compete against others"}
                                    description={
                                        "Test your ability against players all across the world. " +
                                        "Earn badges and compete against others in tournaments and events!"
                                    }
                                    textVerticalPosition={"right"}
                />
            </LightSpeed>
        </div>
    );
};

const lineDivider = {
    width: "50%",
    height: "2px",
    opacity: "5",
    color: "#FEA800",
    marginLeft: "auto",
    marginRight: "auto",
    borderRadius: "3px"
}

export default Content;
