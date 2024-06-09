import React from 'react';
import { useParams } from 'react-router-dom';
import StyleBucked from './Bucked.module.css';

function Bucked() {

  const { id, name, price, image } = useParams();

  return (
    <>
      <div className={StyleBucked.container}>
        <div className={StyleBucked.bag}>
          <h2>Bag</h2>
          <div className={StyleBucked.itemDetails}>
            <img src="shoe.jpg" alt="Nike Pegasus 41" />
            <div className={StyleBucked.itemInfo}>
              <p><strong>{name}</strong></p>
              <p>Men's Road Running Shoes</p>
              <p>White/Psychic Blue/Speed Yellow/Speed Red</p>
              <p>Size 9</p>
              <p>Quantity 1</p>
              <p><strong>$140.00</strong></p>
            </div>
          </div>
          <p>Arrives by Tue, Jun 18 <a href="#">Edit Location</a></p>
        </div>
        <div className={StyleBucked.summary}>
          <h2>Summary</h2>
          <div className={StyleBucked.promoCode}>
            <span>Do you have a Promo Code?</span>
            <select>
              <option value="none">None</option>
              {/* Add more options as needed */}
            </select>
          </div>
          <div className={StyleBucked.subtotal}>
            <span>Subtotal</span>
            <span>$140.00</span>
          </div>
          <div className={StyleBucked.shipping}>
            <span>Estimated Shipping & Handling</span>
            <span>$8.00</span>
          </div>
          <div className={StyleBucked.tax}>
            <span>Estimated Tax</span>
            <span>--</span>
          </div>
          <div className={StyleBucked.total}>
            <strong>Total</strong>
            <strong>$148.00</strong>
          </div>
          <div className={StyleBucked.checkout}>
            <button>Checkout</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Bucked;
