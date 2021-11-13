import React from "react";
import ReactDOM from 'react-dom';
import "./Home.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import {Helmet} from "react-helmet";

import one from "../../assets/homepage_carousel/1.jpg";
import two from "../../assets/homepage_carousel/2.jpg";
import three from "../../assets/homepage_carousel/3.jpg";

import productData from '../productData';
import ProductView from "../productView/ProductView";

const Home = () => {

    const listItem = productData;

    return (
        <div className='homepage-main'>
        <Helmet>
            <title>Phontek - Your Technological Companion</title>
            <meta name="description" content="Visit Phontek and explore all best day-to-day gadgets to make your live more easy and better. Mobile And Mobile Accessories Such As _ Charger, Battery, Mobile Cover, Handsfree, Speakers, Bluetooth And Memory Card, Pen Drive Accessories."/>
            <link rel="canonical" href="https://phontek.in/"/>
            <meta name="robots" content="follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:large"/>
            <meta name="keywords" content="Phontek, Phontek.in, mobile accessories, mobile accessories near me, mobile accessories store near me, mobile accessories wholesale, mobile accessories store, mobile accessories display rack, mobile accessories wholesale near me, mobile accessories list, mobile accessories market, mobile accessories website, earphone accessories, earphone accessories name, earphone accessories earbuds, earphone accessories shop, earphone accessories mobile, earphone accessories stand, earphone accessories airpods, earphone accessories radio, Charger, Battery, Mobile Cover, Handsfree, Speakers, Bluetooth And Memory Card, Pen Drive Accessories" />
            
            {/* Open Graph data */}
            <meta property="og:locale" content="en_US" />
            <meta property="og:type" content="website" />
            <meta property="og:title" content="Phontek - Your Technological Companion" />
            <meta property="og:description" content="Visit Phontek and explore all best day-to-day gadgets to make your live more easy and better. Mobile And Mobile Accessories Such As _ Charger, Battery, Mobile Cover, Handsfree, Speakers, Bluetooth And Memory Card, Pen Drive Accessories." />
            <meta property="og:url" content="https://phontek.in/" />
            <meta property="og:site_name" content="Phontek" />
            <meta property="og:updated_time" content="2021-11-11T00:00:00+05:30" />
            <meta property="og:image" content="	data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANwA…tMDItMDFUMDg6NDY6NDArMDA6MDDTu/O8AAAAAElFTkSuQmCC" />
            <meta property="product:brand" content="Phontek" />
            <meta property="product:price:currency" content="INR" />
            {/* Open Graph data */}
        </Helmet>

            <div className='image-carousel'>
            <Carousel infiniteLoop={true} autoPlay={true} interval={3000} transitionTime={500} showArrows={false} showStatus={false} showThumbs={false} showIndicators={false}>
                <div>
                    <img src={one} alt='carousel-1st-img' />
                </div>
                <div>
                    <img src={two} alt='carousel-2nd-img' />
                </div>
                <div>
                    <img src={three} alt='carousel-3rd-img' />
                </div>
            </Carousel>
            </div>
            <div className='all-products'>
                <div className='dc-homepage-main-heading'>
                    <h1>All Products</h1>
                </div>
                <div className='dc-homepage-main-result'>
                    <p>Showing all {listItem.length} results!</p>
                </div>
                <div>
                    <ProductView data={listItem} />
                </div>
            </div>
        </div>
    )
}

export default Home;