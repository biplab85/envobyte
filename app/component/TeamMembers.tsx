"use client";

import React from "react";
import Image from "next/image";
import Peaople1 from "../../public/team/08.png";
import Peaople2 from "../../public/team/07.png";
import Peaople3 from "../../public/team/06.png";
import Peaople4 from "../../public/team/05.png";
import Peaople5 from "../../public/team/04.png";
import Peaople6 from "../../public/team/03.png";
import Peaople7 from "../../public/team/02.png";
import Peaople8 from "../../public/team/01.png";
import Peaople9 from "../../public/team/09.png";  // Add new image for the 9th person
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface TabContent {
  id: number;
  title: string;
  subtitle: string;
}

const TeamMembers = () => {
  // Updated list of 9 team members with unique names and designations
  const services: TabContent[] = [
    { id: 1, title: "Mr Anik", subtitle: "Lead Designer" },
    { id: 2, title: "Jhon", subtitle: "Frontend Developer" },
    { id: 3, title: "Mr Mainul Islam", subtitle: "Backend Developer" },
    { id: 4, title: "Sarah Khan", subtitle: "UI/UX Designer" },
    { id: 5, title: "Ali Hassan", subtitle: "Full Stack Developer" },
    { id: 6, title: "Maria Noor", subtitle: "Project Manager" },
    { id: 7, title: "Zaid Ahmed", subtitle: "Software Engineer" },
    { id: 8, title: "Ayesha Shah", subtitle: "QA Specialist" },
    { id: 9, title: "Omar Zubair", subtitle: "Marketing Lead" },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };

  return (
    <section className="bg-[#FFF]">
      <div className="team-container">
        <div className="proudeCLient-header text-center mb-[38px]">
          <h2 className="title text-[#0C89FF] text-[16px] mb-[16px] tracking-[3.84px]">EXPERIENCED TEAM</h2>
          <h3 className="text-[#001246] text-[48px] mb-0">Our Team Members</h3>
        </div>
        <div className="service-slider-container">
          <Slider {...settings}>
            {services.map((item, index) => (
              <div key={item.id} className="service-slide">
                <div className="service-item">
                  <Image
                    src={
                      index === 0
                        ? Peaople1
                        : index === 1
                          ? Peaople2
                          : index === 2
                            ? Peaople3
                            : index === 3
                              ? Peaople4
                              : index === 4
                                ? Peaople5
                                : index === 5
                                  ? Peaople6
                                  : index === 6
                                    ? Peaople7
                                    : index === 7
                                      ? Peaople8
                                      : Peaople9 // Default image for the 9th person
                    }
                    alt="Team Member"
                  />
                  <div className="px-[26px] py-[23px] bg-[#0A2C8C]">
                    <h2>{item.title}</h2>
                    <h3>{item.subtitle}</h3>
                  </div>

                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default TeamMembers;
