import React from "react";
import CopyrightIcon from '@mui/icons-material/Copyright';
import "../Styles/Footer.css";

const Footer = () => {
    return(
        <div className="footer">
            <span>The Therapy Tree</span>
            <span>contact.thetherapytree@gmail.com</span>
            <div className="footRow">
                <CopyrightIcon style={{height : '2vh'}}/>
                <span>2024 copyright. All rights reserved</span>
            </div>
        </div>
    )
}

export default Footer;