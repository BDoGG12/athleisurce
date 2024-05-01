import {userRoute} from 'next/router';

const ProductListPage = () => {

  const router = useRouter();
  const { page } = router.query;

  return (
    <div>
      <h1>Products - Page {page}</h1>
      <ProductList products={products} />
      {/* Pagination component can go here */}
    </div>
  );
};

// This function gets called at build time
export async function getStaticProps({ params }) {
  // Fetch products for the specified page from your backend or database
  const products = await fetchProductsForPage(params.page);

  // Pass fetched products as props
  return {
    props: {
      products
    }
  };
};

// This function gets called at build time
// It specifies the paths that have to be rendered to HTML at build time
export async function getStaticPaths() {
  // Calculate the total number of products/pages
  const totalPages = await getTotalPages();

  // Generate paths for all product pages
  const paths = Array.from({ length: totalPages }, (_, i) => ({ params: { page: `${i + 1}` } }));

  return {
    paths,
    fallback: false // Set fallback to false if you don't have any more pages
  };
};

export default ProductListPage;