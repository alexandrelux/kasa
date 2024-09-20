import React from "react";
import "./logo.scss";

const Logo = () => {
    return (
        <picture className="logo">
            <source
                media="(min-width: 600px)"
                srcSet="/kasa/images/LOGO_desktop.webp"
            />
            <img src="/kasa/images/LOGO.webp" alt="Logo Kasa" />
        </picture>
    );
};

export default Logo;
