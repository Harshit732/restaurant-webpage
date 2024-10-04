import React from "react";
import styles from "../styles/Footer.module.css";
import { FaFacebookF, FaInstagram, FaTwitter, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import logo from "../assets/Logo.png"; 

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
       
        <div className={styles.info}>
          <img src={logo} alt="DelishBites Logo" className={styles.logo} />
          <p>
            Taste the best delicacies at DelishBites, where flavor meets comfort.
            We offer a wide range of dishes made with fresh ingredients.
          </p>
          <div className={styles.contact}>
            <p><FaPhoneAlt className={styles.icon} /> +91-123-456-7890</p>
            <p><FaEnvelope className={styles.icon} /> contact@delishbites.com</p>
          </div>
        </div>

       
        <div className={styles.links}>
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#menu">Menu</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#reservations">Reservations</a></li>
            <li><a href="#contact">Contact Us</a></li>
          </ul>
        </div>

      
        <div className={styles.social}>
          <h3>Follow Us</h3>
          <div className={styles.socialIcons}>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
          </div>

         
          <div className={styles.newsletter}>
            <h3>Subscribe to Our Newsletter</h3>
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
      </div>
      
     
      <div className={styles.copyright}>
        <p>&copy; 2024 DelishBites. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
