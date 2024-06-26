import { useClothesContext } from '../../context/clothes-context';
import ProductList from '../../components/product-list/product-list';
import React from 'react';
import {useRouter} from 'next/router';
import Head from 'next/head';

const SearchResultsPage = () => {

  const router = useRouter();
  const {slug} = router.query;

  const { searchResults } = useClothesContext();

  return (
    <div>
      <Head>
        <title>Athleisurce: {slug}</title>
        <meta name='description' content='pants' />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Search Results</h1>
      <ProductList products={searchResults} />
    </div>
  )
};

export default SearchResultsPage;