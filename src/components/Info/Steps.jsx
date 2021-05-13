import React, { useMemo } from 'react';
import { observer } from 'mobx-react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import cns from 'classnames';

import routes from '@config/routes';

const Steps = observer(({ className, ...props }) => {
  const slickSettings = {
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    autoplay: false,
    accessibility: true,
  };

  return (
    <section className={cns('steps', className)}>
      <div className="wrapper">
        <h2 className="section-title">Success Simplified!</h2>
        <div className="steps-row">
          <Slider {...slickSettings}>
            <div className="steps-col">
              <div className="steps-wrap">
                <div className="steps-img">
                  <div className="steps-img__wrap">
                    <img src="/img/01c.gif" alt="" />
                  </div>
                </div>
                <h3 className="steps-title">Subscribe</h3>
                <p>Subscribe - $199 refundable deposit</p>
                <Link to={routes.ORDER.ROOT} className="primary-btn">
                  Get your TV Box Now
                </Link>
              </div>
            </div>
            <div className="steps-col">
              <div className="steps-wrap">
                <div className="steps-img">
                  <div className="steps-img__wrap">
                    <img src="/img/03c.gif" alt="" />
                  </div>
                </div>
                <h3 className="steps-title">Receive</h3>
                <p>We’ll send your box within 7 business days</p>
                <Link to={routes.ORDER.ROOT} className="primary-btn">
                  Get your TV Box Now
                </Link>
              </div>
            </div>
            <div className="steps-col">
              <div className="steps-wrap">
                <div className="steps-img">
                  <div className="steps-img__wrap">
                    <img src="/img/02c.gif" alt="" />
                  </div>
                </div>
                <h3 className="steps-title">Enjoy</h3>
                <p>You will be up and runnning in 2mins, track your revenue and progress in the physican app.</p>
                <Link to={routes.ORDER.ROOT} className="primary-btn">
                  Get your TV Box Now
                </Link>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </section>
  );
});

export default Steps;
