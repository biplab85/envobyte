"use client";

import React, { useState } from "react";
import Image from "next/image";
import Envobyte from "../../public/more-details/01.svg";
import EnvobyteActive from "../../public/more-details/01-active.svg";
import Benefit from "../../public/more-details/02.svg";
import Offer from "../../public/more-details/03.svg";

const MoreDetails = () => {
  const [activeIndex, setActiveIndex] = useState(0); // Default active is the first box

  const contentData = [
    {
      title: "Why Chose Envobyte",
      subtitle: "Experienced & trustworthy",
      text: "We’re experienced, trustworthy, and a team of experts in design, development, SEO, and more, delivering everything you need for success.",
      image: Envobyte,
      activeImage: EnvobyteActive,
    },
    {
      title: "What’s Your Benefit",
      subtitle: "No hassle with best price",
      text: "A hassle-free process that saves you time, with everything you need in one seamless package at an incredibly attractive price.",
      image: Benefit,
      activeImage: Benefit,
    },
    {
      title: "What is Combo Offer",
      subtitle: "Get 9 services in one package",
      text: "You’re getting web design, development, content writing, social media kit, custom graphics, and business consultation—all in one combo package!",
      image: Offer,
      activeImage: Offer,
    },
  ];

  return (
    <section className="moreDetails-container">
      <div className="moreDetails-content">
        <div className="moreDetails-header text-center mb-[38px]">
          <h2 className="title text-[#0C89FF] text-[16px] mb-[16px] tracking-[3.84px]">MORE DETAILS</h2>
          <h3 className="text-[#0A2C8C] text-[48px] mob:text-[28px] mb-0 tracking-[0.96px]">Get Your Answers</h3>
        </div>

        <div className="flex items-center justify-between custom:block">
          {contentData.map((item, index) => (
            <div
              key={index}
              className={`conetnt-box ${activeIndex === index ? "active" : ""} transition-all duration-300`}
              onMouseEnter={() => setActiveIndex(index)}
            >
              <div className="flex items-center justify-center">
                <Image className="mb-[40px]" src={activeIndex === index ? item.activeImage : item.image} alt={item.title} />
              </div>
              <div className="content">
                <h3 className={`text-[30px] leading-[36px] mb-[16px] ${activeIndex === index ? "text-white" : "text-[#001246]"}`}>
                  {item.title}
                </h3>
                <span className={`flex text-[16px] mb-[24px] ${activeIndex === index ? "text-white" : "text-[#002AA3]"}`}>
                  {item.subtitle}
                </span>
                <p className={`text-[16px] leading-[24px] ${activeIndex === index ? "text-white" : "text-[#424242]"}`}>
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-center mt-[46px]">
          <button className="envo-btn text-white text-[16px] px-[47px] py-[16px] rounded-[4px]">See Pricing</button>
        </div>
      </div>
    </section>
  );
};

export default MoreDetails; // ✅ Corrected the component name
