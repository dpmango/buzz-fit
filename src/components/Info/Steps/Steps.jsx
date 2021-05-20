import React, { useMemo } from 'react';
import { observer } from 'mobx-react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import cns from 'classnames';

import { createSlickConfig } from '@helpers';
import routes from '@config/routes';

import content from './data';

const Steps = observer(({ className, ...props }) => {
  const slickSettings = createSlickConfig(
    {},
    {
      infinite: true,
      arrows: false,
      dots: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      adaptiveHeight: true,
      responsive: [
        {
          breakpoint: 1160,
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 800,
          settings: {
            slidesToShow: 1,
          },
        },
      ],
    }
  );

  const handleMouseEnter = (e) => {
    const gif = e.target.querySelector(`img[src$="${'.gif'}"]`);
    if (gif) {
      gif.setAttribute('src', gif.getAttribute('src'));
    }
  };

  const handleMouseLeave = () => {};

  return (
    <section className={cns('steps', className)}>
      <div className="wrapper">
        <h2 className="section-title">{content.title}</h2>
        <Slider className="steps-row" {...slickSettings}>
          {content.slides.map((x) => {
            const { id, image, title, description } = x;

            return (
              <div className="steps-col" key={id}>
                <div className="steps-wrap" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                  <div className="steps-img">
                    <div className="steps-img__wrap">
                      <img src={image} alt={title} />
                    </div>
                  </div>
                  <h3 className="steps-title">{title}</h3>
                  <p>{description}</p>
                  <Link to={routes.ORDER.ROOT} className="primary-btn">
                    {content.ctaText}
                  </Link>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </section>
  );
});

export default Steps;
