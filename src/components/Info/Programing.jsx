import React, { useMemo } from 'react';
import { observer } from 'mobx-react';
import { Link } from 'react-router-dom';
import cns from 'classnames';

import routes from '@config/routes';

const Programing = observer(({ ...props }) => {
  return (
    <section className="programing">
      <div className="wrapper">
        <h2 className="section-title">Get a taste of our programing</h2>
        <div className="programing-slider">
          <div className="programing-slide">
            <div className="programing-img">
              <img src="/img/programing/img-1-min.jpg" alt="" />
            </div>
          </div>
          <div className="programing-slide">
            <div className="programing-img">
              <img src="/img/programing/img-2-min.jpg" alt="" />
            </div>
          </div>
          <div className="programing-slide">
            <div className="programing-img">
              <img src="/img/programing/img-3-min.jpg" alt="" />
            </div>
          </div>
          <div className="programing-slide">
            <div className="programing-img">
              <img src="/img/programing/img-4-min.jpg" alt="" />
            </div>
          </div>
          <div className="programing-slide">
            <div className="programing-img">
              <img src="/img/programing/img-5-min.jpg" alt="" />
            </div>
          </div>
          <div className="programing-slide">
            <div className="programing-img">
              <img src="/img/programing/img-6-min.jpg" alt="" />
            </div>
          </div>
          <div className="programing-slide">
            <div className="programing-img">
              <img src="/img/programing/img-1-min.jpg" alt="" />
            </div>
          </div>
          <div className="programing-slide">
            <div className="programing-img">
              <img src="/img/programing/img-2-min.jpg" alt="" />
            </div>
          </div>
          <div className="programing-slide">
            <div className="programing-img">
              <img src="/img/programing/img-3-min.jpg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

export default Programing;
