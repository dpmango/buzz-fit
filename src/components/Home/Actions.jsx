import React, { useMemo } from 'react';
import { observer } from 'mobx-react';
import { Link } from 'react-router-dom';
import cns from 'classnames';
import Slider from 'react-slick';

import routes from '@config/routes';

const Actions = observer(({ ...props }) => {
  const sliderSettingsThree = {
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
    <section className="actions">
      <div className="wrapper">
        <div className="actions-top">
          <span className="section-subtitle">VIDEOS</span>
          <h2 className="section-title">Buzz Fit in action</h2>
          <p>Buzz Fit focuses on delivering simple healthcare messaging</p>
        </div>
        <div className="actions-slider">
          <Slider {...sliderSettingsThree}>
            <div className="actions-slide">
              <div className="actions-video">
                <i className="hb-ico play-ico-big" />
              </div>
            </div>
            <div className="actions-slide">
              <div className="actions-video">
                <i className="hb-ico play-ico-big" />
              </div>
            </div>
            <div className="actions-slide">
              <div className="actions-video">
                <i className="hb-ico play-ico-big" />
              </div>
            </div>
            <div className="actions-slide">
              <div className="actions-video">
                <i className="hb-ico play-ico-big" />
              </div>
            </div>
            <div className="actions-slide">
              <div className="actions-video">
                <i className="hb-ico play-ico-big" />
              </div>
            </div>
          </Slider>
        </div>
        <div className="actions-bottom">
          <p>More videos available on our content page</p>
          <Link to="/content" className="primary-btn primary-btn-blue">
            see our content
          </Link>
        </div>
      </div>
    </section>
  );
});

export default Actions;
