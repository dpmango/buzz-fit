import React, { useMemo } from 'react';
import { observer } from 'mobx-react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import cns from 'classnames';

import routes from '@config/routes';

const Main = observer(({ ...props }) => {
  const slickSettings = {
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: false,
    accessibility: true,
  };

  return (
    <section className="testimonials">
      <div className="wrapper">
        <div className="testimonials-row">
          <div className="testimonials-col">
            <div className="testimonials-info">
              <h2 className="section-title">Start Generating Your Passive Income</h2>
              <p>You have the audience, we have the content and we split the profit with you.</p>
              <p>
                Not only do you pay for cable, but the TV channel playing in your waiting room is also profiting
                directly from the advertising your Patients watch.
              </p>
              <div className="info-buttons">
                <Link to="/order" className="primary-btn primary-btn-purple">
                  Get your TV Box Now
                </Link>
                <Link to="#calculate" className="info-link">
                  <i className="hb-ico play-ico" />
                  Calculate your savings
                </Link>
              </div>
            </div>
          </div>
          <div className="testimonials-col testimonials-col__2">
            <div className="testimonials-slider">
              <Slider {...slickSettings}>
                <div className="testimonials-slide">
                  <div className="testimonials-desc">
                    <p>
                      “When people ask me what ‘American Pie’ means, I tell them it means I don’t ever have to work
                      again if I don’t want to.
                    </p>
                    <span>- Don McLean</span>
                  </div>
                  <div className="testimonials-human">
                    <img src="/img/testimonials/user-1-min.png" alt="" />
                  </div>
                  <span className="testimonials-position">American singer-songwriter</span>
                </div>
                <div className="testimonials-slide">
                  <div className="testimonials-desc">
                    <p>
                      “When people ask me what ‘American Pie’ means, I tell them it means I don’t ever have to work
                      again if I don’t want to.
                    </p>
                    <span>- Don McLean</span>
                  </div>
                  <div className="testimonials-human">
                    <img src="/img/testimonials/user-1-min.png" alt="" />
                  </div>
                  <span className="testimonials-position">American singer-songwriter</span>
                </div>
                <div className="testimonials-slide">
                  <div className="testimonials-desc">
                    <p>
                      “When people ask me what ‘American Pie’ means, I tell them it means I don’t ever have to work
                      again if I don’t want to.
                    </p>
                    <span>- Don McLean</span>
                  </div>
                  <div className="testimonials-human">
                    <img src="/img/testimonials/user-1-min.png" alt="" />
                  </div>
                  <span className="testimonials-position">American singer-songwriter</span>
                </div>
              </Slider>
            </div>
            <div className="testimonials-mob">
              <div className="info-buttons">
                <Link to="/order" className="primary-btn primary-btn-purple">
                  Get your TV Box Now
                </Link>
                <Link to="#calculate" className="info-link">
                  <i className="hb-ico play-ico" />
                  Calculate your savings
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

export default Main;
