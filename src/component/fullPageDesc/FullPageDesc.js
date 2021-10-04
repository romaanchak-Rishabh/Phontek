import React from "react";
import ReactDOM from 'react-dom';
import "./FullPageDesc.css";
import productData from '../productData';

import { FaPhoneSquareAlt, FaWhatsappSquare } from "react-icons/fa";
import { Link } from "react-router-dom";
import ProductView from "../productView/ProductView";
import { Carousel } from "react-responsive-carousel";


const FullPageDescription = ({ match, location }) => {
    const {
      params: { productId }
    } = match;

    const list = productData.filter(item => item.id === productId);

    var images = list[0].extra_image;

    const path = '/'+(list[0].catagory);
  
    const new_list = list[0].description;

    const related = productData.filter(item => (item.catagory === list[0].catagory && item.id != list[0].id));

    return (
      <div className='fullpage'>
        <div className='fullpage-product-main'>
          <div className='fullpage-product-main-img'>

          <Carousel showStatus={false}>
            {images.map(item => <div><img src={item} alt='product-image' /></div>)}
          </Carousel>

          </div>
          <div className='fullpage-product-main-titles'>
            <h1>{list[0].product_name}</h1>
            <p>{list[0].title_description}</p>
            <button type='button'>
              <p>Make an enquiry about this product</p>
              <div className='fullpage-contact-links'>
                <a href='tel: +91-11-25805175' className='phone-icon'><FaPhoneSquareAlt size={27} /></a>
                <a href='https://wa.me/919871850490' className='whatsapp-icon'><FaWhatsappSquare size={30} /></a>
              </div>
            </button>
            <br /><br />
            <p>Category: <Link to={path} style={{ textDecoration: 'none', color: '#ed7203'}}>{list[0].catagory.toUpperCase()}</Link></p>
          </div>
        </div>
        <div className='product-description'>
          <hr />
          <div className='product-description-title'>
            <h1>Description</h1>
            <hr />
          </div>
          <br />
          <div className='product-discription-li'>
            <ul>{new_list.map(desc => <li key={desc}> {desc} </li>)}</ul>
          </div>
          <br />
          <br />
          <hr />
          <br />
          <br />
          <div className='related-products'>
            <h1>Related Products</h1>
            <div className='related-products-data'>
              <ProductView data={related} />
            </div>
          </div>
        </div>
      </div>
    );
  };

export default FullPageDescription;