import React from 'react';
import StyleHeader from './Header.module.css';
import { Link } from 'react-router-dom';


function Header() {


  return (
        <div className={StyleHeader.container}>
          <p className={StyleHeader.lead}>My shoe store.</p>
          <div className={StyleHeader["header-bar"]}>
            <h1 className={StyleHeader.logo}>Eldost</h1>
            <ul className={StyleHeader["slider-menu"]}>
              <li><Link to='/' className={StyleHeader.lis}>About</Link></li>
              <li><Link to='/catalog' className={StyleHeader.lis}>Catalog</Link></li>
              <li><Link to='/buc' className={StyleHeader.lis}>Bucked</Link></li>
            </ul>
          </div>
          <p className={StyleHeader["aeu-signature"]}>❤️ EldostJs 👩‍💻</p>
        </div>
  );
}

export default Header;
