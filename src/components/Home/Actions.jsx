import React, { useMemo } from 'react';
import { observer } from 'mobx-react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import cns from 'classnames';

import { createSlickConfig } from '@helpers';
import routes from '@config/routes';

const Actions = observer(({ ...props }) => {
  const slickSettings = createSlickConfig(
    {
      arrows: true,
    },
    {
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 3,
      autoplay: true,
      autoplaySpeed: 10000,
      responsive: [
        {
          breakpoint: 860,
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 660,
          settings: {
            slidesToShow: 1,
          },
        },
      ],
    }
  );

  return (
    <section className="actions">
      <div className="wrapper">
        <div className="actions-top">
          <span className="section-subtitle">VIDEOS</span>
          <h2 className="section-title">Buzz Fit in action</h2>
          <p>Buzz Fit focuses on delivering simple healthcare messaging</p>
        </div>
        <Slider className="actions-slider" {...slickSettings}>
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
