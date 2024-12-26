import React from "react";
import { useState } from "react";
import "../Styles/Faq.css";
import { Helmet } from "react-helmet-async";

const Faq = () => {

    const[clickSet, setClickSet] = useState(new Set());

    const handleClick = (id) => {
        console.log(id);
        const newSet = new Set(clickSet);
        if(newSet.has(id)){
            newSet.delete(id);
        } else {
            newSet.add(id);
        }
        setClickSet(newSet);
        console.log(newSet);
    }

    return(
        <>
            <Helmet>
                <title>FAQ | The Therapy Tree</title>
                <meta 
                    name="description"
                    content="Have any questions? Get your answers from our set of faqs." />
                <link rel="canonical" href="https://thetherapytree.in/faq" />
            </Helmet>
            <div className="MainContentContainer">
                <div className="titl">
                <span>Get the Answers You Need</span>
                </div>
                <div className="faq" id="1" onClick = {() => handleClick("1")}>
                    <div className="ques">
                        <span>1) What types of services does the therapy center provide?</span>
                    </div>
                    {clickSet.has("1") && (<div className="ans">
                        <span>Our therapy center offers a variety of services designed to support children with special needs, including:</span>
                        <ul>
                            <li>Occupational Therapy (OT): Helping children develop the skills they need to perform daily activities, such as dressing, eating, writing, and fine motor skills.</li>
                            <li>Behavior Therapy: Focusing on modifying challenging behaviors, improving social skills, and teaching appropriate coping mechanisms through evidence-based techniques.</li>
                            <li>Physiotherapy (PT): Assisting children with physical disabilities in improving strength, mobility, coordination, and overall physical functioning.</li>
                            <li>Speech Therapy: Helping children develop communication skills, including speech, language, and social communication, as well as addressing swallowing difficulties.</li>
                            <li>Special Education: Providing tailored educational support to children with learning disabilities, intellectual disabilities, or other developmental delays to help them achieve academic success.</li>
                        </ul>
                    </div>)}
                </div>
                <div className="faq" id = '2' onClick = {() => handleClick("2")}>
                    <div className="ques">
                        <span>2) How do I know if my child needs therapy?</span>
                    </div>
                    {clickSet.has("2") && (<div className="ans">
                        <span>If your child is facing challenges in areas such as communication, mobility, social interactions, behavior management, or daily tasks, therapy may be beneficial. Some common signs include:</span>
                        <ul>
                            <li>Delayed speech or language development</li>
                            <li>Difficulty with fine or gross motor skills (e.g., struggling with holding a pencil or walking)</li>
                            <li>Challenges in understanding instructions or following routines</li>
                            <li>Behavioral issues such as frequent tantrums or trouble adjusting to social situations</li>
                            <li>Difficulty with daily living activities (e.g., eating, dressing, toileting)</li>
                        </ul>
                        <span>We recommend scheduling an assessment with one of our specialists to determine the most appropriate course of action for your child.</span>
                    </div>)}
                </div>
                <div className="faq" id = '3' onClick = {() => handleClick("3")}>
                    <div className="ques">
                        <span>3) How do I get started with therapy at the center?</span>
                    </div>
                    {clickSet.has("3") && (<div className="ans">
                        <span>To begin therapy services at our center, please contact us to schedule an initial consultation. During this session, we will:</span>
                        <ul>
                            <li>Assess your child’s current abilities, needs, and challenges</li>
                            <li>Develop a personalized therapy plan tailored to your child's needs</li>
                            <li>Discuss frequency and duration of therapy sessions</li>
                            <li>Answer any questions you may have about the process</li>
                        </ul>
                    </div>)}
                </div>
                <div className="faq" id = '4' onClick = {() => handleClick("4")}>
                    <div className="ques">
                        <span>4) What is the typical duration of a therapy session?</span>
                    </div>
                    {clickSet.has("4") && (<div className="ans">
                        <p>Therapy sessions typically last between 30 to 60 minutes, depending on the type of therapy and your child’s specific needs. Some children may require more frequent sessions, while others may benefit from less frequent but longer sessions. The duration will be personalized based on your child’s age, attention span, and goals.</p>
                    </div>)}
                </div>
                <div className="faq" id = '5' onClick = {() => handleClick("5")}>
                    <div className="ques">
                        <span>5) How often will my child need therapy?</span>
                    </div>
                    {clickSet.has("5") && (<div className="ans">
                        <span>The frequency of therapy depends on your child’s individual needs and goals. For example:</span>
                        <ul>
                            <li>Children with more significant delays may require more frequent therapy (e.g., 2-3 times per week).</li>
                            <li>Children with less severe challenges may only need weekly or bi-weekly sessions.</li>
                        </ul>
                        <span>Our therapists will work closely with you to establish a schedule that is best suited to your child’s needs and progress.</span>
                    </div>)}
                </div>
                <div className="faq" id = '6' onClick = {() => handleClick("6")}>
                    <div className="ques">
                        <span>6) Will my child’s therapy plan be individualized?</span>
                    </div>
                    {clickSet.has("6") && (<div className="ans">
                        <p>Yes, all of our therapy services are tailored to meet the unique needs of each child. After an initial assessment, we will create an individualized therapy plan that targets your child’s specific areas of difficulty and works towards their goals. We also continuously monitor progress and adjust the plan as needed to ensure the best outcomes.</p>
                    </div>)}
                </div>
                <div className="faq" id = '7' onClick = {() => handleClick("7")}>
                    <div className="ques">
                        <span>7) Can my child attend therapy if they are already in school?</span>
                    </div>
                    {clickSet.has("7") && (<div className="ans">
                        <p>Yes, absolutely! Many children continue attending school while receiving therapy. Therapy sessions are often scheduled outside of school hours or during school breaks. Our team will collaborate with your child’s educators, when appropriate, to ensure that therapy goals align with school-related objectives and that there is consistency between both environments.</p>
                    </div>)}
                </div>
                <div className="faq" id = '8' onClick = {() => handleClick("8")}>
                    <div className="ques">
                        <span>8) How do I track my child’s progress?</span>
                    </div>
                    {clickSet.has("8") && (<div className="ans">
                        <span>We will regularly update you on your child’s progress through progress reports and regular meetings with the therapists. You can also expect:</span>
                        <ul>
                            <li>Detailed feedback after each session</li>
                            <li>Periodic assessments to measure improvements and adjust goals</li>
                            <li>Collaboration between therapists, parents, and, when applicable, teachers to ensure comprehensive development</li>
                        </ul>
                        <span>We believe in a collaborative approach and encourage open communication between our team and families.</span>
                    </div>)}
                </div>
                <div className="faq" id = '9' onClick = {() => handleClick("9")}>
                    <div className="ques">
                        <span>9) Do you provide therapy for children with specific conditions, such as autism or cerebral palsy?</span>
                    </div>
                    {clickSet.has("9") && (<div className="ans">
                        <span>Yes, we provide specialized therapy services for children with a variety of conditions, including:</span>
                        <ul>                    
                            <li>Autism Spectrum Disorder (ASD)</li>
                            <li>Cerebral Palsy</li>
                            <li>Intellectual Disabilities</li>
                            <li>ADHD (Attention Deficit Hyperactivity Disorder)</li>
                            <li>Developmental Delays</li>
                            <li>Down Syndrome</li>
                            <li>Sensory Processing Disorders</li>
                            <li>Speech and Language Disorders</li>
                        </ul>
                        <span>Our therapists are experienced in working with children who have diverse needs and can adapt their therapeutic approaches to best support your child’s development.</span>
                    </div>)}
                </div>
                <div className="faq" id = '10' onClick = {() => handleClick("10")}>
                    <div className="ques">
                        <span>10) How can I support my child’s therapy at home?</span>
                    </div>
                    {clickSet.has("10") && (<div className="ans">
                        <span>We provide parents with practical strategies and activities that can be used at home to reinforce the work done during therapy. Your involvement is crucial in helping your child succeed, and our therapists will guide you in creating a supportive environment at home. Some examples include:</span>
                        <ul>
                            <li>Practicing exercises or activities that improve motor skills</li>
                            <li>Using speech exercises to support language development</li>
                            <li>Implementing behavior strategies to improve social skills</li>
                            <li>Encouraging daily routines and independence in daily activities</li>
                        </ul>
                    </div>)}
                </div>
                <div className="faq" id = '11' onClick={() => handleClick("11")}>
                    <div className="ques">
                        <span>11) What is the cost of therapy?</span>
                    </div>
                    {clickSet.has("11") && (<div className="ans">
                        <p>The cost of therapy depends on the type of service and the frequency of sessions. We offer competitive rates and provide an initial consultation to help you understand the costs involved. We also work with families to determine the most affordable options.</p>
                    </div>)}
                </div>
            </div>
        </>
    )
}

export default Faq;