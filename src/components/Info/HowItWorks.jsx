import React, { useMemo } from 'react';
import { observer } from 'mobx-react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import cns from 'classnames';

import { createSlickConfig } from '@helpers';
import routes from '@config/routes';

const HowItWorks = observer(({ ...props }) => {
  const slickSettings = createSlickConfig(
    {
      arrows: true,
    },
    {
      dots: true,
      fade: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      adaptiveHeight: true,
    }
  );

  return (
    <section className="howItWorks">
      <div className="howItWorks-main">
        <div className="wrapper">
          <div className="howItWorks-info">
            <h1 className="section-title">How our Partnership works </h1>
            <p>You have the audience, we deliver content & advertising. We share the profits</p>
          </div>
          <div className="howItWorks-descr">
            <div className="howItWorks-descr__wrap">
              <div id="chartdiv"></div>
              <span className="howItWorks-subtitle">Get a deeper understanding</span>
            </div>
          </div>
        </div>
        <div className="howItWorks-bg">
          <img src="/img/howItWorks/bg-1-min.png" alt="" />
        </div>
      </div>
      <div className="howItWorks-block">
        <div className="wrapper">
          <h2 className="section-title">Device installation</h2>
          <Slider className="howItWorks-slider" {...slickSettings}>
            <div className="howItWorks-slide">
              <div className="howItWorks-img">
                <span className="howItWorks-num">1</span>
                <img src="/img/howItWorks/img-1-min.png" alt="" />
              </div>
              <p>We send you a Buzz Fit TV box ready for you to unpack and plug in to power and your TV’s HDMI port</p>
            </div>
            <div className="howItWorks-slide">
              <div className="howItWorks-img">
                <span className="howItWorks-num">2</span>
                <img src="/img/howItWorks/img-3-min.png" alt="" />
              </div>
              <p>
                2. Select your wifi network or ensure your network cable is plugged into the box directly. Once done
                enter your password and connect to continue.
              </p>
            </div>
            <div className="howItWorks-slide">
              <div className="howItWorks-img">
                <span className="howItWorks-num">3</span>
                <img src="/img/howItWorks/img-4-min.png" alt="" />
              </div>
              <p>
                3. Log into the Buzz Fit app and view the “Set up” screen and input your code & enter it into the app to
                continue.
              </p>
            </div>
            <div className="howItWorks-slide">
              <div className="howItWorks-img">
                <span className="howItWorks-num">4</span>
                <img src="/img/howItWorks/img-5-min.png" alt="" />
              </div>
              <p>
                4, Your box is now linked, just confirm few details with you about the location and “Activate” completes
                the process.{' '}
              </p>
            </div>
            <div className="howItWorks-slide">
              <div className="howItWorks-img">
                <span className="howItWorks-num">5</span>
                <img src="/img/howItWorks/img-6-min.png" alt="" />
              </div>
              <p>
                Congratulations! <br />
                Buzz Fit content will now start playing. You now have access to the Buzz Fit app features. Track your
                viewership statistics, monitor your revenue and share the box with your fellow physians in order to grow
                your revenue even further.
              </p>
            </div>
          </Slider>
        </div>
      </div>
      <div className="howItWorks-block howItWorks-block__second">
        <div className="wrapper">
          <h2 className="section-title">Track Your Success</h2>
          <Slider className="howItWorks-slider" {...slickSettings}>
            <div className="howItWorks-slide">
              <div className="howItWorks-img">
                <img src="/img/howItWorks/img-2-min.png" alt="" />
              </div>
              <p>Track your ongoing contribution to health literacy and edcuation</p>
            </div>
            <div className="howItWorks-slide">
              <div className="howItWorks-img">
                <img src="/img/howItWorks/img-2-min.png" alt="" />
              </div>
              <p>Track your ongoing contribution to health literacy and edcuation</p>
            </div>
            <div className="howItWorks-slide">
              <div className="howItWorks-img">
                <img src="/img/howItWorks/img-2-min.png" alt="" />
              </div>
              <p>Track your ongoing contribution to health literacy and edcuation</p>
            </div>
          </Slider>
        </div>
      </div>
    </section>
  );
});

export default HowItWorks;
