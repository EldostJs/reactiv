import React ,{ useContext } from 'react';
import StyleHeader from './Header.module.css';
import img from '../icon/purchase.png'
import { BasketContext } from '../card/BasketContext';

function Header() {

  const { basketCount } = useContext(BasketContext);
  
  return (
    <div className={StyleHeader.container}>
    <p className={StyleHeader.lead}>My shoe store.</p>
    <div className={StyleHeader["header-bar"]}>
      <h1 className={StyleHeader.logo}>Eldost</h1>
      <ul className={StyleHeader["slider-menu"]}>
        <li>Home</li>
        <li>About</li>
        <li>Services</li>
        <li><button className={StyleHeader.bas}><img src={img} className={StyleHeader.im} alt="" /></button></li>
        <li><span>{basketCount}</span></li>
      </ul>
    </div>
    <p className={StyleHeader["aeu-signature"]}>❤️ EldostJs 👩‍💻</p>
  </div>
  );
}

export default Header;
