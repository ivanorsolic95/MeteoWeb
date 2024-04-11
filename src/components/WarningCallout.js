import React from "react";
import "../styles/warning-callout.css"
import { FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faCircleExclamation } from "@fortawesome/free-solid-svg-icons";

const WarningCallout = ({warningText}) => {
    return (
        <div className="warning-callout">
            <div className="warning-notice">
                <FontAwesomeIcon icon={faCircleExclamation}/>
                <p className="warning-text">Warning</p>
            </div> 
            <span className="warning-callout-text">{warningText}</span>
        </div>
    );
};

export default WarningCallout;