import {useRouter} from 'next/router';
import {createClient} from 'contentful';
import {useState} from 'react';
import Head from 'next/head';
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
      <Head>
        <title>Pants</title>
        <meta name='description' content='pants' />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
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