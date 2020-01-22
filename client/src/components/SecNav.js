import React from 'react';
import info from '../icons/info.svg'
import twitter from '../icons/twitter.svg'
import {PageView, Event} from "./Tracking"

export function SecNav(props) {
    let {handleAboutClicked, desktopSize} = props
    return (
        <ul className="secNavContainer">
            <li><a 
                href="https://coalblock-is.cmpdi.co.in/pages/dashboard.php" 
                datacontent="Coal Block Information on a Map"
                style={{backgroundImage: `url(${info})`}} 
                onClick={()=> {
                    handleAboutClicked();
                    PageView('About');
            }}></a></li>
            {/* <li><a 
                href="https://twitter.com/mycountryawake" 
                id="twitterNav" 
                target="_blank" 
                datacontent="Twitter" 
                style={{backgroundImage: `url(${twitter})`}}
                onClick = {() => Event("UserAction", "Navigated to Twitter", window.innerWidth > desktopSize ? "DESKTOP": "MOBILE")}
            >
            </a></li> */}
        </ul>
    )
}
