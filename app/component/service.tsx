"use client";

import React, { useState } from "react";
import Image, { StaticImageData } from "next/image";
import WebsiteImg from "../../public/service/website.svg";
import WebsiteImg1 from "../../public/service/wordpress.png";
import WebsiteImg2 from "../../public/service/ecommerce.png";
import WebsiteImg3 from "../../public/service/business.png";
import UIUXImg1 from "../../public/service/ui.png";
import UIUXImg2 from "../../public/service/ux.png";
import UIUXImg3 from "../../public/service/prototyping.png";
import SeoImg1 from "../../public/service/seo-audit.png";
import SeoImg2 from "../../public/service/keyword.png";
import SeoImg3 from "../../public/service/link-building.png";
import LogoImg1 from "../../public/service/business-logo.png";
import LogoImg2 from "../../public/service/brand-logo.png";
import LogoImg3 from "../../public/service/custom-logo.png";
import BannerImg1 from "../../public/service/web-banner.png";
import BannerImg2 from "../../public/service/social-banner.png";
import BannerImg3 from "../../public/service/email-banner.png";
import AdsImg1 from "../../public/service/ppc.png";
import AdsImg2 from "../../public/service/display.png";
import AdsImg3 from "../../public/service/shopping.png";
import Slider from "react-slick";
import Link from "next/link";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface TabContent {
  id: number;
  title: string;
  subtitle: string;
  image: StaticImageData;
}

const Service = () => {
  const [activeTab, setActiveTab] = useState<
    "Website" | "UI/UX" | "SEO" | "Logo Design" | "Banner Design" | "Google Ads"
  >("Website");

  const tabsContent: Record<
    "Website" | "UI/UX" | "SEO" | "Logo Design" | "Banner Design" | "Google Ads",
    TabContent[]
  > = {
    Website: [
      { id: 1, title: "WordPress Website", subtitle: "Design & Development", image: WebsiteImg },
      { id: 2, title: "E-Commerce Website", subtitle: "Design & Development", image: WebsiteImg2 },
      { id: 3, title: "Business Website", subtitle: "Design & Development", image: WebsiteImg3 },
      { id: 4, title: "Portfolio Website", subtitle: "Personal Portfolio", image: WebsiteImg1 },
    ],
    "UI/UX": [
      { id: 1, title: "UI Design", subtitle: "User Interface Design", image: UIUXImg1 },
      { id: 2, title: "UX Research", subtitle: "User Experience Research", image: UIUXImg2 },
      { id: 3, title: "UX Research", subtitle: "User Experience Research", image: UIUXImg3 },
    ],
    SEO: [
      { id: 1, title: "SEO Audit", subtitle: "On-Page SEO Audit", image: SeoImg1 },
      { id: 2, title: "Keyword Research", subtitle: "Search Engine Optimization", image: SeoImg2 },
      { id: 3, title: "Keyword Research", subtitle: "Search Engine Optimization", image: SeoImg3 },
    ],
    "Logo Design": [
      { id: 1, title: "Business Logo", subtitle: "Logo for Your Business", image: LogoImg1 },
      { id: 2, title: "Brand Logo", subtitle: "Brand Identity Design", image: LogoImg2 },
      { id: 3, title: "Brand Logo", subtitle: "Brand Identity Design", image: LogoImg3 },
    ],
    "Banner Design": [
      { id: 1, title: "Web Banners", subtitle: "Banner Ads for Web", image: BannerImg1 },
      { id: 2, title: "Social Media Banners", subtitle: "Social Media Ads", image: BannerImg2 },
      { id: 3, title: "Social Media Banners", subtitle: "Social Media Ads", image: BannerImg3 },
    ],
    "Google Ads": [
      { id: 1, title: "PPC Campaigns", subtitle: "Pay Per Click Advertising", image: AdsImg1 },
      { id: 2, title: "Display Ads", subtitle: "Visual Ads Campaign", image: AdsImg2 },
      { id: 3, title: "Display Ads", subtitle: "Visual Ads Campaign", image: AdsImg3 },
    ],
  };

  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3.2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  return (
    <div className="service-container">
      <div className="header-content">
        <div>
          <h2>DIGITAL SERVICES</h2>
          <h3>Check Our Available Services</h3>
        </div>
        <div>
          <button className="envo-btn rounded-[4px] pt-[16px] pb-[16px] pl-[46px] pr-[46px]">All Services</button>
        </div>
      </div>
      <div className="tab-content-wrapper">
        <ul className="tabMenu flex items-center justify-start mt-[30px]">
          {["Website", "UI/UX", "SEO", "Logo Design", "Banner Design", "Google Ads"].map((tab) => (
            <li className="mr-[42px]" key={tab}>
              <button
                className={activeTab === tab ? "text-red-500" : ""}
                onClick={() =>
                  setActiveTab(tab as "Website" | "UI/UX" | "SEO" | "Logo Design" | "Banner Design" | "Google Ads")
                }
              >
                {tab}
              </button>
            </li>
          ))}
        </ul>

        <div className="tabContent">
          <Slider {...settings}>
            {tabsContent[activeTab].map((item) => (
              <div key={item.id}>
                <div className="tabContent-box">
                  <Image src={item.image} alt={item.title} />
                  <h2>{item.title}</h2>
                  <h3>{item.subtitle}</h3>
                  <div className="btn-group">
                    <Link href="#">Portfolio</Link>
                    <button>Order</button>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
      <div className="service-footer">
        <h4>Creative Solution</h4>
      </div>
    </div>
  );
};

export default Service;