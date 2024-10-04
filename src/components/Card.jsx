import React from "react";
import styles from "../styles/Card.module.css";
import { useCart } from "../CartProvider"; 

function Card({ dish }) {
  const { cart, addToCart, incrementQuantity, decrementQuantity } = useCart(); 

  
  const itemInCart = cart.find((item) => item.name === dish.name);

  return (
    <div>
      <div className={styles.menuCard}>
        <img src={dish.imagesrc} alt={dish.name} className={styles.dishImage} />
        <div className={styles.cardContent}>
          <h3>{dish.name}</h3>
          <p>{dish.description}</p>
          <p className={styles.rating}>Rating: {dish.rating} ⭐</p>
          <div className={styles.cardFooter}>
            <p className={styles.price}>Price: ₹{dish.price}</p>

            {itemInCart ? (
              
              <div className={styles.quantityControls}>
                <button onClick={() => decrementQuantity(dish.name)}>-</button>
                <span>{itemInCart.quantity}</span>
                <button onClick={() => incrementQuantity(dish.name)}>+</button>
              </div>
            ) : (
              
              <button onClick={() => addToCart(dish)}>Add to Cart</button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
