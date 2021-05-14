import React, { useMemo } from 'react';
import { observer } from 'mobx-react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import cns from 'classnames';

import { createSlickConfig } from '@helpers';
import routes from '@config/routes';

import content from './data';

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
          <span className="section-subtitle">{content.title}</span>
          <h2 className="section-title">{content.subtitle}</h2>
          <p>{content.description}</p>
        </div>

        <Slider className="actions-slider" {...slickSettings}>
          {content.videos.map((x) => {
            const { id, href } = x;

            return (
              <div className="actions-slide" key={id}>
                <div className="actions-video">
                  <i className="hb-ico play-ico-big" href={href} />
                </div>
              </div>
            );
          })}
        </Slider>

        <div className="actions-bottom">
          <p>More videos available on our content page</p>
          <Link to={routes.INFO.CONTENT} className="primary-btn primary-btn-blue">
            see our content
          </Link>
        </div>
      </div>
    </section>
  );
});

export default Actions;
