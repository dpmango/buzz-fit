import React, { useMemo } from 'react';
import { observer } from 'mobx-react';
import { Link } from 'react-router-dom';
import cns from 'classnames';

import routes from '@config/routes';

const Addressing = observer(({ ...props }) => {
  return (
    <section className="addressing">
      <div className="wrapper">
        <div className="addressing-row">
          <div className="addressing-info">
            <h2 className="section-title">Addressing the key health pillars </h2>
            <p>
              Our content based in behavioural economics is aimed at delivering specific benefits for both patients and
              doctors.
            </p>
            <ul className="addressing-list">
              <li>
                <a href="#" className="active">
                  Nutrition Content
                </a>
              </li>
              <li>
                <a href="#">Speciality Specific</a>
              </li>
              <li>
                <a href="#">Exercise Content</a>
              </li>
            </ul>
          </div>
          <div className="addressing-images">
            <div className="addressing-slider">
              <div className="addressing-slide">
                <div className="addressing-bg">
                  <img src="/img/addressing/bg-1-min.png" alt="" />
                </div>
                <div className="actions-video" style={{ backgroundImage: 'img/actions/img-2-min.jpg' }}>
                  <i className="hb-ico play-ico-big"></i>
                </div>
              </div>
              <div className="addressing-slide">
                <div className="addressing-bg">
                  <img src="/img/addressing/bg-2-min.png" alt="" />
                </div>
                <div className="actions-video" style={{ backgroundImage: 'img/actions/img-2-min.jpg' }}>
                  <i className="hb-ico play-ico-big"></i>
                </div>
              </div>
              <div className="addressing-slide">
                <div className="addressing-bg">
                  <img src="/img/addressing/bg-3-min.png" alt="" />
                </div>
                <div className="actions-video" style={{ backgroundImage: 'img/actions/img-2-min.jpg' }}>
                  <i className="hb-ico play-ico-big"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

export default Addressing;
