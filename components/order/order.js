import React, { useState, useEffect } from "react";
import { useClothesContext } from "@/context/clothes-context";
import classes from "./order.module.css";

import axios from "axios";

const Order = () => {
  const [orders, setOrders] = useState([]);

  const { logInUser, sessions, setCartItems, cartItems } = useClothesContext();
  const { id } = logInUser;

  useEffect(() => {
    if (sessions) {
      axios
        .get(`https://localhost:44375/api/Orders/${id}`)
        .then((res) => {
          console.log(res);
          setOrders(res.data);
        })
        .catch((e) => {
          console.log(e);
        });
    }
  }, []);

  const fetchOrders = () => {
    axios
        .get(`https://localhost:44375/api/Orders/${id}`)
        .then((res) => {
          console.log(res);
          setOrders(res.data);
        })
        .catch((e) => {
          console.log(e);
        });
  };

  const cancelHandler = (id) => {
    axios.delete(`https://localhost:44375/api/Order/${id}`)
    .then((res) => {
        console.log('Successfully canceled order');
        fetchOrders();
    })
    .catch((e) => {
        console.log('error canceling order');
    })
  }

  return (
    <div className={classes.pastOrdersContainer}>
      <h2>Past Orders</h2>
      <table className={classes.pastOrdersTable}>
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Date</th>
            <th>Items</th>
            <th>Total</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
            {orders &&
              orders.map(order => (
                <tr key={order.id}>
                    <td>{order.id}</td>
                    <td>{order.orderDate}</td>
                    <td>
                        {order.orderItems.map((item, index) => (
                            <div key={index}>
                                <li>{item.title} - ${item.price}</li>
                            </div>
                        ))}
                    </td>
                    <td>{order.subtotal}</td>
                    <td>
                        <button onClick={() => {cancelHandler(order.id)}}>Cancel Order</button>
                    </td>
                </tr>
              ))}
        </tbody>
      </table>
    </div>
  );
};

export default Order;
