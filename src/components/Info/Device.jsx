import React, { useMemo } from 'react';
import { observer } from 'mobx-react';
import { Link } from 'react-router-dom';
import cns from 'classnames';

import routes from '@config/routes';

const Device = observer(({ ...props }) => {
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
          <Link href={routes.ORDER.ROOT} className="primary-btn">
            Buy now
          </Link>
        </div>
        <div className="device-img">
          <div id="chartdiv"></div>
        </div>
      </div>
    </section>
  );
});

export default Device;
