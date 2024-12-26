import React from "react";
import { useState, useRef } from "react";
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import PsychologyIcon from '@mui/icons-material/Psychology';
import SpaIcon from '@mui/icons-material/Spa';
import RecordVoiceOverIcon from '@mui/icons-material/RecordVoiceOver';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AlarmOnIcon from '@mui/icons-material/AlarmOn';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import emailjs from '@emailjs/browser';

import "../Styles/Home.css";
import { Helmet } from "react-helmet-async";

const Home = () => {

    const form = useRef();
    const[formData, setFormData] = useState({
        firstName : '',
        lastName : '',
        dob : '',
        age : '',
        service : '',
        parentName : '',
        contactNo : '',
        msg : '',
        apptDate : '',
        apptTime : ''
    })

    const handleChange = (e) => {
        const{name, value} = e.target;
        setFormData({
            ...formData,
            [name] : value
        });
    };

    const sendEmail = (e) => {
        e.preventDefault();
        console.log(form.current);
        console.log(formData);
        emailjs
          .sendForm(process.env.REACT_APP_EMAIL_SERVICEID, process.env.REACT_APP_EMAIL_TEMPID, form.current, {
            publicKey: process.env.REACT_APP_EMAIL_PRIVKEY,
          })
        //   emailjs
        //   .send(process.env.REACT_APP_EMAIL_SERVICEID, process.env.REACT_APP_EMAIL_TEMPID, formData, {
        //     publicKey: process.env.REACT_APP_EMAIL_PRIVKEY,
        //   })
          .then(
            () => {
              console.log('SUCCESS!');
            },
            (error) => {
              console.log('FAILED...', error.text);
            },
          );
      };

    return(
        <>
            <Helmet>
                <title>The Therapy Tree</title>
                <meta 
                    name="description" 
                    content="Therapy Center in Aganampudi for children with special needs"/>
                <link rel="canonical" href="/" />
            </Helmet>
            <div className="homeContainer">
                <div className="greetSec">
                    <div className="greet">
                        <span>You deserve a healing from the roots</span>
                    </div>
                </div>
                <div className="offerings">
                    <div className="offering">
                        <FitnessCenterIcon style={{fontSize : '3vmax', color:'grey'}}/>
                        
                            <span>Occupational Therapy</span>
                            <span style={{fontSize : '14px', color:'grey'}}>Enhancing daily function and independence.</span>
                        
                    </div>
                    <div className="offering">
                        <PsychologyIcon style={{fontSize : '3vmax', color:'grey'}}/>
                        
                            <span>Behaviour Therapy</span>
                            <span style={{fontSize : '14px', color:'grey'}}>Change through reinforcement techniques.</span>
                        
                    </div>
                    <div className="offering">
                        <SpaIcon style={{fontSize : '3vmax', color:'grey'}}/>
                        
                            <span>Physiotherapy</span>
                            <span style={{fontSize : '14px', color:'grey'}}>Restoring movement and relieving pain.</span>
                        
                    </div>
                    <div className="offering">
                        <RecordVoiceOverIcon style={{fontSize : '3vmax', color:'grey'}}/>
                        
                            <span>Speech Training</span>
                            <span style={{fontSize : '14px', color:'grey'}}>Improving communication and speech abilities.</span>
                        
                    </div>
                    <div className="offering">
                        <MenuBookIcon style={{fontSize : '3vmax', color:'grey'}}/>
                        
                            <span>Special Education</span>
                            <span style={{fontSize : '14px', color:'grey'}}>Supporting diverse learning and development.</span>
                        
                    </div>
                </div>
                <div className="actionSec">
                    <div className="actionMsg" style={{fontSize : '2.3vh'}}>
                        Get your free consultation TODAY!
                    </div>
                    <button>
                        <a className="call" href="tel:919705315452">
                            <PhoneIcon style={{fontSize : '2vh'}}/>
                            <span>Call Now</span>
                        </a>
                    </button>
                </div>
                <div className="expSec">
                    <div className="dataVal" >
                        <span style={{fontSize : '2.25vh'}}>Therapy with</span>
                        <span style={{fontSize : '3vh'}}> Indumathi</span>
                    </div>
                    <div className="dataSec">
                        <div className="dataOpt">
                            <div className="dataVal">
                                <span className="dataVal1" >10</span>
                                <span className="dataVal2" >+</span>
                            </div>
                            <span className="dataDesc">Years of Experience</span>
                        </div>
                        <div className="dataOpt">
                            <div className="dataVal">
                                <span className="dataVal1" >100</span>
                                <span className="dataVal2" >+</span>
                            </div>
                            <span className="dataDesc">Children Interacted</span>
                        </div>
                        <div className="dataOpt">
                            <div className="dataVal">
                                <span className="dataVal1" >4.5</span>
                                <span className="dataVal3"> / 5</span>
                            </div>
                            <span className="dataDesc">Positive Outlook</span>
                        </div>
                    </div>
                </div>
                <div className="contactSec">
                    <div className="locSec">
                        <div className="locSecRow">
                            <div className="locSecCol">
                                <LocationOnIcon style={{fontSize: 'min(5vh, 50px)', color: 'tomato'}}/>
                            </div>
                            <div className="locSecCol">
                                <span className="locTitle">Location</span>
                                <span>Flat No 301</span>
                                <span>Rajyalakshmi Ananda Vaibhavam</span>
                                <span>Towards Duvvada Railway Station Road</span>
                                <span>Aganampudi</span>
                            </div>
                        </div>
                        <div className="locSecRow">
                            <div className="locSecCol">
                                <AlarmOnIcon style={{fontSize: 'min(5vh, 50px)', color: 'green'}}/>
                            </div>
                            <div className="locSecCol">
                                <span className="locTitle">Opening Hours</span>
                                <span>Monday - Saturday</span>
                                <span>9:00 am - 6:00 pm</span>
                            </div>
                        </div>
                    </div>
                    <div className="formSec">
                        <form ref={form} className="fsForm" >
                            <div className="formRow">
                                <input name="firstName" value={formData.firstName} placeholder="FirstName" type="text" onChange={handleChange} />
                                <input name="lastName" value={formData.lastName} placeholder="LastName" type="text" onChange={handleChange} />
                            </div>
                            <div className="formRow">
                                <input name="dob" value={formData.dob} placeholder="Date of Birth" type="text" onFocus={(e) => {e.target.type = "date"; e.target.showPicker()}} onBlur={(e) => e.target.type = "text"} style={{width : 'max(10vw, 100px)'}} onChange={handleChange}/>
                                <input name="age" value={formData.age} placeholder="age" type="number" style={{width : 'max(4vw, 28px)'}} onChange={handleChange}/>
                                {/* <input placeholder="services" type="text" /> */}
                                <select name="service" value={formData.service} className="serv"  onChange={handleChange}>
                                    <option value={""}>Choose a service</option>
                                    <option value={"GA"}>General Assessment</option>
                                    <option value={"OT"}>Occupational Therapy</option>
                                    <option value={"BT"}>Behaviour Therapy</option>
                                    <option value={"PT"}>Physiotherapy</option>
                                    <option value={"ST"}>Speech Therapy</option>
                                    <option value={"SE"}>Special Education</option>
                                </select>
                            </div>
                            <div className="formRow"> 
                                <input name="parentName" value={formData.parentName} placeholder="Parent's Name" type="text" onChange={handleChange} />
                                <input name="contactNo" value={formData.contactNo} placeholder="Contact Number" type="number" onChange={handleChange} />
                            </div>
                            <div className="formRow"> 
                                <input name="msg" value={formData.msg} placeholder="Message" type="text" style={{height : '12vh', width : 'max(20vw, 150px)'}} onChange={handleChange}/>
                                <div className="formCol">
                                    <input name="apptDate" value={formData.apptDate} placeholder="Date of Appointment" type="text" onFocus={(e) => {e.target.type = "date"; e.target.showPicker()}} onBlur={(e) => e.target.type = "text"}  onChange={handleChange}/>
                                    <input name="apptTime" value={formData.apptTime} placeholder="slot" type="text" onFocus={(e) => {e.target.type = "time"; e.target.showPicker()}} onBlur={(e) => e.target.type = "text"}  onChange={handleChange}/>
                                </div>
                            </div>
                            <button onClick={sendEmail}>
                                <CalendarMonthIcon style={{fontSize : '2.5vh'}}/>
                                Book Appointment
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home;