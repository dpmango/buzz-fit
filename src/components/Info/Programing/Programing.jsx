import React, { useMemo } from 'react';
import { observer } from 'mobx-react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import cns from 'classnames';

import { createSlickConfig } from '@helpers';
import routes from '@config/routes';

import content from './data';

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
        <h2 className="section-title">{content.title}</h2>
        <Slider className="programing-slider" {...slickSettings}>
          {content.slides &&
            content.slides.map((x) => {
              const { id, image } = x;

              return (
                <div className="programing-slide" key={id}>
                  <div className="programing-img">
                    <img src={image} alt="" />
                  </div>
                </div>
              );
            })}
        </Slider>
      </div>
    </section>
  );
});

export default Programing;
