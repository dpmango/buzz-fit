import React, { useMemo } from 'react';
import { observer } from 'mobx-react';
import { Link } from 'react-router-dom';
import cns from 'classnames';

import routes from '@config/routes';

const Advantages = observer(({ ...props }) => {
  return (
    <section className="advantages">
      <div className="wrapper">
        <div className="advantages-block advantages-block__1">
          <div className="advantages-top">
            <h3 className="advantages-title">What can it do?</h3>
          </div>
          <div className="advantages-row">
            <div className="advantages-col">
              <div className="advantages-ico">
                <img src="/img/device/ico-1-min.png" alt="" />
              </div>
              <div className="advantages-col__wrap">
                <span className="advantages-num">
                  30<sup>FPS</sup>
                </span>
                <span className="advantages-sub">Frame Rate</span>
              </div>
            </div>
            <div className="advantages-col">
              <div className="advantages-ico">
                <img src="/img/device/ico-2-min.png" alt="" />
              </div>
              <div className="advantages-col__wrap">
                <span className="advantages-num">4K HD</span>
                <span className="advantages-sub">Resolution</span>
              </div>
            </div>
            <div className="advantages-col">
              <div className="advantages-ico">
                <img src="/img/device/ico-3-min.png" alt="" />
              </div>
              <div className="advantages-col__wrap">
                <span className="advantages-num">HLS</span>
                <span className="advantages-sub">Support</span>
              </div>
            </div>
            <div className="advantages-col">
              <div className="advantages-ico">
                <img src="/img/device/ico-4-min.png" alt="" />
              </div>
              <div className="advantages-col__wrap">
                <span className="advantages-num">AAC</span>
                <span className="advantages-sub">Sound</span>
              </div>
            </div>
          </div>
        </div>
        <div className="advantages-block advantages-block__2">
          <div className="advantages-top">
            <h3 className="advantages-title">What’s inside?</h3>
          </div>
          <div className="advantages-row">
            <div className="advantages-col">
              <div className="advantages-wrap">
                <span className="advantages-tit">CPU</span>
                <span className="advantages-text">Quad core ARM CPU</span>
              </div>
              <div className="advantages-wrap">
                <span className="advantages-tit">WiFi</span>
                <span className="advantages-text">802.11 b/g/n</span>
              </div>
            </div>
            <div className="advantages-col">
              <div className="advantages-wrap">
                <span className="advantages-tit">Memory</span>
                <span className="advantages-text">DDRIII 4GB</span>
              </div>
              <div className="advantages-wrap">
                <span className="advantages-tit">Remote</span>
                <span className="advantages-text">IR remote control</span>
              </div>
            </div>
            <div className="advantages-col">
              <div className="advantages-wrap">
                <span className="advantages-tit">Storage</span>
                <span className="advantages-text">32GB NAND flash</span>
              </div>
              <div className="advantages-wrap">
                <span className="advantages-tit">Power</span>
                <span className="advantages-text">DC input 5V/2A</span>
              </div>
            </div>
            <div className="advantages-col">
              <div className="advantages-btn">
                <Link to={routes.ORDER.ROOT} className="primary-btn">
                  Get yours
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="advantages-box">
          <img src="/img/device/box-2-min.png" alt="" />
        </div>
      </div>
    </section>
  );
});

export default Advantages;
