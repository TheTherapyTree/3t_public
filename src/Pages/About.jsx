import React from "react";
import PhoneIcon from '@mui/icons-material/Phone';
import "../Styles/About.css";

const About = () => {
    return(
        <div className="abtContentContainer">
            <div className="abtTitle">
                <span style={{fontSize : '2.75vh'}}>Our Story</span>
            </div>
            <div className="abtSubTitle">
                <span style={{fontSize : '2.3vh'}}>Welcome to The Therapy Tree – A Beacon of Hope in Aganampudi</span>
            </div>
            <div>
                <p>Nestled in the heart of Aganampudi, Visakhapatnam, The Therapy Tree is a newly established therapy center dedicated to nurturing and supporting children with diverse therapeutic needs. Founded with a deep commitment to making a positive impact in the lives of children and their families, The Therapy Tree stands as a symbol of compassion, hope, and specialized care.</p>
            </div>
            <div>
                <p>Our journey began with a simple yet profound vision: to create a safe and supportive environment where children can receive the therapy they need to thrive. At The Therapy Tree, we believe that every child is unique and deserves individualized attention to help them reach their full potential.</p>
            </div>
            <div>
                <p>Our team of skilled and compassionate therapists works tirelessly to provide a range of services tailored to the specific needs of each child. Whether it's speech therapy, occupational therapy, physical therapy, or behavioral therapy, we are here to offer the best care possible. We utilize evidence-based practices and innovative techniques to ensure the highest quality of treatment.</p>
            </div>
            <div>
                <p>The Therapy Tree is more than just a therapy center; it's a community. We work closely with parents and caregivers, providing them with the support and resources they need to be active participants in their child's therapeutic journey. Our holistic approach ensures that the progress made in therapy extends beyond our center, fostering lasting positive changes in the children's lives.</p>
            </div>
            <div>
                <p>In a short time, The Therapy Tree has become a trusted name in Aganampudi, known for our dedication to excellence and our heartfelt commitment to each child's well-being. We invite you to join us on this journey of growth, hope, and transformation. Together, we can create a brighter future for our children.</p>
            </div>
            <div>
                <p>Visit us at The Therapy Tree and experience the difference that personalized, compassionate care can make.</p>
            </div>
            <button className="abtBtn">
                <a className="call" href="tel:919705315452">
                        <PhoneIcon style={{fontSize : '2vh', marginRight:'min(2vw,8px)'}}/>
                        <span>Contact Us</span>
                    </a>
            </button>
            
        </div>
    )
}

export default About;