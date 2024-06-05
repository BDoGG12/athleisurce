// src/Checkout.js
import React, { useState, useEffect } from "react";
import classes from "./checkout.module.css";
import { useClothesContext } from "../../context/clothes-context";
import axios from "axios";
import { useRouter } from "next/router";

const Checkout = ({ items }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    cardNumber: "",
    expirationDate: "",
    cvv: "",
  });

  const router = useRouter();

  const [order, setOrder] = useState();

  const { logInUser, sessions, setCartItems, cartItems } = useClothesContext();
  const { id } = logInUser;

  useEffect(() => {
    console.log("id", id);
    if (sessions) {
      axios
        .get(`https://localhost:44375/api/cart/${id}`)
        .then((res) => {
          setOrder(res.data);
        })
        .catch((e) => {
          console.log("error getting cart");
        });
    }
  }, []);

  const currentDate = new Date();

  const formattedDate = currentDate.toISOString();

  const formattedTime = currentDate.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const generateGUID = () => {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
      /[xy]/g,
      function (c) {
        var r = (Math.random() * 16) | 0,
          v = c == "x" ? r : (r & 0x3) | 0x8;
        return v.toString(16);
      }
    );
  };

  const clearCart = () => {
    axios.delete('https://localhost:44375/api/Cart/ClearCart')
    .then((res) => {
        console.log('Cart cleared');
    })
    .catch((e) => {
        console.log('Error clearing cart');
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted: ", formData);
    // Here you can add the logic to process the payment
    var customer = order[0];
    const { customerInfo } = customer;
    var orders = [];
    const filtered = cartItems.forEach((element) => {
      let item = element.productInfo;
      orders.push(item);
    });
    console.log("Customer: ", customerInfo);
    const reqBody = {
      id: generateGUID(),
      orderItems: orders,
      subtotal: calculateTotal(),
      customer: customerInfo,
      orderDate: formattedDate,
    };
    console.log("req body", reqBody);
    axios
      .post("https://localhost:44375/api/Order", reqBody)
      .then((res) => {
        console.log("Order response", res);
        setCartItems([]);
        clearCart();
        router.push("/");
      })
      .catch((e) => {
        console.log("Error processing order");
      });
  };

  const calculateTotal = () => {
    return cartItems
      .reduce((total, item) => total + item.productInfo.price, 0)
      .toFixed(2);
  };

  return (
    <div className={classes.checkoutContainer}>
      <h2>Checkout</h2>
      <div className={classes.cartItems}>
        <h3>Cart Items</h3>
        <ul>
          {cartItems.map((item) => (
            <li key={item.productInfo.id}>
              {item.productInfo.title} - ${item.productInfo.price} x{" "}
              {item.quantity}
            </li>
          ))}
        </ul>
        <h3>Total: ${calculateTotal()}</h3>
      </div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Address:</label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Card Number:</label>
          <input
            type="text"
            name="cardNumber"
            value={formData.cardNumber}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Expiration Date:</label>
          <input
            type="text"
            name="expirationDate"
            value={formData.expirationDate}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>CVV:</label>
          <input
            type="text"
            name="cvv"
            value={formData.cvv}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Checkout;
