import React from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import cake from "../assets/cake.jpeg";
import ChickenCurry from "../assets/chickencurry.jpg";
import Fishfry from "../assets/fish.jpg";
import Jalebi from "../assets/jalebi.jpeg";
import Kulche from "../assets/kulche.png";
import Paneertikka from "../assets/paneertika.jpeg";
import Panipuri from "../assets/panipuri.jpeg";
import Pav from "../assets/pav.jpeg";
import Pizza from "../assets/pizza.jpeg";
import Rice from "../assets/rice.jpeg";
import Samosa from "../assets/samose.jpeg";
import Butterchicken from "../assets/butterchicken.jpg";
import Thali from "../assets/thali.png";
import chickenSalad from "../assets/vegetableChickenSalad.jpg";
import vegsalad from "../assets/VegSalad.jpg";
import styles from "../styles/Description.module.css";

const menu = [
  {
    name: "Cake",
    imagesrc: cake,
    description:
      "A delicious and fluffy vanilla cake layered with fresh cream and topped with seasonal fruits. Made with all-purpose flour, sugar, eggs, and whipped cream.",
    price: "₹300",
  },
  {
    name: "Jalebi",
    imagesrc: Jalebi,
    description:
      "A sweet, spiral-shaped dessert soaked in sugar syrup, made from fermented batter of all-purpose flour and yogurt.",
    price: "₹150",
  },
  {
    name: "Kulche",
    imagesrc: Kulche,
    description:
      "Soft and fluffy Indian bread, traditionally made with refined flour and yogurt, served with a side of spicy chickpea curry.",
    price: "₹100",
  },
  {
    name: "Paneer Tikka",
    imagesrc: Paneertikka,
    description:
      "Grilled paneer marinated in a blend of spices and yogurt, served with mint chutney. Made with fresh paneer, bell peppers, and onions.",
    price: "₹350",
  },
  {
    name: "Pani Puri",
    imagesrc: Panipuri,
    description:
      "Crispy puris filled with a spicy mixture of tamarind water, potatoes, and chickpeas. Served as a refreshing snack.",
    price: "₹200",
  },
  {
    name: "Pav Bhaji",
    imagesrc: Pav,
    description:
      "A spicy vegetable mash made with potatoes, peas, and spices, served with buttered bread rolls. Accompanied by onions and lemon.",
    price: "₹250",
  },
  {
    name: "Pizza",
    imagesrc: Pizza,
    description:
      "Cheesy pizza topped with fresh vegetables like bell peppers, onions, and olives, baked to perfection on a thin crust.",
    price: "₹500",
  },
  {
    name: "Rice",
    imagesrc: Rice,
    description:
      "Steamed basmati rice, perfectly cooked to accompany any dish.",
    price: "₹80",
  },
  {
    name: "Samosa",
    imagesrc: Samosa,
    description:
      "Crispy pastry filled with spiced potatoes and peas, served with mint and tamarind chutney.",
    price: "₹120",
  },
  {
    name: "Chicken Curry",
    imagesrc: ChickenCurry,
    description:
      "Spicy chicken cooked in a rich and creamy sauce made from tomatoes, onions, garlic, and ginger. Served with fragrant basmati rice or naan.",
    price: "₹450",
  },
  {
    name: "Fish Fry",
    imagesrc: Fishfry,
    description:
      "Crispy fried fish marinated in a blend of spices, served with a tangy tamarind sauce. Made with fresh fish, rice flour, and various spices.",
    price: "₹400",
  },
  {
    name: "Pizza",
    imagesrc: Pizza,
    description:
      "Cheesy pizza topped with fresh vegetables like bell peppers, onions, and olives, baked to perfection on a thin crust.",
    price: "₹500",
  },
  {
    name: "Butter Chicken",
    imagesrc: Butterchicken,
    description:
      "Tender chicken pieces simmered in a creamy tomato sauce, flavored with butter and aromatic spices. Best served with naan or rice.",
    price: "₹500",
  },
  {
    name: "Special Thali",
    imagesrc: Thali,
    description:
      "A platter featuring a variety of dishes, including lentils, vegetables, rice, and flatbread. A complete meal representing diverse flavors.",
    price: "₹600",
  },
  {
    name: "Chicken Salad",
    imagesrc: chickenSalad,
    description:
      "Fresh greens topped with grilled chicken, cherry tomatoes, cucumbers, and a tangy vinaigrette dressing. A healthy choice packed with protein.",
    price: "₹350",
  },
  {
    name: "Fish",
    imagesrc: Fishfry,
    description:
      "Grilled fish seasoned with spices and served with lemon wedges. Accompanied by a side of sautéed vegetables.",
    price: "₹450",
  },
  {
    name: "Veg Salad",
    imagesrc: vegsalad,
    description:
      "A colorful mix of seasonal vegetables like carrots, cucumbers, and bell peppers, served with a light lemon dressing.",
    price: "₹200",
  },
];
const ItemDetails = () => {
  const { name } = useParams();
  const [servings, setServings] = useState(1);
  const [address, setAddress] = useState("");
  const [specialRequests, setSpecialRequests] = useState("");

  const dish = menu.find((item) => item.name === name);

  if (!dish) {
    return <h2>Dish not found</h2>;
  }

  const incrementServings = () => {
    setServings(servings + 1);
  };

  const decrementServings = () => {
    if (servings > 1) {
      setServings(servings - 1);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Order Details:", {
      dish: dish.name,
      servings,
      address,
      specialRequests,
    });
    alert(`Order placed for ${servings} serve(s) of ${dish.name}`);
  };

  return (
    <div className={styles.container}>
      <div className={styles.card}>

        <div className={styles.imageContainer}>
          <img src={dish.imagesrc} alt={dish.name} />
        </div>

        <div className={styles.content}>
          <h1>{dish.name}</h1>
          <p className={styles.description}>{dish.description}</p>
          <h2>Price: {dish.price}</h2>

          <form onSubmit={handleSubmit} className={styles.form}>
            <label htmlFor="address">Delivery Address:</label>
            <textarea
              id="address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              placeholder="Enter your delivery address"
              required
            />

            <label htmlFor="specialRequests">Special Requests:</label>
            <textarea
              id="specialRequests"
              value={specialRequests}
              onChange={(e) => setSpecialRequests(e.target.value)}
              placeholder="Any special requests?"
            />

            <div className={styles.servings}>
              <label>Number of Servings:</label>
              <button type="button" onClick={decrementServings}>
                -
              </button>
              <span>{servings}</span>
              <button type="button" onClick={incrementServings}>
                +
              </button>
            </div>

            <button type="submit" className={styles.orderButton}>
              Order Now
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ItemDetails;
