import { Button } from 'react-bootstrap';
import React, {useEffect, useState} from 'react';
import classes from './product-detail.module.css';
import axios from 'axios';
import { useClothesContext } from "../../context/clothes-context";

const ProductDetail = ({ title, description, price, url }) => {
  const descriptionArray = description.split('\n').map(line => line.replace(/^\s*-\s*/, ''));

  const {logInUser, sessions} = useClothesContext();
  console.log('user', logInUser);
  const [userInfo, setUserInfo] = useState();
  const {name} = logInUser;
  let names;
  if (name) {
    names = name.split(' ');
  }

  useEffect(() => {
    const {id} = logInUser;
    axios.get(`https://localhost:44375/api/GetCustsomerById/${id}`)
    .then((res) => {
      setUserInfo(res.data);
    })
    .catch((e) => {
      console.log(e);
    });
    
  }, []);

  const addToCartHandler = () => {
    const productInfo = {
      title: title,
      description: description,
      price: price,
      size: 'small',
      imageUrl: url,
      category: 'clothes', 
    }
    console.log('user info', userInfo);
    axios.post(`https://localhost:44375/api/Cart`, {
      quantity: 1,
      customerInfo: userInfo,
      productInfo: productInfo
    })
    .then((res) => {
      console.log(res);
    })
    .catch((e) => {
      console.log(e);
    });
  };

  return (
    <div>
      <h1>{title}</h1>
      <img className={classes.image} src={url} alt={name} />
      <ul>
        {descriptionArray.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <p>Price: ${price}</p>
      <Button onClick={addToCartHandler}>Add to Cart</Button>
    </div>
  );
};

export default ProductDetail;