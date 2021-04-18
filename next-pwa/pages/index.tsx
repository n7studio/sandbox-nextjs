import Head from 'next/head';
import React from 'react';
import GeolocationFragment from '../components/GeolocationFragment';
import UserMediaFragment from '../components/UserMediaFragment';
import styles from '../styles/Home.module.css';

export const Home: React.FunctionComponent = () => {
    return (
        <>
            <Head>
                <meta charSet="utf-8" />
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no" />
                <meta name="description" content="Description" />
                <meta name="keywords" content="Keywords" />
                <link rel="manifest" href="/manifest.json" />
                <link href="/favicon-16x16.png" rel="icon" type="image/png" sizes="16x16" />
                <link href="/favicon-32x32.png" rel="icon" type="image/png" sizes="32x32" />
                <link rel="apple-touch-icon" href="/apple-icon.png"></link>
                <meta name="theme-color" content="#317EFB" />
                <title>Nine7soft Training</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className={styles.container}>
                <main className={styles.main}>
                    <h1>Welcome to Nine7soft training</h1>
                </main>
                <div className={styles.core}>
                    <GeolocationFragment />
                    <UserMediaFragment />
                </div>

                <footer className={styles.footer}>
                    <a href="https://nine7soft.com" target="_blank" rel="noopener noreferrer">
                        Powered by Nine7soft
                    </a>
                </footer>
            </div>
        </>
    );
};

export default Home;
