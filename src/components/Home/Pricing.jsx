import React, { useMemo } from 'react';
import { observer } from 'mobx-react';
import { Link } from 'react-router-dom';
import cns from 'classnames';

import routes from '@config/routes';

const Pricing = observer(({ ...props }) => {
  return (
    <section className="pricing" id="compare">
      <div className="wrapper">
        <div className="pricing-top">
          <span className="section-subtitle">pricing</span>
          <h2 className="section-title">Cut the cord & start saving today</h2>
        </div>
        <div className="pricing-mob">
          <p>Compare us now</p>
          <ul>
            <li>
              <Link to="#">AT&t</Link>
            </li>
            <li>
              <Link to="#" className="active">
                VERIZON
              </Link>
            </li>
            <li>
              <Link to="#">DISH</Link>
            </li>
          </ul>
        </div>
        <div className="pricing-table">
          <div className="pricing-col pricing-col__1">
            <div className="pricing-item pricing-item__1" />
            <div className="pricing-item pricing-item__2">Device</div>
            <div className="pricing-item pricing-item__3">Installation</div>
            <div className="pricing-item pricing-item__4">Activation</div>
            <div className="pricing-item pricing-item__5">Relevant content to whole Audience</div>
            <div className="pricing-item pricing-item__6">Passive income</div>
            <div className="pricing-item pricing-item__7">Ongoing cost per year</div>
            <div className="pricing-item pricing-item__8">
              Total cost
              <div className="tooltip">
                <i className="hb-ico i-ico-big" />
                <div className="tooltip-info">Price details based on smallest available cable service Jan 2021</div>
              </div>
            </div>
          </div>
          <div className="pricing-col pricing-col__2">
            <div className="pricing-item pricing-item__1">
              <img src="/img/logo-mob.svg" alt="" />
            </div>
            <div className="pricing-item pricing-item__2">refundable deposit</div>
            <div className="pricing-item pricing-item__3">
              Free
              <div className="tooltip">
                <i className="hb-ico i-ico" />
                <div className="tooltip-info">Price details based on smallest available cable service Jan 2021</div>
              </div>
            </div>
            <div className="pricing-item pricing-item__4">Free</div>
            <div className="pricing-item pricing-item__5">
              Yes
              <div className="tooltip">
                <i className="hb-ico i-ico" />
                <div className="tooltip-info">Price details based on smallest available cable service Jan 2021</div>
              </div>
            </div>
            <div className="pricing-item pricing-item__6">
              Yes
              <div className="tooltip">
                <i className="hb-ico i-ico" />
                <div className="tooltip-info">Price details based on smallest available cable service Jan 2021</div>
              </div>
            </div>
            <div className="pricing-item pricing-item__7">$0</div>
            <div className="pricing-item pricing-item__8">
              <span className="pricing-title">YOU EARN PASSIVE INCOME</span>
              <Link to="#calculate">Calculate your potential savings</Link>
            </div>
          </div>
          <div className="pricing-col pricing-col__3">
            <div className="pricing-item pricing-item__1">
              <img src="/img/pricing/logo-2-min.png" alt="" />
            </div>
            <div className="pricing-item pricing-item__2">$299.00</div>
            <div className="pricing-item pricing-item__3">$99.00</div>
            <div className="pricing-item pricing-item__4">$89.00</div>
            <div className="pricing-item pricing-item__5">No</div>
            <div className="pricing-item pricing-item__6">No</div>
            <div className="pricing-item pricing-item__7">
              $359.88 /per year
              <div className="tooltip">
                <i className="hb-ico i-ico" />
                <div className="tooltip-info">Price details based on smallest available cable service Jan 2021</div>
              </div>
            </div>
            <div className="pricing-item pricing-item__8">$846.88</div>
          </div>
          <div className="pricing-col pricing-col__4">
            <div className="pricing-item pricing-item__1">
              <img src="/img/pricing/logo-3-min.png" alt="" />
            </div>
            <div className="pricing-item pricing-item__2">$Unknown</div>
            <div className="pricing-item pricing-item__3">
              $49.00
              <div className="tooltip">
                <i className="hb-ico i-ico" />
                <div className="tooltip-info">Price details based on smallest available cable service Jan 2021</div>
              </div>
            </div>
            <div className="pricing-item pricing-item__4">
              $19.00
              <div className="tooltip">
                <i className="hb-ico i-ico" />
                <div className="tooltip-info">Price details based on smallest available cable service Jan 2021</div>
              </div>
            </div>
            <div className="pricing-item pricing-item__5">No</div>
            <div className="pricing-item pricing-item__6">No</div>
            <div className="pricing-item pricing-item__7">
              $839.88 /per year
              <div className="tooltip">
                <i className="hb-ico i-ico" />
                <div className="tooltip-info">Price details based on smallest available cable service Jan 2021</div>
              </div>
            </div>
            <div className="pricing-item pricing-item__8">$907.88</div>
          </div>
          <div className="pricing-col pricing-col__5">
            <div className="pricing-item pricing-item__1">
              <img src="/img/pricing/logo-4-min.png" alt="" />
            </div>
            <div className="pricing-item pricing-item__2">
              $10.00
              <div className="tooltip">
                <i className="hb-ico i-ico" />
                <div className="tooltip-info">Price details based on smallest available cable service Jan 2021</div>
              </div>
            </div>
            <div className="pricing-item pricing-item__3">Appointment required</div>
            <div className="pricing-item pricing-item__4">$0.00</div>
            <div className="pricing-item pricing-item__5">No</div>
            <div className="pricing-item pricing-item__6">No</div>
            <div className="pricing-item pricing-item__7">$799.88 /per year</div>
            <div className="pricing-item pricing-item__8">$789.88</div>
          </div>
        </div>
        <div className="pricing-mob">
          <p>Compare us now</p>
          <ul>
            <li>
              <Link to="#">AT&t</Link>
            </li>
            <li>
              <Link to="#" className="active">
                VERIZON
              </Link>
            </li>
            <li>
              <Link to="#">DISH</Link>
            </li>
          </ul>
          <Link to="#calculate" className="pricing-mob__link">
            Calculate your potential savings
          </Link>
        </div>
        <div className="pricing-bottom">
          <Link to="/order" className="primary-btn primary-btn-purple">
            Get your TV Box Now
          </Link>
          <p>For only a one time refundable deposit of $199.00</p>
        </div>
      </div>
    </section>
  );
});

export default Pricing;
