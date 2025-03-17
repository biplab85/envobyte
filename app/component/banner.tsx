"use client";

import React from "react";
import Image from "next/image";
import { Typewriter } from "react-simple-typewriter";
import CountUp from "react-countup";
import GlobalEdit from "../../public/icon/global-edit.svg";
import BannerImg from "../../public/banner.png";
import styles from "./Banner.module.scss";

const Banner = () => {
  return (
    <div className={styles.banner}>
      {/* Typewriter Effect */}
      <h1>
        <Typewriter
          words={["DIGITAL SERVICES"]}
          loop={1} // Runs only once
          cursor={false}
          typeSpeed={100}
          deleteSpeed={50}
        />
      </h1>

      <h3>BUILDING YOUR EMPIRE DIGITALLY</h3>
      <div className={styles.buttons}>
        <button>See Pricing</button>
        <button>Book an appointment</button>
      </div>

      {/* Stats Section with Increment Animation */}
      <div className={styles.stats}>
        <div className={styles.statBox}>
          <Image src={GlobalEdit} alt="Logo" width={60} height={60} />
          <div>
            <h3>
              <CountUp start={0} end={25} duration={2} />+
            </h3>
            <span>Websites built</span>
          </div>
        </div>
        <div className={styles.statBox}>
          <Image src={GlobalEdit} alt="Logo" width={60} height={60} />
          <div>
            <h3>
              <CountUp start={0} end={500} duration={2} />+
            </h3>
            <span>Amazing clients</span>
          </div>
        </div>
        <div className={styles.statBox}>
          <Image src={GlobalEdit} alt="Logo" width={60} height={60} />
          <div>
            <h3>
              <CountUp start={0} end={97} duration={2} />+
            </h3>
            <span>Client satisfaction</span>
          </div>
        </div>
        <div className={styles.statBox}>
          <Image src={GlobalEdit} alt="Logo" width={60} height={60} />
          <div>
            <h3>
              <CountUp start={0} end={2000} duration={2} />+
            </h3>
            <span>Projects completed</span>
          </div>
        </div>
      </div>

      {/* Banner Image */}
      <div className={styles.imageContainer}>
        <Image src={BannerImg} alt="Banner" width={800} height={400} />
      </div>
    </div>
  );
};

export default Banner;
