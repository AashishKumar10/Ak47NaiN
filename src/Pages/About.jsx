import React from "react";
import "./About.css";
import AboutImg from "../assets/Images/Aashish/Loveee.JPG";

const About = () => {
    return (
        <section className="about-main">
            <div className="about-left">
                <img src={AboutImg} alt="About" />
            </div>

            <div className="about-right">
                <h1>About us.</h1>
                <p className="vcvcvc">JAI BABA RAMDEV JI MAHARAJ</p>

                <div className="about-text">
                    <p>
                        I am Aashish Nain, a passionate web developer with a strong interest in modern website design.
                        I love creating clean, responsive, and user-friendly web interfaces.
                        <br />
                        <button
                            className="about-btn"
                            onClick={() => window.location.href = "/contact"}
                        >
                            Contact Us
                        </button>
                    </p>

                    <p>
                        My focus is on writing simple and efficient code using HTML, CSS, JavaScript, and React.
                        I enjoy turning ideas into real, functional digital experiences
                        Learning new technologies and improving my skills is part of my daily routine.
                        <p></p>
                        I believe good design and performance should go hand in hand.
                        I always try to deliver quality work with attention to detail.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default About;