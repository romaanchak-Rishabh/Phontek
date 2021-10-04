import React from "react";
import ReactDOM from 'react-dom';
import "./Home.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import one from "../../assets/homepage_carousel/1.jpg";
import two from "../../assets/homepage_carousel/2.jpg";
import three from "../../assets/homepage_carousel/3.jpg";

import productData from '../productData';
import ProductView from "../productView/ProductView";

const Home = () => {

    const listItem = productData;

    return (
        <div className='homepage-main'>
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