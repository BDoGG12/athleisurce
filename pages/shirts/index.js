import {useRouter} from 'next/router';
import {createClient} from 'contentful';
import {useState} from 'react';
import ProductList from '../../components/product-list/product-list';

const client = createClient({
  space: 'p843ovnyw7tf',
  accessToken: 'L-nXGukJbr9-8cXH318T_7Ibn4-qm2sZIhmnXOdIvkU'
});

const ShirtsPage = ({products}) => {

  const router = useRouter();
  const { page } = router.query;
  console.log('shirts', products);

  return (
    <div>
      <h1>Shirts</h1>
      <ProductList products={products} />
    </div>
  );
};

export async function getStaticProps() {
  const { items } = await client.getEntries({ content_type: 'clothes' });
  const filteredItems = items.filter(item => item.fields.category === 'shirts')

  return {
    props: {
      products: filteredItems
    }
  };
}

export default ShirtsPage;