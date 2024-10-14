import React from "react";
import styles from "../styles/FooterSection.module.css";
import logo from "../assets/Logo.png";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";
import { FaSnapchatGhost } from "react-icons/fa";
import { FaHouseChimney } from "react-icons/fa6";

function FooterSection() {
  return (
    <>
      <div className={styles.main}>
        <div className={styles.container}>
          <div className={styles.logo}>
            <img src={logo} alt="DelishBites" />
          </div>
          <div className={styles.contacts}>
            <h2>Contact Us</h2>
            <p>
              <FaPhoneAlt className={styles.icon} /> +91-123-456-7890
            </p>
            <p>
              <FaEnvelope className={styles.icon} /> contact@delishbites.com
            </p>

            <p>
              <FaHouseChimney className={styles.icon} /> 12WB, qwert Street, abcd, new abcd-111000
            </p>
          </div>
          <div className={styles.quicklinks}>
            <h2>Quick Links</h2>
            <p>Menu</p>
            <p>About Us</p>
            <p>Reservation</p>
            <p>Blog</p>
          </div>
          <div className={styles.socialMedia}>
            <h2>Social Media</h2>
            <div className={styles.socialIcons}>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebookF /> Facebook
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram /> Instagram
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter /> Twitter
              </a>
              <a
                href="https://www.snapchat.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaSnapchatGhost /> Snapchat
              </a>
            </div>
          </div>
          <div className={styles.newletter}>
            <h2>Subscribe to Our Newsletter</h2>
            <form className={styles.subscribeForm}>
              <input
                type="email"
                placeholder="Enter your email"
                className={styles.emailInput}
              />
              <button type="submit" className={styles.subscribeButton}>
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <div className={styles.copyright}>
          <p>&copy; 2024 DelishBites. All rights reserved.</p>
        </div>
      </div>
    </>
  );
}

export default FooterSection;
