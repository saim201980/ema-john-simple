import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css'
const Product = (props) => {
    //console.log(props)
    const {name, img, seller, price, stock} = props.product
    return (
        <div className ="product">
            <div>
                <img src={img} alt="" />
                
            </div>
        <div>
          
                <h2 className = "product-name">{name}</h2>
                <br/>
                <p><small>by : {seller}</small></p>
                <p>price : ${price}</p>
                <p><small>only {stock} left in stock order-soon</small></p>

                <button className= "btn" onClick = {() =>props.handleAddProduct(props.product)}>
                     <FontAwesomeIcon icon={faShoppingCart} /> add to cart
                </button>
        </div>
        </div>
    );

    }
export default Product;