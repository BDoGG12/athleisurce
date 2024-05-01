// components/ProductList.js
import classes from './product-list.module.css';
import React from 'react';

const ProductList = ({ products }) => {
  return (
    <div className={classes.ProductList}>
      {products.map(product => (
        <div key={product.id} className={classes.product}>
          <img src={product.image} alt={product.title} className={} />
          <h3>{product.title}</h3>
          <p>{product.description}</p>
          <p>Price: ${product.price}</p>
          {/* Add to cart button can go here */}
        </div>
      ))}
    </div>
  );
};

export default ProductList;
