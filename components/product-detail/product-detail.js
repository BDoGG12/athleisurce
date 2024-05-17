import { Button } from 'react-bootstrap';
import React from 'react';
import classes from './product-detail.module.css';

const ProductDetail = ({ name, description, price, url }) => {
  const descriptionArray = description.split('\n').map(line => line.replace(/^\s*-\s*/, ''));

  return (
    <div>
      <h1>{name}</h1>
      <img className={classes.image} src={url} alt={name} />
      <ul>
        {descriptionArray.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <p>Price: ${price}</p>
      <Button>Add to Cart</Button>
    </div>
  );
};

export default ProductDetail;