"use client";

import React from "react";
import Image from "next/image";
import GlobalEdit from "../../public/icon/global-edit.svg";
import BannerImg from "../../public/banner.png";



const Banner = () => {

  return (
    <div>
      <h1>DIGITAL SERVICES</h1>
      <h3>BUILDING YOUR EMPIRE DIGITALLY</h3>
      <div>
        <button>See Pricing</button>
        <button>Book an appointment</button>
      </div>
      <div className="flex items-center justify-between">
        <div>
          <Image src={GlobalEdit} alt="Logo" width={240} />
          <div>
            <h3>25+</h3>
            <span>Websites build</span>
          </div>
        </div>
        <div>
          <Image src={GlobalEdit} alt="Logo" width={240} />
          <div>
            <h3>25+</h3>
            <span>Websites build</span>
          </div>
        </div>
        <div>
          <Image src={GlobalEdit} alt="Logo" width={240} />
          <div>
            <h3>25+</h3>
            <span>Websites build</span>
          </div>
        </div>
        <div>
          <Image src={GlobalEdit} alt="Logo" width={240} />
          <div>
            <h3>25+</h3>
            <span>Websites build</span>
          </div>
        </div>
      </div>
      <div className="">
        <Image src={BannerImg} alt="Logo" width={240} />
      </div>
    </div>
  );
};

export default Banner;
