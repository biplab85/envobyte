"use client";

import React from "react";
import Image from "next/image";
import GlobalEdit from "../../public/icon/global-edit.svg";
import BannerImg from "../../public/banner.png";



const moreDetails = () => {

  return (
    <div>
      <h1>MORE DETAILS</h1>
      <h3>Get Your Answers</h3>
      <div>
        <button>See Pricing</button>
        <button>Book an appointment</button>
      </div>
      <div className="flex items-center justify-between">
        <div>
          <Image src={GlobalEdit} alt="Logo" width={240} />
          <div>
            <h3>Why Chose Envobyte</h3>
            <span>Experienced & trustworthy</span>
            <p>
              We’re experienced, trustworthy, and a team of experts in design, development, SEO, and more, delivering everything you need for success.
            </p>
          </div>
        </div>
        <div>
          <Image src={GlobalEdit} alt="Logo" width={240} />
          <div>
            <h3>Why Chose Envobyte</h3>
            <span>Experienced & trustworthy</span>
            <p>
              We’re experienced, trustworthy, and a team of experts in design, development, SEO, and more, delivering everything you need for success.
            </p>
          </div>
        </div>
        <div>
          <Image src={GlobalEdit} alt="Logo" width={240} />
          <div>
            <h3>Why Chose Envobyte</h3>
            <span>Experienced & trustworthy</span>
            <p>
              We’re experienced, trustworthy, and a team of experts in design, development, SEO, and more, delivering everything you need for success.
            </p>
          </div>
        </div>
      </div>
      <div className="">
        <button>See Pricing</button>
      </div>
    </div>
  );
};

export default moreDetails;
