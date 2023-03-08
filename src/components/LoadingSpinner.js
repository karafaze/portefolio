import React from "react";

export default function LoadingSpinner() {
    return (
        <div id="loading-spinner" className="loading--wrapper">
            <div className="loading--circle__outer">
                <div className="loading--circle__inner"></div>
            </div>
            <div className="loading--message">
                <p className="loading--message__main">
                    Your mail is getting sent
                </p>
                <span className="loading--message__dot1">.</span>
                <span className="loading--message__dot2">.</span>
                <span className="loading--message__dot3">.</span>
            </div>
        </div>
    );
}
