import React from "react";
import { useState, useEffect } from "react";
import { useNavigate, useLocation } from 'react-router-dom';
import PhoneIcon from '@mui/icons-material/Phone';
import MenuIcon from '@mui/icons-material/Menu';
import "../Styles/Header.css";

const Header = () => {

    const navigate = useNavigate();
    const location = useLocation();
    const [mobBool, setMobBool] = useState(false);

    useEffect(() => {
        console.log(mobBool);
    },[mobBool])

    useEffect(() => {
        setMobBool(false);
    }, [location.pathname])

    const mobMenuClick = () => {
        console.log(mobBool);
        setMobBool(!mobBool);
    }
    return(
        <div className="header">
            <div className="hl">
                <span className="logoText">The Therapy Tree</span>
            </div>
            <div className="hl">
                <div className="hl lapview">
                    <div className="ho" style={{color : 'white'}} onClick={() => navigate("/")}>Home</div>
                    <div className="ho" onClick={() => navigate("/faq")}>FAQ</div>
                    <div className="ho" onClick={() => navigate("/directordesk")}>Director's Desk</div>
                    <div className="hol" onClick={() => navigate("/about")}>About Us</div>
                </div>
                <button>
                    <a className="call" href="tel:919705315452">
                        <PhoneIcon style={{height : '1.5vh'}}/>
                        <span>Free Consultation</span>
                    </a>
                </button>
                <div className="mobMenu"  onClick={mobMenuClick}>
                    <MenuIcon style={{fontSize : '3vh'}}/>
                </div>
                {mobBool &&  (<div className="mobMenuCont" >
                    <div className="hm" onClick={() => navigate("/")}>Home</div>
                    {/* <div className="hm">Our Services</div> */}
                    <div className="hm" onClick={() => navigate("/faq")}>FAQ</div>
                    <div className="hm" onClick={() => navigate("/directordesk")}>Director's Desk</div>
                    <div className="hm" onClick={() => navigate("/about")}>About Us</div>
                </div>)}
            </div>
        </div>
    )
}

export default Header;