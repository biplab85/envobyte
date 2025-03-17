"use client";

import React from "react";
import Image from "next/image";
import GlobalEdit from "../../public/icon/global-edit.svg";
import Slider from "react-slick";
import Link from "next/link";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


interface TabContent {
  id: number;
  title: string;
  subtitle: string;
}

const TeamMembers = () => {
  const services: TabContent[] = [
    { id: 1, title: "WordPress Website", subtitle: "Design & Development" },
    { id: 2, title: "E-Commerce Website", subtitle: "Design & Development" },
    { id: 3, title: "Business Website", subtitle: "Design & Development" },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  return (
    <div className="service-container">
      <div className="service-header">
        <h2>EXPERIENCED TEAM</h2>
        <h3>Our Team Members</h3>
      </div>
      <div className="service-slider-container">
        <Slider {...settings}>
          {services.map((item) => (
            <div key={item.id} className="service-slide">
              <div className="service-item">
                <Image src={GlobalEdit} alt="Logo" width={240} />
                <h2>{item.title}</h2>
                <h3>{item.subtitle}</h3>
                <div className="service-links">
                  <Link href="#">Portfolio</Link>
                  <button>Order</button>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default TeamMembers;
