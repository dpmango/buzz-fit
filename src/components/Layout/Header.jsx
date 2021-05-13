import React, { useCallback, useState } from 'react';
import { Link } from 'react-router-dom';
import cns from 'classnames';

import routes from '@config/routes';

const Header = ({ ...props }) => {
  const [active, setActive] = useState(false);

  const handleBarClick = useCallback(() => {
    setActive(!active);
  }, [active, setActive]);

  return (
    <header className={cns('header', active && 'header-active')}>
      <div className="wrapper">
        <div className="header-logo">
          <Link to="/">
            <img src="/img/logo-2.svg" alt="" />
          </Link>
        </div>
        <div className="header-row">
          <Link to="/" className="header-link">
            Home
          </Link>
          <ul className="header-list">
            <li>
              <Link to={routes.INFO.HOW}>How it works</Link>
            </li>
            <li>
              <Link to={routes.INFO.CONTENT}>Content</Link>
            </li>
            <li>
              <Link to={routes.INFO.DEVICE}>Device</Link>
            </li>
            <li>
              <a href="https://app.buzz.fit">
                <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M11.9397 22.3638C18.0226 22.3638 22.9537 17.4328 22.9537 11.3499C22.9537 5.26703 18.0226 0.335938 11.9397 0.335938C5.85687 0.335938 0.925781 5.26703 0.925781 11.3499C0.925781 17.4328 5.85687 22.3638 11.9397 22.3638Z"
                    fill="#7C808A"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M9.46946 8.37842C9.46946 6.98287 10.6008 5.85156 11.9963 5.85156C13.3919 5.85156 14.5232 6.98287 14.5232 8.37842V10.0285C15.3938 10.245 16.0391 11.0319 16.0391 11.9696V13.8521C16.0391 14.9566 15.1436 15.8521 14.0391 15.8521H9.95312C8.84856 15.8521 7.95312 14.9566 7.95312 13.8521V11.9696C7.95312 11.0318 8.59857 10.2447 9.46946 10.0284V8.37842ZM11.9966 7.02813C11.1593 7.02813 10.4805 7.70692 10.4805 8.54425V9.96939H13.5127V8.54425C13.5127 7.70692 12.8339 7.02813 11.9966 7.02813Z"
                    fill="white"
                  />
                </svg>
                Login
              </a>
            </li>
          </ul>
          <div className="header-mob">
            <a href="https://app.buzz.fit">
              <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M11.9397 22.3638C18.0226 22.3638 22.9537 17.4328 22.9537 11.3499C22.9537 5.26703 18.0226 0.335938 11.9397 0.335938C5.85687 0.335938 0.925781 5.26703 0.925781 11.3499C0.925781 17.4328 5.85687 22.3638 11.9397 22.3638Z"
                  fill="#fff"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M9.46946 8.37842C9.46946 6.98287 10.6008 5.85156 11.9963 5.85156C13.3919 5.85156 14.5232 6.98287 14.5232 8.37842V10.0285C15.3938 10.245 16.0391 11.0319 16.0391 11.9696V13.8521C16.0391 14.9566 15.1436 15.8521 14.0391 15.8521H9.95312C8.84856 15.8521 7.95312 14.9566 7.95312 13.8521V11.9696C7.95312 11.0318 8.59857 10.2447 9.46946 10.0284V8.37842ZM11.9966 7.02813C11.1593 7.02813 10.4805 7.70692 10.4805 8.54425V9.96939H13.5127V8.54425C13.5127 7.70692 12.8339 7.02813 11.9966 7.02813Z"
                  fill="#61B2AA"
                />
              </svg>
              Login
            </a>
          </div>
          <Link to={routes.ORDER.ROOT} className="primary-btn">
            Get Now
          </Link>
        </div>
        <div className="header-bar" onClick={handleBarClick}>
          <span />
        </div>
      </div>
    </header>
  );
};

export default Header;
