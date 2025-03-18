"use client";

import React from "react";
import Image from "next/image";
import { Typewriter } from "react-simple-typewriter";
import CountUp from "react-countup";
import GlobalEdit from "../../public/icon/global-edit.svg";
import Like from "../../public/icon/like.svg";
import People from "../../public/icon/people.svg";
import ProfileCircle from "../../public/icon/profile-circle.svg";
import BannerImg from "../../public/banner.png";
import styles from "./Banner.module.scss";

const Banner = () => {
  return (
    <div className={styles.banner}>
      {/* Typewriter Effect */}
      <h1 className="mb-[8px]">
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
        <button className={`${styles.envoBtn} uppercase`}>See Pricing</button>
        <button className={`${styles.envoBtn} ${styles.outline} uppercase`}>Book an appointment</button>
      </div>

      {/* Stats Section with Increment Animation */}
      <div className={styles.stats}>
        <div className={styles.statBox}>
          <div className={styles.iconContainer}>
            <Image src={GlobalEdit} alt="Websites build" />
          </div>
          <div className={styles.content}>
            <h3>
              <CountUp start={0} end={25} duration={2} />+
            </h3>
            <span className={styles.semiTitle}>Websites built</span>
          </div>
        </div>
        <div className={styles.statBox}>
          <div className={styles.iconContainer}>
            <Image src={Like} alt="Client satisfaction" />
          </div>
          <div className={styles.content}>
            <h3>
              <CountUp start={0} end={500} duration={2} />%
            </h3>
            <span className={styles.semiTitle}>Client satisfaction</span>
          </div>
        </div>
        <div className={styles.statBox}>
          <div className={styles.iconContainer}>
            <Image src={People} alt="Team members" />
          </div>
          <div className={styles.content}>
            <h3>
              <CountUp start={0} end={25} duration={2} />+
            </h3>
            <span className={styles.semiTitle}>Team members</span>
          </div>
        </div>
        <div className={styles.statBox}>
          <div className={styles.iconContainer}>
            <Image src={ProfileCircle} alt="Amazing clients" />
          </div>
          <div className={styles.content}>
            <h3>
              <CountUp start={0} end={500} duration={2} />+
            </h3>
            <span className={styles.semiTitle}>Amazing clients</span>
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
