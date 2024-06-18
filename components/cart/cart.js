import React, { useState, useEffect } from "react";
import axios from "axios";
import { useClothesContext } from "../../context/clothes-context";
import classes from "./cart.module.css";
import { useRouter } from "next/router";
import { Button } from "react-bootstrap";

const Cart = ({ customerInfo }) => {
  const { logInUser, sessions, setCartItems, cartItems } = useClothesContext();
  const { id } = logInUser;
  const [cartItem, setCartItem] = useState([]);
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log("id", id);
    if (sessions) {
      axios
        .get(`https://localhost:44375/api/cart/${id}`)
        .then((res) => {
            setCartItems(res.data);
            setCartItem(res.data);
        })
        .catch((e) => {
          console.log("error getting cart");
        });
    }
  }, []);

  const fetchCartItems = () => {
    if (sessions) {
      axios
        .get(`https://localhost:44375/api/cart/${id}`)
        .then((res) => {
          console.log(res.data);
          setCartItem(res.data);
        })
        .catch((e) => {
          console.log("error getting cart");
        });
    }
  };

  const buttonHandler = () => {
    router.push(`/checkout/${id}`);
  };

  const handleRemove = (id, customerId) => {
    axios
      .delete(`https://localhost:44375/api/cart/${customerId}/${id}`)
      .then((res) => {
        console.log(res);
        fetchCartItems();
      })
      .catch((error) => {
        console.error("There was an error removing the cart item!", error);
      });
  };

  const handleQuantityChange = (id, customerId, quantity) => {
    if (quantity < 1) return;
    axios
      .put(`https://localhost:44375/api/cart/${customerId}/${id}`, { quantity })
      .then((res) => {
        console.log(res);
        fetchCartItems();
      })
      .catch((error) => {
        console.error("There was an error updating the cart item!", error);
      });
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.productInfo.price, 0).toFixed(2);
};

  return (
    <>
      <h1>Cart</h1>
      {cartItem.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          <ul className={classes.cartList}>
            {cartItem.map((item) => (
              <li key={item.productInfo.id} className={classes.cartItem}>
                <img
                  src={item.productInfo.imageURL}
                  alt={item.productInfo.title}
                  className={classes.itemImage}
                />
                <div className={classes.itemName}>{item.productInfo.title}</div>
                <div className={classes.itemQuantity}>
                  Quantity:
                  <input
                    className={classes.quantityInput}
                    type="number"
                    value={item.quantity}
                    onChange={(e) =>
                      handleQuantityChange(
                        item.productInfo.id,
                        item.customerInfo.id,
                        e.target.value
                      )
                    }
                  />
                </div>
                <div className={classes.itemPrice}>
                  ${item.productInfo.price}
                </div>
                <button
                  onClick={() =>
                    handleRemove(item.productInfo.id, item.customerInfo.id)
                  }
                  className={classes.removeButton}
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
          <div className={classes.subtotal}>Total: ${calculateTotal()}</div>
          <Button className={classes.placeOrderBtn} onClick={buttonHandler}>Place Order</Button>
        </>
      )}
    </>
  );
};

export default Cart;
