import React, { useMemo } from 'react';
import { observer } from 'mobx-react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import cns from 'classnames';

import { createSlickConfig } from '@helpers';
import routes from '@config/routes';

const Industry = observer(({ ...props }) => {
  const slickSettings = createSlickConfig(
    {
      arrows: true,
    },
    {
      slidesToShow: 1,
      slidesToScroll: 1,
    }
  );

  return (
    <section className="industry">
      <div className="wrapper">
        <div className="industry-top">
          <span className="section-subtitle">What People Say</span>
          <h2 className="section-title">Industry Leaders</h2>
        </div>
        <Slider className="industry-slider" {...slickSettings}>
          <div className="industry-slide">
            <div className="industry-wrap">
              <p>
                “Buzz Fit is very useful. Videos are always up to date. It’s easy to share contents across the
                organization, so collaboration is easy.”
              </p>
            </div>
            <img className="industry-logo" src="/img/industry/img-1.svg" alt="" />
          </div>
          <div className="industry-slide">
            <div className="industry-wrap">
              <p>
                “Buzz Fit is very useful. Videos are always up to date. It’s easy to share contents across the
                organization, so collaboration is easy.”
              </p>
            </div>
            <img className="industry-logo" src="/img/industry/img-2.svg" alt="" />
          </div>
          <div className="industry-slide">
            <div className="industry-wrap">
              <p>
                “Buzz Fit is very useful. Videos are always up to date. It’s easy to share contents across the
                organization, so collaboration is easy.”
              </p>
            </div>
            <img className="industry-logo" src="/img/industry/img-3.svg" alt="" />
          </div>
          <div className="industry-slide">
            <div className="industry-wrap">
              <p>
                “Buzz Fit is very useful. Videos are always up to date. It’s easy to share contents across the
                organization, so collaboration is easy.”
              </p>
            </div>
            <img className="industry-logo" src="/img/industry/img-1.svg" alt="" />
          </div>
        </Slider>
      </div>
    </section>
  );
});

export default Industry;
