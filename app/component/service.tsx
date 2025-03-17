"use client";

import React, { useState } from "react";
import Image from "next/image";
import GlobalEdit from "../../public/icon/global-edit.svg";
import Slider from "react-slick";
import Link from "next/link";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Define types for tab content
interface TabContent {
  id: number;
  title: string;
  subtitle: string;
}

const Service = () => {
  const [activeTab, setActiveTab] = useState<"Website" | "UI/UX" | "SEO" | "Logo Design" | "Banner Design" | "Google Ads">("Website");

  // Define tabsContent with a typed object
  const tabsContent: Record<"Website" | "UI/UX" | "SEO" | "Logo Design" | "Banner Design" | "Google Ads", TabContent[]> = {
    Website: [
      { id: 1, title: "WordPress Website", subtitle: "Design & Development" },
      { id: 2, title: "E-Commerce Website", subtitle: "Design & Development" },
      { id: 3, title: "Business Website", subtitle: "Design & Development" },
    ],
    "UI/UX": [
      { id: 1, title: "UI Design", subtitle: "User Interface Design" },
      { id: 2, title: "UX Research", subtitle: "User Experience Research" },
      { id: 3, title: "Prototyping", subtitle: "Prototyping & Testing" },
    ],
    SEO: [
      { id: 1, title: "SEO Audit", subtitle: "On-Page SEO Audit" },
      { id: 2, title: "Keyword Research", subtitle: "Search Engine Optimization" },
      { id: 3, title: "Link Building", subtitle: "Backlink Strategy" },
    ],
    "Logo Design": [
      { id: 1, title: "Business Logo", subtitle: "Logo for Your Business" },
      { id: 2, title: "Brand Logo", subtitle: "Brand Identity Design" },
      { id: 3, title: "Custom Logo", subtitle: "Unique Logo Creation" },
    ],
    "Banner Design": [
      { id: 1, title: "Web Banners", subtitle: "Banner Ads for Web" },
      { id: 2, title: "Social Media Banners", subtitle: "Social Media Ads" },
      { id: 3, title: "Email Banners", subtitle: "Email Marketing Banners" },
    ],
    "Google Ads": [
      { id: 1, title: "PPC Campaigns", subtitle: "Pay Per Click Advertising" },
      { id: 2, title: "Display Ads", subtitle: "Visual Ads Campaign" },
      { id: 3, title: "Google Shopping", subtitle: "E-commerce Ads" },
    ],
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  return (
    <div>
      <div>
        <h2>DIGITAL SERVICES</h2>
        <h3>Check Our Available Services</h3>
        <div>
          <button>All Services</button>
        </div>
      </div>
      <div>
        <ul className="tabMenu">
          {["Website", "UI/UX", "SEO", "Logo Design", "Banner Design", "Google Ads"].map((tab) => (
            <li key={tab}>
              <button
                className={activeTab === tab ? "active" : ""}
                onClick={() => setActiveTab(tab as "Website" | "UI/UX" | "SEO" | "Logo Design" | "Banner Design" | "Google Ads")}
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
                <div className="w-[250px] h-[250px] bg-[red]">
                  <Image src={GlobalEdit} alt="Logo" width={240} />
                  <h2>{item.title}</h2>
                  <h3>{item.subtitle}</h3>
                  <div>
                    <Link href="#">Portfolio</Link>
                    <button>Order</button>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Service;
