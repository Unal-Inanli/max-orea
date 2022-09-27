import React from 'react';
import MainLayout from '../layouts/MainLayout';
import CounterWithBackground from '../page_components/about/CounterWithBackground';
import Join from '../page_components/about/Join';
import PictureText from '../page_components/about/PictureText';
import PictureTextReverse from '../page_components/about/PictureTextReverse';

const About = () => {
    return (
        <MainLayout title={"Orea - Hakkımızda"}>
            <PictureText />
            <PictureTextReverse />
            <CounterWithBackground />
            <Join />
        </MainLayout>
    );
}

export default About;
