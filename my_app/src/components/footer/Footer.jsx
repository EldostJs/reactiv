import React from 'react';
import StyleFooter from './Footercss.module.css';

function Footer() {
  return (
    <section className={StyleFooter.container}>
      <h3 className={StyleFooter.h}></h3>
      <div className={StyleFooter.footer}>
        <div className={StyleFooter.button}></div>
        <div className={StyleFooter.container}>
          <div className={StyleFooter.cont}>
            <div className={StyleFooter.footer_center}>
              <h3>It`s my footer</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
