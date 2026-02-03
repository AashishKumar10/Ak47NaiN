import React from "react";
import { Link } from "react-router-dom";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

import profilePic from "../assets/Images/Aashish/Main.jpeg";
import Aashu1 from "../assets/Images/AllFamily/Papa Ji/papa2.jpeg";
import Aashu2 from "../assets/Images/Photos Section/MUM1 - Copy.jpg";
import Aashu3 from "../assets/Images/Photos Section/tariya.jpeg";
import Aashu4 from "../assets/Images/Photos Section/lalu.jpg";

import "./HeroSection.css";

const HeroSection = () => {
  const familyData = [
    { id: 1, name: "PAPA JI", img: Aashu1, link: "/family/5" },
    { id: 2, name: "MUMMY JI", img: Aashu2, link: "/family/4" },
    { id: 3, name: "DIDI", img: Aashu3, link: "/family/3" },
    { id: 4, name: "DIDI", img: Aashu4, link: "/family/2" },
  ];

  return (
    <div className="hero-container container nackground">
      <div className="row align-items-center rrrr">
        <div className="col-md-6 text-center">
          <img src={profilePic} alt="Profile" className="hero-img" />
        </div>
        <div className="col-md-6 hero-right">
          <h2 className="hero-title">AASHISH NAIN</h2>
          <p className="hero-para">
            Learning something new every day. <br />
            Moving forward with purpose.
          </p>
          <div className="hero-buttons">
            <Link className="btn dirst" to="/family/1">DISCOVER</Link>
            <Link className="btn dirstt" to="/Gouravpoonia">ALL PHOTOS</Link>
          </div>
        </div>
      </div>

      <div className="ourfamilly">
        OUR FAMILLY
      </div>

      <div className="row">
        <div className="col-12">
          <div className="nbn">
            <div className="family-slider-box">
              <Swiper
                modules={[Autoplay]}
                spaceBetween={20}
                slidesPerView={3}
                loop={true}
                autoplay={{ delay: 5000, disableOnInteraction: false }}
                breakpoints={{
                  0: { slidesPerView: 1 },
                  450: { slidesPerView: 2 },
                  768: { slidesPerView: 3 },
                }}
              >
                {familyData.map((member) => (
                  <SwiperSlide key={member.id}>
                    <Link to={member.link} className="family-member-link">
                      <div className="family-member">
                        <div className="circle-frame">
                          <img src={member.img} alt={member.name} />
                        </div>
                        <p>{member.name}</p>
                      </div>
                    </Link>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;