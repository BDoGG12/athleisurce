import { useClothesContext } from '../../context/clothes-context';
import ProductList from '../../components/product-list/product-list';
import React from 'react';

const SearchResultsPage = () => {

  const { searchResults } = useClothesContext();

  return (
    <div>
      <h1>Search Results</h1>
      <ProductList products={searchResults} />
    </div>
  )
};

export default SearchResultsPage;