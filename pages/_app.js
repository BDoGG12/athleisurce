import "@/styles/globals.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from '../components/layout/layout';
import { ClothesProvider } from '../context/clothes-context';
import React from 'react';
import { SessionProvider } from "next-auth/react";

export default function App({ Component, pageProps }) {
  return (
    <SessionProvider session={pageProps.session}>
      <ClothesProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ClothesProvider>
    </SessionProvider>
  );
}
