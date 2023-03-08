import React from "react";

export default function SuccessLoadingSpinner() {
    return (
        <div id="success-loading-spinner" className="success-loading--wrapper">
            <i className="ri-mail-send-fill success-loading--icon"></i>
            <p className="success-loading--message">Your message has been sent !</p>
        </div>
    );
}
