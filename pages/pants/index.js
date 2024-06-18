import {useRouter} from 'next/router';
import {createClient} from 'contentful';
import {useState} from 'react';
import ProductList from '../../components/product-list/product-list';
import React from 'react';
const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
});

const PantsPage = ({products}) => {

  const router = useRouter();
  const { page } = router.query;

  return (
    <div>
      <h1>Pants</h1>
      <ProductList products={products} />
    </div>
  );
};

export async function getStaticProps() {
  const { items } = await client.getEntries({ content_type: 'clothes' });
  const filteredItems = items.filter(item => item.fields.category === 'pants');

  return {
    props: {
      products: filteredItems
    }
  };
}

export default PantsPage;