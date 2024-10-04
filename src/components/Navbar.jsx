import React, { useState, useEffect } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaSearch } from "react-icons/fa";
import { Link as ScrollLink } from "react-scroll";
import { Link, useNavigate } from "react-router-dom";
import styles from "../styles/Navbar.module.css";
import { useCart } from "../CartProvider"; 
import { FaShoppingCart } from "react-icons/fa";
import logo from "../assets/Logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();
  const { cart } = useCart(); 

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = () => {
    if (searchQuery.trim()) {
      navigate(`/menu/${searchQuery}`);
      setSearchQuery("");
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearchSubmit();
    }
  };

  // Add scroll event listener to detect when user scrolls
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true); // Apply new background color after 50px scroll
      } else {
        setIsScrolled(false); // Reset to original color if scrolled back up
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={`${styles.navbar} ${isScrolled ? styles.scrolled : ""}`}>
      <div className={styles.navbody}>
        <div className={styles.logo}>
          {/* You can add your logo image here */}
        </div>

        <div className={styles.searchBar}>
          <input
            type="text"
            value={searchQuery}
            onChange={handleSearchChange}
            onKeyPress={handleKeyPress}
            placeholder="Search..."
            className={styles.searchInput}
          />
          <button
            onClick={handleSearchSubmit}
            className={styles.searchButton}
            aria-label="Search"
          >
            <FaSearch />
          </button>
        </div>

        <div className={styles.menuIcon} onClick={toggleMenu}>
          <GiHamburgerMenu />
        </div>

        <div className={`${styles.hlinks} ${isOpen ? styles.active : ""}`}>
          <ul>
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>
              <Link to={"/menu/vegetarian"}>Menu</Link>
            </li>
            <li>
              <ScrollLink to="about-section" smooth={true} duration={500}>
                About Us
              </ScrollLink>
            </li>
            <li>
            <Link
              to={`/description/`}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <button className={styles.addToCartButton}><p><FaShoppingCart /></p> <p>{cart.length}</p></button>
            </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
