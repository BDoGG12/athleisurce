import "@/styles/globals.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from '../components/layout/layout';
import { ClothesProvider } from '../context/clothes-context';
import React from 'react';

export default function App({ Component, pageProps }) {
  return (
    <>
      <ClothesProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ClothesProvider>
    </>
  );
}
