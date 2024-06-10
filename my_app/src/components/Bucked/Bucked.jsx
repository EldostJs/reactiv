import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import StyleBucked from './Bucked.module.css';

function Bucked() {
  const location = useLocation();
  const { id, name, price, image } = location.state || {};
  const [quantity, setQuantity] = useState(1);
  const [promoCodeVisible, setPromoCodeVisible] = useState(false);
  const [promoCode, setPromoCode] = useState('');
  const [discount, setDiscount] = useState(0);

  if (!name || !price || !image) {
    return <div>No items in the bag</div>;
  }

  const handleQuantityChange = (event) => {
    setQuantity(Number(event.target.value));
  };

  const handlePromoCodeChange = (event) => {
    setPromoCode(event.target.value);
  };

  const handlePromoCodeToggle = () => {
    setPromoCodeVisible(!promoCodeVisible);
  };

  const handleApplyPromoCode = () => {
    if (promoCode === 'promo') {
      setDiscount(0.25);
      alert('You used a  Promo Code')
    } else {
      setDiscount(0);
      alert('Invalid promo code');
    }
  };

  const subtotal = parseFloat(price) * quantity;
  const shipping = 8.00;
  const discountAmount = subtotal * discount;
  const totalPrice = (subtotal + shipping - discountAmount).toFixed(2);

  return (
    <>
      <div className={StyleBucked.container}>
        <div className={StyleBucked.bag}>
          <h2 className={StyleBucked.bb}>Bag</h2>
          <div className={StyleBucked.itemDetails}>
            <img src={image} alt={name} />
            <div className={StyleBucked.itemInfo}>
              <p><strong className={StyleBucked.bb}>{name}</strong></p>
              <p className={StyleBucked.bb}>Men's Road Running Shoes</p>
              <p className={StyleBucked.bb}>White/Psychic Blue/Speed Yellow/Speed Red</p>
              <div className={StyleBucked.md}>
                <p className={StyleBucked.bb}>Size</p>
                <select className={StyleBucked.va}>
                  <option value="39">39</option>
                  <option value="40">40</option>
                  <option value="41">41</option>
                  <option value="42">42</option>
                </select>
                <p className={StyleBucked.bb}>Quantity</p>
                <select className={StyleBucked.va} value={quantity} onChange={handleQuantityChange}>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </select>
              </div>
              <p><strong className={StyleBucked.bb}>${subtotal.toFixed(2)}</strong></p>
            </div>
          </div>
        </div>
        <div className={StyleBucked.summary}>
          <h2 className={StyleBucked.bb}>Summary</h2>
          <div className={StyleBucked.promoCode}>
            <span onClick={handlePromoCodeToggle} style={{ cursor: 'pointer' }} className={StyleBucked.bb}>
              Do you have a Promo Code? {promoCodeVisible ? '▲' : '▼'}
            </span>
            {promoCodeVisible && (
              <div>
                <input 
                  type="text" 
                  value={promoCode} 
                  onChange={handlePromoCodeChange} 
                  placeholder="Enter promo code"
                />
                <button onClick={handleApplyPromoCode}>Apply</button>
              </div>
            )}
          </div>
          <div className={StyleBucked.subtotal}>
            <span className={StyleBucked.bb}>Subtotal</span>
            <span className={StyleBucked.bb}>${subtotal.toFixed(2)}</span>
          </div>
          {discount > 0 && (
            <div className={StyleBucked.discount}>
              <span className={StyleBucked.bb}>Discount</span>
              <span className={StyleBucked.bb}>- ${discountAmount.toFixed(2)}</span>
            </div>
          )}
          <div className={StyleBucked.shipping}>
            <span className={StyleBucked.bb}>Estimated Shipping & Handling</span>
            <span className={StyleBucked.bb}>$8.00</span>
          </div>
          <div className={StyleBucked.total}>
            <strong className={StyleBucked.bb}>Total</strong>
            <strong className={StyleBucked.bb}>${totalPrice}</strong>
          </div>
          <div className={StyleBucked.checkout}>
            <button className={StyleBucked.bb}>Checkout</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Bucked;
