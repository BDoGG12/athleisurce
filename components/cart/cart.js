import React, { useState, useEffect } from "react";
import axios from "axios";
import {useClothesContext} from '../../context/clothes-context'

const Cart = ({customerInfo}) => {
    const {logInUser} = useClothesContext();
    const {id} = logInUser;

    // useEffect(() => {
    //     console.log('id', id)
    //     axios.get(`https://localhost:44375/api/cart/${id}`)
    //     .then((res) => {
    //         console.log(res);
    //     })
    //     .catch((e) => {
    //         console.log('error getting cart');
    //     })
    // }, [])

    const buttonHandler = () => {
        console.log('To proceed to checkout');
    }

    return (
        <>
        <h1>Cart</h1>
        <p>Product Name</p>
        <p>Price</p>
        <button onClick={buttonHandler}>Proceed to checkout</button>
        </>
    );
};

export default Cart;