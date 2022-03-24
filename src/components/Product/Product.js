import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import './Product.css'

const Product = (props) => {

    const { name, img, price, ratings, seller } = props.product;
    return (
        <div className='product'>
            <img className='product_img' src={img} alt="" />
            <div className="product_info">
                <p className='product_name'>{name}</p>
                <p className='product_price'>Price: ${price}</p>
                <p><small className='product_seller'>Manufacturer: {seller}</small></p>
                <p><small className='product_rating'>Rating: {ratings} stars</small></p>
            </div>
            <button className='product_btn' onClick={() => props.handleAddToCart(props.product)}>Add to cart <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon> </button>
        </div>
    );
};

export default Product;