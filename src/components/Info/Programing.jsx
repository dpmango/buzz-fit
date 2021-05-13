import React, { useMemo } from 'react';
import { observer } from 'mobx-react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import cns from 'classnames';

import { createSlickConfig } from '@helpers';
import routes from '@config/routes';

const Programing = observer(({ ...props }) => {
  const slickSettings = createSlickConfig(
    {
      arrows: true,
    },
    {
      slidesToShow: 3,
      slidesToScroll: 1,
      rows: 2,
      responsive: [
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 2,
            rows: 2,
          },
        },
        {
          breakpoint: 560,
          settings: {
            slidesToShow: 1,
            rows: 3,
          },
        },
      ],
    }
  );

  return (
    <section className="programing">
      <div className="wrapper">
        <h2 className="section-title">Get a taste of our programing</h2>
        <Slider className="programing-slider" {...slickSettings}>
          <div className="programing-slide">
            <div className="programing-img">
              <img src="/img/programing/img-1-min.jpg" alt="" />
            </div>
          </div>
          <div className="programing-slide">
            <div className="programing-img">
              <img src="/img/programing/img-2-min.jpg" alt="" />
            </div>
          </div>
          <div className="programing-slide">
            <div className="programing-img">
              <img src="/img/programing/img-3-min.jpg" alt="" />
            </div>
          </div>
          <div className="programing-slide">
            <div className="programing-img">
              <img src="/img/programing/img-4-min.jpg" alt="" />
            </div>
          </div>
          <div className="programing-slide">
            <div className="programing-img">
              <img src="/img/programing/img-5-min.jpg" alt="" />
            </div>
          </div>
          <div className="programing-slide">
            <div className="programing-img">
              <img src="/img/programing/img-6-min.jpg" alt="" />
            </div>
          </div>
          <div className="programing-slide">
            <div className="programing-img">
              <img src="/img/programing/img-1-min.jpg" alt="" />
            </div>
          </div>
          <div className="programing-slide">
            <div className="programing-img">
              <img src="/img/programing/img-2-min.jpg" alt="" />
            </div>
          </div>
          <div className="programing-slide">
            <div className="programing-img">
              <img src="/img/programing/img-3-min.jpg" alt="" />
            </div>
          </div>
        </Slider>
      </div>
    </section>
  );
});

export default Programing;
