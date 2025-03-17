import React from "react";
import styles from "./Footer.module.scss";
import Link from "next/link";
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaTwitter, FaPinterestP } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footerContent}>
          {/* Left Section */}
          <div className={styles.footerBrand}>
            <h2 className={styles.logo}>Envobyte</h2>
            <p>We are an IT Company. We help businesses to bring ideas to life easily and affordably.</p>
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
          <div className={styles.footerContact}>
            <h3>Get in Touch</h3>
            <p><MdEmail /> support@envobyte.com</p>
            <p><FaWhatsapp /> +1 (667) 777 2477</p>
            <div className={styles.socialIcons}>
              <FaFacebookF />
              <FaLinkedinIn />
              <FaInstagram />
              <FaTwitter />
              <FaPinterestP />
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
