import React from "react";
import "../styles/alert-callout.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTriangleExclamation } from "@fortawesome/free-solid-svg-icons";
import DOMPurify from 'isomorphic-dompurify';

const AlertCallout = ({ alertText }) => {
    
    const hasHtmlTags = /<\/?[a-z][\s\S]*>/i.test(alertText);

    const createMarkup = (htmlString) => {
        return { __html: DOMPurify.sanitize(htmlString) };
    };

    return (
        <div className="alert-callout">
            <div className="alert-notice">
                <FontAwesomeIcon icon={faTriangleExclamation} />
                <p className="alert-text">Alert</p>
            </div>
            {hasHtmlTags ? (
                <span className="alert-callout-text" dangerouslySetInnerHTML={createMarkup(alertText)} />
            ) : (
                <span className="alert-callout-text">{alertText}</span>
            )}
        </div>
    );
};

export default AlertCallout;