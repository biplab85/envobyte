import React from "react";
import Link from "next/link";


const ProcessSteps = () => {
    return (
        <section className="relative step-container">
            <h4 className="horizontal-title">Project in steps</h4>
            <div className="step-header">
                <h2>HOW WE WORK</h2>
                <h3>Our Process For Delivering Results</h3>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                    industry’s standard dummy text ever.</p>
            </div>
            <div className="">
                <div className="steps-content">
                    <div className="steps-circle">
                        <span>01.</span>
                        <h3>Make An Appointment</h3>
                    </div>
                    <div className="steps-circle second">
                        <span>02.</span>
                        <h3>Meet Our Team</h3>
                    </div>
                    <div className="steps-circle">
                        <span>03.</span>
                        <h3>Get Consultation</h3>
                    </div>
                    <div className="steps-circle fourth">
                        <span>04.</span>
                        <h3>Start Project</h3>
                    </div>
                </div>
                <div className="step-contact-btn">
                    <Link className="envo-btn" href="#">Contact Now</Link>
                </div>

            </div>
        </section>
    );
};

export default ProcessSteps;
