import React from "react";
import "../styles/tip-callout.css"
import { FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

const TipCallout = ({tipText}) => {
    return (
        <div className="tip-callout">
            <div className="tip-notice">
                <FontAwesomeIcon icon={faCheck}/>
                <p className="tip-text">Tip</p>
            </div> 
            <span className="tip-callout-text">{tipText}</span>
        </div>
    );
};

export default TipCallout;