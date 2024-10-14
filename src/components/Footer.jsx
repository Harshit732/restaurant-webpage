import React from "react";
import styles from "../styles/Footer.module.css";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";
import { FaSnapchatGhost } from "react-icons/fa";
import logo from "../assets/Logo.png";
import veg from "../assets/vegfood.jpg";
import nonveg from "../assets/nonvegfood.jpg";
import chinese from "../assets/chinesefood.jpg";
import indian from "../assets/indianfood.jpg";
import junk from "../assets/junkfood.jpg";

const cuisines = [
  { name: "Fast Food", path: "/menu/fast-food", image: junk },
  { name: "Veg", path: "/menu/vegetarian", image: veg },
  { name: "Non-Veg", path: "/menu/non-vegetarian", image: nonveg },
  { name: "Chinese", path: "/menu/chinese", image: chinese },
  { name: "Indian", path: "/menu/indian", image: indian },
];

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.info}>
          <img src={logo} alt="DelishBites Logo" className={styles.logo} />
          <p>
            Taste the best delicacies at DelishBites, where flavor meets
            comfort. We offer a wide range of dishes made with fresh
            ingredients.
          </p>
          <div className={styles.contact}>
            <p>
              <FaPhoneAlt className={styles.icon} /> +91-123-456-7890
            </p>
            <p>
              <FaEnvelope className={styles.icon} /> contact@delishbites.com
            </p>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginRight: "2rem",
          }}
        >
          <div className={styles.links}>
            <h3>Quick Links</h3>
            <ul>
              <li>
                <a href="menu">Menu</a>
              </li>
              <li>
                <a href="about">About Us</a>
              </li>
              <li>
                <a href="reservations">Reservations</a>
              </li>
              <li>
                <a href="contact">Contact Us</a>
              </li>
            </ul>
          </div>

          <div className={styles.menuItems}>
            <div className={styles.items}> 
              {cuisines.map((cuisine, index) => (
                <Link to={cuisine.path} key={cuisine.name}  style={{textDecoration: "none"}}>
                  <p className={styles.cuisinename}>{cuisine.name}</p>
              
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className={styles.social}>
          <div>
            <h3>Follow Us</h3>
            <div className={styles.socialIcons}>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter />
              </a>
              <a
                href="https://www.snapchat.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaSnapchatGhost />
              </a>
            </div>
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
