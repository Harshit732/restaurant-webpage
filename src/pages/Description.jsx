import React, { useEffect, useState } from "react";
import styles from "../styles/Description.module.css";
import { useCart } from "../CartProvider";

const Description = () => {
  const [cost, setCost] = useState(0);
  const [address, setAddress] = useState("");
  const [specialRequests, setSpecialRequests] = useState("");
  const { cart, incrementQuantity, decrementQuantity } = useCart();

  useEffect(() => {
    const totalCost = cart.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );
    setCost(totalCost);
  }, [cart]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const orderDetails = {
      items: cart.map((item) => ({
        name: item.name,
        quantity: item.quantity,
        price: item.price,
      })),
      address,
      specialRequests,
    };

    // Log the order details
    console.log("Order Details:", orderDetails);

    // Show alert
    alert(`Order placed for ${cart.length} item(s).`);
  };

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h2 className={styles.title}>Checkout</h2>
        {cart.length > 0 ? (
          cart.map((item, index) => (
            <div key={index} className={styles.cartItem}>
              <div
                className={styles.itemImage}
                style={{ border: "2px solid  rgba(255, 112, 67)" }}
              >
                <img src={item.imagesrc} alt={item.name} />
              </div>

              <div className={styles.itemDetails}>
                <h3>{item.name}</h3>
                <p>{item.description}</p>
                <p>Rating: {item.rating} ⭐</p>
              </div>

              <div
                className={styles.tags}
                
              >
                <p>
                  Price per item: <strong style={{color:"orange"}}>₹{item.price}</strong>
                </p>
                <p>
                  Total Price: <strong style={{color:"orangered"}}>₹{item.price * item.quantity}</strong>
                </p>
                <div className={styles.quantityControls}>
                  <button
                    onClick={() => decrementQuantity(item.name)}
                    className={styles.controlButton}
                  >
                    -
                  </button>
                  <span style={{fontSize:"bold"}}>{item.quantity}</span>
                  <button
                    onClick={() => incrementQuantity(item.name)}
                    className={styles.controlButton}
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p style={{
            textAlign:"center",
            margin:"5rem",
            fontSize:"5rem",
            fontFamily:"Roboto",
            color:"#ff7043",
            boxShadow:"0 2px 10px rgba(255, 112, 67,0.5)",
            borderRadius:"12px"
          }}>Add something to eat...</p>
        )}
        <form onSubmit={handleSubmit} className={styles.form}>
          <label htmlFor="address">Delivery Address:</label>
          <textarea
            id="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            placeholder="Enter your delivery address"
            required
            className={styles.textarea}
          />
          <label htmlFor="specialRequests">Special Requests:</label>
          <textarea
            id="specialRequests"
            value={specialRequests}
            onChange={(e) => setSpecialRequests(e.target.value)}
            placeholder="Any special requests?"
            className={styles.textarea}
          />
          <div style={{display:"flex",justifyContent:"space-between"}}>
          <p className={styles.totalCost}>Total cost: <strong style={{color:"orangered"}}>₹{cost}</strong></p>
          <button type="submit" className={styles.orderButton}>
            Order Now
          </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Description;
