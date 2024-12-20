import React from "react";
import PhoneIcon from '@mui/icons-material/Phone';
import "../Styles/Header.css";

const Header = () => {
    return(
        <div className="header">
            {/* <div className="hl">
                <div className="ho">Home</div>
                <div className="ho">Our Services</div>
                <div className="ho">FAQ</div>
                <div className="hol">About Us</div>
            </div>
            <div className="hc">
                <span>The Therapy Tree</span>
            </div>
            <div className="hr">
                <button>Free Consultation</button>
            </div> */}
            <div className="hl">
                <span style={{fontSize : '2.1vh', fontWeight : '600'}}>The Therapy Tree</span>
            </div>
            <div className="hl">
                <div className="ho">Home</div>
                <div className="ho">Our Services</div>
                <div className="ho">FAQ</div>
                <div className="hol">About Us</div>
                <button>
                    <PhoneIcon style={{height : '1.5vh'}}/>
                    Free Consultation
                </button>
            </div>
        </div>
    )
}

export default Header;