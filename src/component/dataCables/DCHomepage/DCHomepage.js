import React from "react";
import ReactDOM from 'react-dom';
import './DCHomepage.css';

import productData from '../../productData';
import ProductView from "../../productView/ProductView";


const DCHomepage = () => {
    const listItem = productData.filter(item => item.catagory === 'data-cables');
    return (
        <div className='dc-homepage'>
            <div className='dc-homepage-main'>
                <div className='dc-homepage-main-heading'>
                    <h1>Data Cables</h1>
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

export default DCHomepage;