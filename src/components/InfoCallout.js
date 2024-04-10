import React from "react";
import "../styles/info-callout.css"
import { FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";

const InfoCallout = ({infoText}) => {
    return (
        <div className="info-callout">
            <div className="info-notice">
                <FontAwesomeIcon icon={faCircleInfo}/>
                <p className="notice-text">Info</p>
            </div> 
            <span className="info-text">{infoText}</span>
        </div>
    );
};

export default InfoCallout;