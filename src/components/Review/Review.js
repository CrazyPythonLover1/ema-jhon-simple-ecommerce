import React, { useState } from 'react';
import { useEffect } from 'react';
import {getDatabaseCart} from '../../utilities/databaseManager';
import fakeData from '../../fakeData';

const Review = () => {
    const [cart, setCart] = useState([]);

    useEffect(()=>{
        const saveCart = getDatabaseCart();
        const productKeys = Object.keys(saveCart);
        
        const cartProduct = productKeys.map(key =>{
            const product = fakeData.find(pd => pd.key === key);
             product.quantiry = saveCart[key];
             return product;
        })
        setCart(cartProduct);
    },[])
    return (
        <div>
            <h1> Cart:{cart.length} </h1>
        </div>
    );
};

export default Review;