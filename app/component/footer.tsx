import React from "react";
import styles from "./Footer.module.scss";
import Image from "next/image";
import Logo from "../../public/logo.svg";
import Mail from "../../public/icon/email.svg";
import WhatsUp from "../../public/icon/whatsUp-active.svg";
import Facebook from "../../public/icon/facebook.svg";
import Linkdin from "../../public/icon/linkdin-active.svg";
import Instagram from "../../public/icon/instagram.svg";
import Twitter from "../../public/icon/twitter.svg";
import Pinterest from "../../public/icon/pinterest.svg";
import Link from "next/link";


const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footerContent}>
          {/* Left Section */}
          <div className={styles.footerBrand}>
            <h2 className={`${styles.logo} mb-[20px]`}>
              <Image src={Logo} alt="Logo" width={117} />
            </h2>
            <p className="font-">We are an IT Company. We help businesses to bring ideas to life easily and affordably.</p>
          </div>

          {/* Company Links */}
          <div className={styles.footerLinks}>
            <h3>Company</h3>
            <Link href="#">About Us</Link>
            <Link href="#">Privacy Policy</Link>
            <Link href="#">Refund Policy</Link>
          </div>

          {/* Learn More */}
          <div className={styles.footerLinks}>
            <h3>Learn More</h3>
            <Link href="#">Combo Offer</Link>
            <Link href="#">Service Industries</Link>
            <Link href="#">Envobyte Apps</Link>
          </div>

          {/* Support */}
          <div className={styles.footerLinks}>
            <h3>Support</h3>
            <Link href="#">Contact Us</Link>
            <Link href="#">FAQ</Link>
            <Link href="#">Terms & Conditions</Link>
          </div>

          {/* Get in Touch */}
          <div className={`${styles.footerLinks} ${styles.GetInTouch}`}>
            <h3>Get in Touch</h3>
            <p className={`flex items-center justify-start`}>
              <Image className={`mr-[12px]`} src={Mail} alt="Logo" width={24} />
              <span>support@envobyte.com</span>
            </p>
            <p className={`flex items-center justify-start`}>
              <Image className={`mr-[12px]`} src={WhatsUp} alt="Logo" width={24} />
              <span>+1 (667) 777 2477</span>
            </p>
            <div className={`${styles.socialIcons} mt-[8px]`}>
              <Link href="#" target="_blank" rel="noopener noreferrer">
                <Image src={Facebook} alt="Facebook" />
              </Link>
              <Link className={`ml-[16px]`} href="#" target="_blank" rel="noopener noreferrer">
                <Image src={Linkdin} alt="Linkdin" />
              </Link>
              <Link className={`ml-[16px]`} href="#" target="_blank" rel="noopener noreferrer">
                <Image src={Instagram} alt="Instagram" />
              </Link>
              <Link className={`ml-[16px]`} href="#" target="_blank" rel="noopener noreferrer">
                <Image src={Twitter} alt="Twitter" />
              </Link>
              <Link className={`ml-[16px]`} href="#" target="_blank" rel="noopener noreferrer">
                <Image src={Pinterest} alt="Pinterest" />
              </Link>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className={styles.footerBottom}>
          <p>©2025 - ENVOBYTE, All rights are reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
