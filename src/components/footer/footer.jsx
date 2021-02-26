import React from 'react';
import Navigation from '../navigation/navigation';
import { FOOTER_NAV } from '../../utils/const';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__wrapper">
        <Navigation navItems={FOOTER_NAV} mod={`--footer`} />
      </div>
    </footer>
  );
};

export default Footer;
