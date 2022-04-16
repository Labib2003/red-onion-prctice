import React from 'react';
import CartCalculation from './CartCalculation/CartCalculation';
import CartList from './CartList/CartList';

const Cart = () => {
    return (
        <div>
            <CartList></CartList>
            <CartCalculation></CartCalculation>
        </div>
    );
};

export default Cart;