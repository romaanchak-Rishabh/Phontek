import React from "react";
import ReactDOM from 'react-dom';
import "./ProductView.css";

import FullPageDesc from "../fullPageDesc/FullPageDesc";

import { Link, NavLink } from "react-router-dom";
import { useRouteMatch } from 'react-router-dom';

const ProductView = (props) => {
    const { path } = useRouteMatch();

    const viewData = props.data.map((item) =>
        <div className='product-view-card' key={item.id}>
        <Link to={`/${item.catagory}/${item.id}`}>
            <div className='product-view-card-img'>
                <img src={item.product_image} alt='product image' title={item.product_name} />
                <button type='button' className='product-view-read-more'>Read More</button>
            </div>
            </Link>
            <div className='product-view-card-header'>
                <h2>{item.product_name}</h2>
            </div>
        </div>
    );
    return (
        <div className='product-view'>
            {viewData}
        </div>
    )
}

export default ProductView;