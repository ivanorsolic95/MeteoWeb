import React from "react";
import "../styles/info-callout.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import DOMPurify from 'dompurify';

const InfoCallout = ({ infoText }) => {
    
    const hasHtmlTags = /<\/?[a-z][\s\S]*>/i.test(infoText);

    const createMarkup = (htmlString) => {
        return { __html: DOMPurify.sanitize(htmlString) };
    };

    return (
        <div className="info-callout">
            <div className="info-notice">
                <FontAwesomeIcon icon={faCircleInfo} />
                <p className="notice-text">Info</p>
            </div>
            {hasHtmlTags ? (
                <span className="info-text" dangerouslySetInnerHTML={createMarkup(infoText)} />
            ) : (
                <span className="info-text">{infoText}</span>
            )}
        </div>
    );
};

export default InfoCallout;