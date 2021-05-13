import React, { useMemo } from 'react';
import { observer } from 'mobx-react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import cns from 'classnames';

import { createSlickConfig } from '@helpers';
import routes from '@config/routes';

const Steps = observer(({ className, ...props }) => {
  const slickSettings = createSlickConfig(
    {},
    {
      infinite: true,
      arrows: false,
      dots: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      adaptiveHeight: true,
      responsive: [
        {
          breakpoint: 1160,
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 800,
          settings: {
            slidesToShow: 1,
          },
        },
      ],
    }
  );

  return (
    <section className={cns('steps', className)}>
      <div className="wrapper">
        <h2 className="section-title">Success Simplified!</h2>
        <Slider className="steps-row" {...slickSettings}>
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
    </section>
  );
});

export default Steps;
