import React, {useEffect, useState} from 'react';
import {Carousel, Container, Row, Col, Card} from 'react-bootstrap';
import {createClient} from 'contentful';

const HomeCarousel = () => {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
  });
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    const { items } = await client.getEntries({ content_type: 'clothes' });
    setProducts(items);
  };

  return (
    <Container>
      <h1>Welcome to our E-commerce store!</h1>
      {products.length > 0 ? (
        <Carousel>
          {products.map((product, index) => (
            <Carousel.Item key={index}>
              <img className='d-block w-100' src={product.fields.images[0].fields.file.url} alt={product.fields.name} />
              <Carousel.Caption>
                <h3>{product.fields.name}</h3>
                <p>{product.fields.description}</p>
                <p>{product.price}</p>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
      ) : (
        <p>Loading products...</p>
      )}
    </Container>
  )
};

export default HomeCarousel;