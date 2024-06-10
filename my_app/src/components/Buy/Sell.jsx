import React from 'react';
import { useParams, Link } from 'react-router-dom';
import StyleSell from './Sell.module.css';

function Sell() {
    const { id, name, price, image } = useParams();

    return (
        <div className={StyleSell.productContainer}>
            <div className={StyleSell.productImage}>
                <img src={image} alt={name} />
            </div>
            <div className={StyleSell.productDetails}>
                <span className={StyleSell.rating}>★ Highly Rated</span>
                <h1 className={StyleSell.bb}>{name}</h1>
                <p className={StyleSell.productType}>Men's Road Running Shoes</p>
                <p className={StyleSell.price}>${price}</p>
                <div className={StyleSell.fitOptions}>
                    <Link 
                        to='/buc' 
                        state={{ id, name, price, image }} 
                        className={StyleSell.fb}
                    >
                        <button className={`${StyleSell.fitBtn} ${StyleSell.selected}`}>Buy</button>
                    </Link>
                    <Link to='/catalog' className={StyleSell.fb}>
                        <button className={StyleSell.fitBtn}>Go to Back</button>
                    </Link>
                </div>
                <div className={StyleSell.sizeOptions}>
                    <button className={StyleSell.sizeBtn}>39</button>
                    <button className={StyleSell.sizeBtn}>40</button>
                    <button className={StyleSell.sizeBtn}>41</button>
                    <button className={StyleSell.sizeBtn}>42</button>
                </div>
            </div>
        </div>
    );
}

export default Sell;
