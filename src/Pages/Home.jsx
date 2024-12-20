import React from "react";
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import PsychologyIcon from '@mui/icons-material/Psychology';
import SpaIcon from '@mui/icons-material/Spa';
import RecordVoiceOverIcon from '@mui/icons-material/RecordVoiceOver';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AlarmOnIcon from '@mui/icons-material/AlarmOn';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import "../Styles/Home.css";

const Home = () => {
    return(
        <div className="MainContentContainer">
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
                    <PhoneIcon style={{fontSize : '2vh'}}/>
                    Call Now
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
                            <span style={{fontSize : '5vh'}}>10</span>
                            <span style={{fontSize : '4vh'}}>+</span>
                        </div>
                        <span className="dataDesc">Years of Experience</span>
                    </div>
                    <div className="dataOpt">
                        <div className="dataVal">
                            <span style={{fontSize : '5vh'}}>100</span>
                            <span style={{fontSize : '4vh'}}>+</span>
                        </div>
                        <span className="dataDesc">Children Interacted</span>
                    </div>
                    <div className="dataOpt">
                        <div className="dataVal">
                            <span style={{fontSize : '5vh'}}>4.5</span>
                            <span style={{fontSize : '2vh'}}> / 5</span>
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
                            <span style={{fontSize: 'min(2.5vh, 22px)'}}>Location</span>
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
                            <span style={{fontSize: 'min(2.5vh, 22px)'}}>Opening Hours</span>
                            <span>Monday - Saturday</span>
                            <span>9:00 am - 6:00 pm</span>
                        </div>
                    </div>
                </div>
                <div className="formSec">
                    <form className="fsForm">
                        <div className="formRow">
                            <input placeholder="FirstName" type="text" />
                            <input placeholder="LastName" type="text" />
                        </div>
                        <div className="formRow">
                            <input placeholder="Date of Birth" type="date" style={{width : '10vw'}}/>
                            <input placeholder="age" type="number" style={{width : '4vw'}}/>
                            <input placeholder="services" type="text" />
                        </div>
                        <div className="formRow"> 
                            <input placeholder="Parent's Name" type="text" />
                            <input placeholder="Contact Number" type="number" />
                        </div>
                        <div className="formRow"> 
                            <input placeholder="Message" type="text" style={{height : '12vh', width : '20vw'}}/>
                            <div className="formCol">
                                <input placeholder="Date of Appointment" type="date" />
                                <input placeholder="slot" type="time" />
                            </div>
                        </div>
                        <button>
                            <CalendarMonthIcon style={{fontSize : '2.5vh'}}/>
                            Book Appointment
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Home;