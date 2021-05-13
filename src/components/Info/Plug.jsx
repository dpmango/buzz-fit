/* eslint-disable react/prop-types */
import React, { useEffect, useState, useMemo } from 'react';
import { observer } from 'mobx-react';
import Slider from 'react-slick';
import cns from 'classnames';

import { createSlickConfig } from '@helpers';
import { useWindowSize } from '@src/hooks';

const Plug = observer(({ ...props }) => {
  const [mode, setMode] = useState(null);
  const size = useWindowSize();

  const content = {
    slides: [
      {
        id: 1,
        image: '/img/device/img-1-min.png',
        title: 'Educational & relevant',
        content: 'Edcuated patients increase request for service',
      },
      {
        id: 2,
        image: '/img/device/img-3-min.png',
        title: 'Prepared patients',
        content: 'Engaged patients come prepared',
      },
      {
        id: 3,
        image: '/img/device/img-2-min.png',
        title: 'Transformed experience',
        content: 'Happy patients keep coming back',
      },
      {
        id: 4,
        image: '/img/device/img-4-min.png',
        title: 'Passive income',
        content: 'Increase your practices income',
      },
    ],
  };

  const slickSettings = createSlickConfig(
    {},
    {
      dots: true,
      slidesToShow: 1,
      slidesToScroll: 1,
    }
  );

  useEffect(() => {
    setMode(size.width <= 767 ? 'mobile' : 'desktop');
  }, [size.width, setMode]);

  const Slide = ({ id, image, title, content }) => (
    <>
      <div className={cns('plug-col', `plug-col__${id}`)}>
        <div className="plug-wrap">
          <div className="plug-img">
            <img src={image} alt="" />
          </div>
          <span className="plug-subtitle">{title}</span>
          <p>{content}</p>
        </div>
      </div>
    </>
  );

  return (
    <section className="plug">
      <div className="plug-bg">
        <img src="/img/device/circle-bg.svg" alt="" />
      </div>
      <div className="wrapper">
        <h2 className="plug-title">Plug & Play</h2>
        <div className="plug-row">
          <div className="plug-box">
            <img src="/img/device/box-min.png" alt="" />
          </div>
          {mode === 'desktop' && (
            <div className="plug-slider">
              {content.slides.map((slide) => (
                <Slide key={slide.id} {...slide} />
              ))}
            </div>
          )}
          {mode === 'mobile' && (
            <Slider className="plug-slider" {...slickSettings}>
              {content.slides.map((slide) => (
                <Slide key={slide.id} {...slide} />
              ))}
            </Slider>
          )}
        </div>
      </div>
    </section>
  );
});

export default Plug;
