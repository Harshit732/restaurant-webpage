import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom"; // Import useParams
import styles from "../styles/Menu.module.css";
import veg from "../veg"; 
import nonveg from "../nonveg"; 
import chinese from "../chinese"; 
import fastfood from "../fastfood"; 
import indian from "../indian"; 
import Card from "../components/Card";
import popular from "../populardish"; 

const menuData = {
  "Chef's Special": popular,
  vegetarian: veg,
  "non-vegetarian": nonveg,
  chinese: chinese,
  "fast-food": fastfood,
  indian: indian,
};

function Menu() {
  const { name } = useParams(); // Get the cuisine name from params
  const [selectedCuisine, setSelectedCuisine] = useState("Chef's Special");

  // Effect to update the selected cuisine based on URL params
  useEffect(() => {
    if (menuData[name]) {
      setSelectedCuisine(name);
    } else {
      setSelectedCuisine("Chef's Special"); // Fallback to default if no match
    }
  }, [name]);

  const handleCuisineChange = (event) => {
    setSelectedCuisine(event.target.value);
  };

  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <div className={styles.dropdownContainer}>
          <label htmlFor="OUR MENU" className={styles.dropdownLabel}>
            OUR MENU:
          </label>
          <select
            id="cuisine-select"
            value={selectedCuisine}
            onChange={handleCuisineChange}
            className={styles.dropdown}
          >
            {Object.keys(menuData).map((cuisine) => (
              <option key={cuisine} value={cuisine}>
                {cuisine.charAt(0).toUpperCase() + cuisine.slice(1)}
              </option>
            ))}
          </select>
        </div>

        <div className={styles.cardContainer}>
          {menuData[selectedCuisine]?.map((dish, index) => (
            <Card dish={dish} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Menu;
