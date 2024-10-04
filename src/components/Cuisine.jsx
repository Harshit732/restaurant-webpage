import React from "react";
import { Link } from "react-router-dom";
import styles from "../styles/Cuisine.module.css";
import veg from "../assets/vegfood.jpg";
import nonveg from "../assets/nonvegfood.jpg";
import chinese from "../assets/chinesefood.jpg";
import indian from "../assets/indianfood.jpg";
import junk from "../assets/junkfood.jpg";

const cuisines = [
  { name: "Fast Food", path: "/menu/fast-food", image: junk },
  { name: "Vegetarian", path: "/menu/vegetarian", image: veg },
  { name: "Non-Vegetarian", path: "/menu/non-vegetarian", image: nonveg },
  { name: "Chinese", path: "/menu/chinese", image: chinese},
  { name: "Indian", path: "/menu/indian", image: indian },
  
];

function Cuisine() {
  return (
    <div className={styles.main}>
      <h1>Select Your Cuisine..</h1>
      <div className={styles.container}>
        {cuisines.map((cuisine) => (
          <Link to={cuisine.path} key={cuisine.name} className={styles.cuisineLink}>
            <div
              className={styles.cuisineCircle}
              style={{ backgroundImage: `url(${cuisine.image})` } }
            >
              <h2>{cuisine.name}</h2>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Cuisine;
