import Head from 'next/head';
import React from 'react';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import { motion } from "framer-motion";

const HomeLayout = ({ children, title }) => {
    return (
        <>
            <Head>
                <title>{title}</title>
                <link rel="shortcut icon" href="/favicon.ico" />
            </Head>
            <div className="home bodywhite">
                <Header />
                <motion.div initial={{ opacity: 0, translateX: -50 }} animate={{ opacity: 1, translateX: 0 }} >
                    {children}
                </motion.div>
            </div>
            <Footer />
        </>
    );
}

export default HomeLayout;
