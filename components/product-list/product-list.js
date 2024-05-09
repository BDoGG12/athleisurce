// components/ProductList.js
import classes from './product-list.module.css';
import React from 'react';
import { Card } from 'react-bootstrap';
import Link from 'next/link';

const ProductList = ({ products }) => {
  return (
    <div className={classes.productList}>
      {products.map(product => (
        <div key={product.sys.id}>
          <Link href={`/product-detail/${product.fields.name}`}>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant='top' src={product.fields.images[0].fields.file.url} />
              <Card.Body>
                <Card.Title>{product.fields.name}</Card.Title>
                <Card.Text>{product.fields.price}</Card.Text>
              </Card.Body>
            </Card>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
