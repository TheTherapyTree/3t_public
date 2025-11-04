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
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import CloseIcon from '@mui/icons-material/Close';
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

    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitMessage, setSubmitMessage] = useState({ type: null, text: '' });

    const handleChange = (e) => {
        const{name, value} = e.target;
        setFormData({
            ...formData,
            [name] : value
        });
        // Clear error for this field when user starts typing
        if (errors[name]) {
            setErrors({
                ...errors,
                [name] : ''
            });
        }
        // Clear submission message when user starts typing
        if (submitMessage.type) {
            setSubmitMessage({ type: null, text: '' });
        }
    };

    const validateForm = () => {
        const newErrors = {};
        
        if (!formData.firstName.trim()) {
            newErrors.firstName = 'First name is required';
        }
        if (!formData.lastName.trim()) {
            newErrors.lastName = 'Last name is required';
        }
        if (!formData.dob.trim()) {
            newErrors.dob = 'Date of birth is required';
        }
        // if (!formData.age.trim()) {
        //     newErrors.age = 'Age is required';
        // }
        if (!formData.service.trim()) {
            newErrors.service = 'Please select a service';
        }
        if (!formData.parentName.trim()) {
            newErrors.parentName = 'Parent\'s name is required';
        }
        if (!formData.contactNo.trim()) {
            newErrors.contactNo = 'Contact number is required';
        }
        if (!formData.apptDate.trim()) {
            newErrors.apptDate = 'Appointment date is required';
        }
        if (!formData.apptTime.trim()) {
            newErrors.apptTime = 'Appointment time is required';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const sendEmail = (e) => {
        e.preventDefault();
        
        if (!validateForm()) {
            return;
        }

        setIsSubmitting(true);
        setSubmitMessage({ type: null, text: '' }); // Clear any previous messages
        console.log(form.current);
        console.log(formData);
        emailjs
          .sendForm(process.env.REACT_APP_EMAIL_SERVICEID, process.env.REACT_APP_EMAIL_TEMPID, form.current, {
            publicKey: process.env.REACT_APP_EMAIL_PRIVKEY,
          })
          .then(
            () => {
              console.log('SUCCESS!');
              setIsSubmitting(false);
              // Reset form after successful submission
              setFormData({
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
              });
              setErrors({});
              setSubmitMessage({ 
                type: 'success', 
                text: 'Thank you! Your appointment request has been received. We\'ll reach out to you shortly to confirm the details. We\'re here to support you every step of the way.' 
              });
              // Auto-hide success message after 8 seconds
              setTimeout(() => {
                setSubmitMessage({ type: null, text: '' });
              }, 8000);
            },
            (error) => {
              console.log('FAILED...', error.text);
              setIsSubmitting(false);
              setSubmitMessage({ 
                type: 'error', 
                text: 'We encountered an issue submitting your request. Please try again, or feel free to call us directly by clicking the contact us button. We\'re here to help!' 
              });
            },
          );
      };

    const dismissMessage = () => {
        setSubmitMessage({ type: null, text: '' });
    };

    return(
        <>
            <Helmet>
                <title>The Therapy Tree</title>
                <meta 
                    name="description" 
                    content="Therapy Center in Aganampudi for children with special needs"/>
                <link rel="canonical" href="https://thetherapytree.in/" />
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
                            <span style={{fontSize : 'max(14px, 2vh)', color:'grey'}}>Enhancing daily function and independence.</span>
                        
                    </div>
                    <div className="offering">
                        <PsychologyIcon style={{fontSize : '3vmax', color:'grey'}}/>
                        
                            <span>Behaviour Therapy</span>
                            <span style={{fontSize : 'max(14px, 2vh)', color:'grey'}}>Change through reinforcement techniques.</span>
                        
                    </div>
                    <div className="offering">
                        <SpaIcon style={{fontSize : '3vmax', color:'grey'}}/>
                        
                            <span>Physiotherapy</span>
                            <span style={{fontSize : 'max(14px, 2vh)', color:'grey'}}>Restoring movement and relieving pain.</span>
                        
                    </div>
                    <div className="offering">
                        <RecordVoiceOverIcon style={{fontSize : '3vmax', color:'grey'}}/>
                        
                            <span>Speech Training</span>
                            <span style={{fontSize : 'max(14px, 2vh)', color:'grey'}}>Improving communication and speech abilities.</span>
                        
                    </div>
                    <div className="offering">
                        <MenuBookIcon style={{fontSize : '3vmax', color:'grey'}}/>
                        
                            <span>Special Education</span>
                            <span style={{fontSize : 'max(14px, 2vh)', color:'grey'}}>Supporting diverse learning and development.</span>
                        
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
                        {submitMessage.type && (
                            <div className={`submitMessage ${submitMessage.type}`}>
                                <div className="messageContent">
                                    {submitMessage.type === 'success' ? (
                                        <CheckCircleIcon className="messageIcon" />
                                    ) : (
                                        <ErrorOutlineIcon className="messageIcon" />
                                    )}
                                    <span className="messageText">{submitMessage.text}</span>
                                </div>
                                <button 
                                    type="button" 
                                    className="messageCloseBtn" 
                                    onClick={dismissMessage}
                                    aria-label="Close message"
                                >
                                    <CloseIcon style={{fontSize: '18px'}} />
                                </button>
                            </div>
                        )}
                        <form ref={form} className="fsForm" >
                            <div className="formRow">
                                <div className="formField">
                                    <input 
                                        name="firstName" 
                                        value={formData.firstName} 
                                        placeholder="FirstName" 
                                        type="text" 
                                        onChange={handleChange}
                                        className={errors.firstName ? 'error' : ''}
                                    />
                                    {errors.firstName && <span className="errorMsg">{errors.firstName}</span>}
                                </div>
                                <div className="formField">
                                    <input 
                                        name="lastName" 
                                        value={formData.lastName} 
                                        placeholder="LastName" 
                                        type="text" 
                                        onChange={handleChange}
                                        className={errors.lastName ? 'error' : ''}
                                    />
                                    {errors.lastName && <span className="errorMsg">{errors.lastName}</span>}
                                </div>
                            </div>
                            <div className="formRow">
                                <div className="formField">
                                    <input 
                                        name="dob" 
                                        value={formData.dob} 
                                        placeholder="Date of Birth" 
                                        type="text" 
                                        onFocus={(e) => {e.target.type = "date"; e.target.showPicker()}} 
                                        onBlur={(e) => e.target.type = "text"} 
                                        // style={{width : 'max(10vw, 100px)'}} 
                                        onChange={handleChange}
                                        className={errors.dob ? 'error' : ''}
                                    />
                                    {errors.dob && <span className="errorMsg">{errors.dob}</span>}
                                </div>
                                {/* <div className="formField">
                                    <input 
                                        name="age" 
                                        value={formData.age} 
                                        placeholder="Age" 
                                        type="number" 
                                        style={{width : 'max(4vw, 28px)'}} 
                                        onChange={handleChange}
                                        className={errors.age ? 'error' : ''}
                                    />
                                    {errors.age && <span className="errorMsg">{errors.age}</span>}
                                </div> */}
                                <div className="formField">
                                    <select 
                                        name="service" 
                                        value={formData.service} 
                                        className={`serv ${errors.service ? 'error' : ''}`}  
                                        onChange={handleChange}
                                    >
                                        <option value={""}>Choose a service</option>
                                        <option value={"GA"}>General Assessment</option>
                                        <option value={"OT"}>Occupational Therapy</option>
                                        <option value={"BT"}>Behaviour Therapy</option>
                                        <option value={"PT"}>Physiotherapy</option>
                                        <option value={"ST"}>Speech Therapy</option>
                                        <option value={"SE"}>Special Education</option>
                                    </select>
                                    {errors.service && <span className="errorMsg">{errors.service}</span>}
                                </div>
                            </div>
                            <div className="formRow"> 
                                <div className="formField">
                                    <input 
                                        name="parentName" 
                                        value={formData.parentName} 
                                        placeholder="Parent's Name" 
                                        type="text" 
                                        onChange={handleChange}
                                        className={errors.parentName ? 'error' : ''}
                                    />
                                    {errors.parentName && <span className="errorMsg">{errors.parentName}</span>}
                                </div>
                                <div className="formField">
                                    <input 
                                        name="contactNo" 
                                        value={formData.contactNo} 
                                        placeholder="Contact Number" 
                                        type="number" 
                                        onChange={handleChange}
                                        className={errors.contactNo ? 'error' : ''}
                                    />
                                    {errors.contactNo && <span className="errorMsg">{errors.contactNo}</span>}
                                </div>
                            </div>
                            <div className="formRow"> 
                                <div className="formField">
                                    <textarea 
                                        name="msg" 
                                        value={formData.msg} 
                                        placeholder="Message (Optional)" 
                                        type="text" 
                                        style={{height : '12vh', width : 'max(20vw, 150px)', borderRadius : '10px'}} 
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="formCol">
                                    <div className="formField">
                                        <input 
                                            name="apptDate" 
                                            value={formData.apptDate} 
                                            placeholder="Date of Appointment" 
                                            type="text" 
                                            onFocus={(e) => {e.target.type = "date"; e.target.showPicker()}} 
                                            onBlur={(e) => e.target.type = "text"}  
                                            onChange={handleChange}
                                            className={errors.apptDate ? 'error' : ''}
                                        />
                                        {errors.apptDate && <span className="errorMsg">{errors.apptDate}</span>}
                                    </div>
                                    <div className="formField">
                                        <input 
                                            name="apptTime" 
                                            value={formData.apptTime} 
                                            placeholder="Time" 
                                            type="text" 
                                            onFocus={(e) => {e.target.type = "time"; e.target.showPicker()}} 
                                            onBlur={(e) => e.target.type = "text"}  
                                            onChange={handleChange}
                                            className={errors.apptTime ? 'error' : ''}
                                        />
                                        {errors.apptTime && <span className="errorMsg">{errors.apptTime}</span>}
                                    </div>
                                </div>
                            </div>
                            <button onClick={sendEmail} disabled={isSubmitting}>
                                <CalendarMonthIcon style={{fontSize : '2.5vh'}}/>
                                {isSubmitting ? 'Booking...' : 'Book Appointment'}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home;