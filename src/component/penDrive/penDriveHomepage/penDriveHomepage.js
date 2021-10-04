import React from "react";
import ReactDOM from 'react-dom';
import './penDriveHomepage.css';

import productData from '../../productData';
import ProductView from "../../productView/ProductView";

const PenDriveHomepage = () => {
    const listItem = productData.filter(item => item.catagory === 'pendrive');
    return (
        <div className='dc-homepage'>
            <div className='dc-homepage-main'>
                <div className='dc-homepage-main-heading'>
                    <h1>Pendrive</h1>
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

export default PenDriveHomepage;