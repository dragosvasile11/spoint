import React from 'react';

const AppStoresBadges = () => {
    return (
        <div style={badgesPosition}>
            <span>
                <a href="https://apps.apple.com/us/app/">
                    <img width="144" height="48"
                         src="/badgeAppStore.png"
                         alt="Download on the Apple App Store"/>
                    </a>
                </span>
            <span>
                <a href="https://play.google.com/store/apps/">
                    <img width="161" height="48"
                         src="/badgePlayStore.png"
                         alt="Get it on Google Play"/>
                    </a>
                </span>
        </div>
    );
};

const badgeImageSize = {
    width : "20%"
}

const badgesPosition = {
    display: "flex",
    justifyContent: "center"
}

export default AppStoresBadges;
