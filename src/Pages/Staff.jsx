import React from "react";
import "../Styles/Staff.css";

const Staff = () => {
    return(
        <div className="MainContentContainer">
            <div className="staffMem">
                <div className="staffMemIntro">
                    <div className="smImg">
                        Img
                    </div>
                    <div className="smDet">
                        <span style={{fontWeight:'550'}}>Indumathi</span>
                        <span>Director, MD</span>
                        <span>MSc-Psychology, BEd(spl), BCom</span>
                    </div>
                </div>
                <div className="smDesc">
                    <p>She is a highly qualified and experienced professional in the field of psychology and special education, with a robust academic foundation and over 10 years of hands-on experience working with children with special needs. She holds a Master's degree in Psychology (MSc - Psychology) and dual Bachelor's degrees—one in Special Education (BEd - Special Education) with a specialization in Intellectual Disabilities, and the other in Commerce (BCom), which adds a unique dimension to her skill set in managing organizational aspects.</p>

                    <p>As the Director of The Therapy Tree, she brings a wealth of expertise in designing and implementing therapeutic interventions for children with a range of developmental and intellectual disabilities. Her compassionate approach is complemented by her in-depth understanding of child psychology, learning difficulties, and behavioral challenges. Over the course of her career, she has worked closely with multidisciplinary teams to provide individualized care, helping children achieve their full potential in both academic and social contexts.</p>

                    <p>Indumathi’s professional journey reflects her unwavering commitment to enhancing the lives of children with special needs, and her leadership ensures that the highest standards of care and support are provided. Her strategic vision and organizational acumen, coupled with her empathetic approach, make her an exceptional leader in the field of special education and therapy services.</p>
                </div>
            </div>
        </div>
    )
}

export default Staff;