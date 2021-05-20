import React, { useMemo } from 'react';
import { observer } from 'mobx-react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import Slider from 'react-slick';
import cns from 'classnames';

import { createSlickConfig } from '@helpers';
import { HashLinkScroll } from '@ui';
import routes from '@config/routes';

import content from './data';

const Testimonials = observer(({ ...props }) => {
  const slickSettings = createSlickConfig(
    {
      arrows: true,
    },
    {
      fade: true,

      slidesToShow: 1,
      slidesToScroll: 1,

      autoplaySpeed: 10000,
      autoplay: true,
    }
  );

  return (
    <section className="testimonials">
      <div className="wrapper">
        <div className="testimonials-row">
          <div className="testimonials-col">
            <div className="testimonials-info">
              <h2 className="section-title">{content.title}</h2>
              {content.description}
              <div className="info-buttons">
                <Link to={routes.ORDER.ROOT} className="primary-btn primary-btn-purple">
                  Get your TV Box Now
                </Link>
                <HashLinkScroll to="#calculate" className="info-link">
                  <i className="hb-ico play-ico" />
                  Calculate your savings
                </HashLinkScroll>
              </div>
            </div>
          </div>

          <div className="testimonials-col testimonials-col__2">
            <Slider className="testimonials-slider" {...slickSettings}>
              {content.slides.map((x) => {
                const { id, image, content, position } = x;

                return (
                  <div className="testimonials-slide" key={id}>
                    <div className="testimonials-desc">{content}</div>
                    <div className="testimonials-human">
                      <img src={image} alt="" />
                    </div>
                    <span className="testimonials-position">{position}</span>
                  </div>
                );
              })}
            </Slider>

            <div className="testimonials-mob">
              <div className="info-buttons">
                <Link to={routes.ORDER.ROOT} className="primary-btn primary-btn-purple">
                  Get your TV Box Now
                </Link>
                <HashLinkScroll to="#calculate" className="info-link">
                  <i className="hb-ico play-ico" />
                  Calculate your savings
                </HashLinkScroll>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

export default Testimonials;
