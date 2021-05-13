import React, { useMemo } from 'react';
import { observer } from 'mobx-react';
import { Link } from 'react-router-dom';
import cns from 'classnames';
import * as am4core from '@amcharts/amcharts4/core';

import { Chart } from '@ui';
import routes from '@config/routes';

const Device = observer(({ ...props }) => {
  const chartData = useMemo(() => {
    let data = [
      {
        name: 'AT&T',
        points: -54,
        color: am4core.color('#D5DEDECB'),
        bullet: '/img/att.svg',
      },
      {
        name: 'Buzz Fit',
        points: 53,
        color: am4core.color('#61B2AA'),
        bullet: '/img/logo-3.svg',
      },
      {
        name: 'Dish',
        points: -48,
        color: am4core.color('#D5DEDECB'),
        bullet: '/img/dish.svg',
      },
      {
        name: 'Verizon',
        points: -51,
        color: am4core.color('#D5DEDECB'),
        bullet: '/img/verizon.svg',
      },
    ];

    return data;
  }, []);

  return (
    <section className="device">
      <div className="wrapper">
        <div className="device-info">
          <h1 className="device-title">The Buzz Fit Player</h1>
          <p>Cut the cord & start saving today.</p>
          <p>
            The Buzz Fit Player is a simple plug & play device, designed to stream our best in class waiting room
            content, to your practice.
          </p>
          <p>We help switch your cost to a profit.</p>
          <Link to={routes.ORDER.ROOT} className="primary-btn">
            Buy now
          </Link>
        </div>
        <div className="device-img">
          <Chart data={chartData} type="device" />
        </div>
      </div>
    </section>
  );
});

export default Device;
