import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';

const CartWidget = () => {
    const { getQuantity } = useContext(CartContext)
    return(
        <div>
            <Link to="/cart">
            <img src="https://w7.pngwing.com/pngs/225/984/png-transparent-computer-icons-shopping-cart-encapsulated-postscript-shopping-cart-angle-black-shopping.png" width="100px" height="50px" alt="cart"/>
            <button style={{ backgroundColor: '#e4c360', border: 'none' }}>{getQuantity()}</button>
            </Link>
        </div>
    );
};
export default CartWidget;