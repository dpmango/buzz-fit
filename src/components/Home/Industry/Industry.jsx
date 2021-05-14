import React, { useMemo } from 'react';
import { observer } from 'mobx-react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import cns from 'classnames';

import { createSlickConfig } from '@helpers';
import routes from '@config/routes';

import content from './data';

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
          <span className="section-subtitle">{content.subtitle}</span>
          <h2 className="section-title">{content.title}</h2>
        </div>

        <Slider className="industry-slider" {...slickSettings}>
          {content.slides.map((x) => {
            const { id, href } = x;

            return (
              <div className="industry-slide" key={id}>
                <div className="industry-wrap">{x.content}</div>
                <img className="industry-logo" src={x.image} alt="" />
              </div>
            );
          })}
        </Slider>
      </div>
    </section>
  );
});

export default Industry;
