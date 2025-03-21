"use client";

import React, { useState } from "react";
import Image, { StaticImageData } from "next/image"; // Import StaticImageData
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Import images
import WebsiteImg1 from "../../public/prevoius/01.png";
import WebsiteImg2 from "../../public/prevoius/09.png";
import WebsiteImg3 from "../../public/prevoius/04.png";
import UIUXImg1 from "../../public/prevoius/09.png";
import UIUXImg2 from "../../public/prevoius/04.png";
import UIUXImg3 from "../../public/prevoius/05.png";
import SeoImg1 from "../../public/prevoius/06.png";
import SeoImg2 from "../../public/prevoius/07.png";
import SeoImg3 from "../../public/prevoius/08.png";
import LogoImg1 from "../../public/prevoius/09.png";
import LogoImg2 from "../../public/prevoius/08.png";
import LogoImg3 from "../../public/prevoius/01.png";
import BannerImg1 from "../../public/prevoius/07.png";
import BannerImg2 from "../../public/prevoius/06.png";
import BannerImg3 from "../../public/prevoius/05.png";
import AdsImg1 from "../../public/prevoius/04.png";
import AdsImg2 from "../../public/prevoius/03.png";
import AdsImg3 from "../../public/prevoius/02.png";

const PreviousWork = () => {
  const [activeTab, setActiveTab] = useState<
    "Website" | "UI/UX" | "SEO" | "Logo Design" | "Banner Design" | "Google Ads"
  >("Website");

  // Use StaticImageData[] instead of any[]
  const tabsContent: Record<
    "Website" | "UI/UX" | "SEO" | "Logo Design" | "Banner Design" | "Google Ads",
    StaticImageData[]
  > = {
    Website: [WebsiteImg1, WebsiteImg2, WebsiteImg3, SeoImg1, SeoImg2, SeoImg3, UIUXImg1, UIUXImg2, UIUXImg3, BannerImg1, BannerImg2, BannerImg3, AdsImg1, AdsImg2, AdsImg3],
    "UI/UX": [UIUXImg1, UIUXImg2, UIUXImg3, BannerImg1, BannerImg2, BannerImg3, AdsImg1, AdsImg2, AdsImg3],
    SEO: [SeoImg1, SeoImg2, SeoImg3, LogoImg1, LogoImg2, LogoImg3, UIUXImg1, UIUXImg2, UIUXImg3, BannerImg1, BannerImg2, BannerImg3, AdsImg1, AdsImg2, AdsImg3],
    "Logo Design": [LogoImg1, LogoImg2, LogoImg3, BannerImg1, BannerImg2, BannerImg3, AdsImg1, AdsImg2, AdsImg3],
    "Banner Design": [BannerImg1, BannerImg2, BannerImg3, AdsImg1, AdsImg2, AdsImg3],
    "Google Ads": [AdsImg1, AdsImg2, AdsImg3, BannerImg1, BannerImg2, BannerImg3],
  };

  const firstRow = tabsContent[activeTab].filter((_, index) => index % 2 === 0);
  const secondRow = tabsContent[activeTab].filter((_, index) => index % 2 !== 0);

  const settingsLTR = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 5000,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    slidesToShow: 4,
    slidesToScroll: 1,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          arrows: false,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          arrows: false,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        }
      }
    ]
  };

  const settingsRTL = {
    ...settingsLTR,
    rtl: true,
  };

  return (
    <div className="previous-container">
      <div className="header-content">
        <div>
          <h2>UI/UX PORTFOLIO</h2>
          <h3>Check Our Previous Work</h3>
        </div>
        <div>
          <button className="envo-btn rounded-[4px] pt-[16px] pb-[16px] pl-[46px] pr-[46px]">
            All Portfolio
          </button>
        </div>
      </div>

      <div className="tab-content-wrapper">
        <ul className="tabMenu flex items-center justify-start mt-[30px]">
          {Object.keys(tabsContent).map((tab) => (
            <li className="mr-[42px]" key={tab}>
              <button
                className={activeTab === tab ? "active" : ""}
                onClick={() => setActiveTab(tab as typeof activeTab)}
              >
                {tab}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* First row (Left to Right) */}
      <Slider className="mb-[30px]" {...settingsLTR}>
        {firstRow.map((image, index) => (
          <Image key={index} src={image} alt="Service Image" />
        ))}
      </Slider>

      {/* Second row (Right to Left) */}
      <Slider {...settingsRTL}>
        {secondRow.map((image, index) => (
          <Image key={index} src={image} alt="Service Image" />
        ))}
      </Slider>

      <div className="service-footer">
        <h4>Creative Solution</h4>
      </div>
    </div>
  );
};

export default PreviousWork;
