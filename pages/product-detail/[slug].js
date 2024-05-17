import React from 'react';
import { useRouter } from 'next/router';
import { createClient } from 'contentful';
import { fetchAllProductSlugs } from '../../utils/contentful';
import ProductDetail from '../../components/product-detail/product-detail';

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
});

const ProductDetailPage = ({ product }) => {
  console.log('product detail', product);
  const { name, description, price, images } = product.fields;
  const { fields } = images[0];
  const { file } = fields;
  const { url } = file;

  return (
    <ProductDetail name={name} description={description} price={price} url={url}  />
  );
};

export const getStaticPaths = async () => {
  const slugs = await fetchAllProductSlugs();
  const paths = slugs.map((slug) => ({
    params: { slug },
  }));

  return {
    paths,
    fallback: false
  };
};

export const getStaticProps = async ({ params }) => {
  const { slug } = params;
  console.log('slug', slug);

  const { items } = await client.getEntries({ content_type: 'clothes' });
  const foundItem = items.find(item => item.fields.name === slug);

  return {
    props: {
      product: foundItem
    }
  }
};

export default ProductDetailPage;