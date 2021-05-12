import React from 'react';
import { Link } from 'react-router-dom';

import routes from '@config/routes';

const Footer = ({ ...props }) => {
  return (
    <footer className="footer">
      <div className="wrapper">
        <div className="arrow-up">
          <i className="hb-ico arrow-up-ico" />
        </div>
        <div className="footer-row">
          <div className="footer-col footer-col__1">
            <div className="footer-logo">
              <Link to="/" target="_blank">
                <img src="/img/logo-2.svg" alt="" />
              </Link>
            </div>
            <ul className="social">
              <li>
                <Link to="https://instagram.com/" target="_blank">
                  <img src="/img/social/inst.svg" alt="" />
                </Link>
              </li>
              <li>
                <Link to="https://twitter.com/" target="_blank">
                  <img src="/img/social/twit.svg" alt="" />
                </Link>
              </li>
            </ul>
            <p>Copyright © 2021 Buzz Fit</p>
          </div>
          <div className="footer-col footer-col__2">
            <span className="footer-subtitle">Company</span>
            <ul>
              <li>
                <Link to={routes.STATIC.ABOUT}>About us</Link>
              </li>
              <li>
                <Link to={routes.INFO.HOW}>How it works</Link>
              </li>
              <li>
                <Link to={routes.INFO.DEVICE}>Device</Link>
              </li>
              <li>
                <Link to={routes.ORDER.ROOT}>Buy now</Link>
              </li>
            </ul>
          </div>
          <div className="footer-col footer-col__3">
            <span className="footer-subtitle">Support</span>
            <ul>
              <li>
                <Link to={routes.STATIC.FAQ}>FAQ</Link>
              </li>
              <li>
                <Link to={routes.STATIC.CONTACT}>Contact us</Link>
              </li>
              <li>
                <Link to={routes.STATIC.TERMS}>Terms & conditions</Link>
              </li>
              <li>
                <Link to={routes.STATIC.PRIVACY}>Privacy policy</Link>
              </li>
              <li>
                <Link to={routes.STATIC.BILLING}>Billing policy</Link>
              </li>
              <li>
                <Link to={routes.STATIC.DELIVERY}>Delivery policy</Link>
              </li>
              <li>
                <Link to={routes.STATIC.REFUND}>Refund policy</Link>
              </li>
            </ul>
          </div>
          <div className="footer-col footer-col__4">
            <span className="footer-subtitle">Community</span>
            <ul>
              <li>
                <Link to="" target="_blank">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/" target="_blank">
                  Advertise with us
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
