import React, { useMemo } from 'react';
import { observer } from 'mobx-react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import cns from 'classnames';
import * as am4core from '@amcharts/amcharts4/core';

import { createSlickConfig } from '@helpers';
import { Chart } from '@ui';
import routes from '@config/routes';

import content from './data';

const HowItWorks = observer(({ ...props }) => {
  const slickSettings = createSlickConfig(
    {
      arrows: true,
    },
    {
      dots: true,
      fade: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      adaptiveHeight: true,
    }
  );

  const chartData = useMemo(() => {
    let data = [
      {
        name: 'A',
        value: 10,
        title: 'Waiting room\npatients',
        color: am4core.color('#A4B651'),
        hint: 'Your patients desperate for a distraction while waiting for service',
      },
      {
        name: 'B',
        value: 10,
        title: 'Healthcare\ncontent',
        color: am4core.color('#D0B78E'),
        hint: 'We curate and stream the most relevant and best in class health content',
      },
      {
        name: 'C',
        value: 3,
        title: 'Patient\nengagement',
        sets: ['A', 'B'],
        color: am4core.color('#EEEEEE'),
        hint: 'Our content engages more of your patients more of the time reducing frustrations while increasing your revenues',
      },
    ];

    return data;
  }, []);

  return (
    <section className="howItWorks">
      <div className="howItWorks-main">
        <div className="wrapper">
          <div className="howItWorks-info">
            <h1 className="section-title">How our Partnership works </h1>
            <p>You have the audience, we deliver content & advertising. We share the profits</p>
          </div>
          <div className="howItWorks-descr">
            <div className="howItWorks-descr__wrap">
              <Chart data={chartData} type="how" />
              <span className="howItWorks-subtitle">Get a deeper understanding</span>
            </div>
          </div>
        </div>
        <div className="howItWorks-bg">
          <img src="/img/howItWorks/bg-1-min.png" alt="" />
        </div>
      </div>
      <div className="howItWorks-block">
        <div className="wrapper">
          <h2 className="section-title">Device installation</h2>
          <Slider className="howItWorks-slider" {...slickSettings}>
            {content.install &&
              content.install.map((x) => {
                const { id, num, image, description } = x;

                return (
                  <div className="howItWorks-slide" key={id}>
                    <div className="howItWorks-img">
                      <span className="howItWorks-num">{num}</span>
                      <img src={image} alt="" />
                    </div>
                    {description}
                  </div>
                );
              })}
          </Slider>
        </div>
      </div>

      {/* SECOND BLOCK */}

      <div className="howItWorks-block howItWorks-block__second">
        <div className="wrapper">
          <h2 className="section-title">Track Your Success</h2>
          <Slider className="howItWorks-slider" {...slickSettings}>
            {content.install &&
              content.install.map((x) => {
                const { id, image, description } = x;

                return (
                  <div className="howItWorks-slide" key={id}>
                    <div className="howItWorks-img">
                      <img src={image} alt="" />
                    </div>
                    {description}
                  </div>
                );
              })}
          </Slider>
        </div>
      </div>
    </section>
  );
});

export default HowItWorks;
