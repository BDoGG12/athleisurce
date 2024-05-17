import Head from 'next/head';
import Image from 'next/image';
import Main from '../components/main/main';
import styles from '@/styles/Home.module.css';
import React from 'react';
import HomeCarousel from '../components/home-carousel/home-carousel';

export default function Home() {
  return (
    <>
      <Head>
        <title>Athleisurce</title>
        <meta name='description' content='Home' />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <HomeCarousel />
      </main>
    </>
  );
}
