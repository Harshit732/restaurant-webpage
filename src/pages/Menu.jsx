import React, { useState } from "react";
import styles from "../styles/Menu.module.css";
import veg from "../veg";
import nonveg from "../nonveg";
import chinese from "../veg";
import fastfood from "../veg";
import indian from "../veg";
import Card from "../components/Card";

const menuData = {
  vegetarian: veg,
  "non-vegetarian": nonveg,
  chinese: chinese,
  "fast-food": fastfood,
  indian: indian,
};

function Menu() {
  const [selectedCuisine, setSelectedCuisine] = useState("vegetarian");

  const handleCuisineChange = (event) => {
    setSelectedCuisine(event.target.value);
  };

  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <div className={styles.dropdownContainer}>
          <label htmlFor="OUR MENU" className={styles.dropdownLabel}>
            OUR MENU :
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
          {menuData[selectedCuisine].map((dish, index) => (
            
              <Card dish={dish} key={index}/>
            
          ))}
        </div>
      </div>
    </div>
  );
}

export default Menu;
