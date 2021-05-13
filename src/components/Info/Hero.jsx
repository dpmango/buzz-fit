import React, { useMemo } from 'react';
import { observer } from 'mobx-react';
import { Link } from 'react-router-dom';
import cns from 'classnames';

import routes from '@config/routes';

const Hero = observer(({ ...props }) => {
  return (
    <section className="hero">
      <div className="wrapper">
        <div className="hero-info">
          <h2 className="hero-title">Be the Hero</h2>
          <p>
            Upon purchase, you will be a part of an elite group of physicians, trailblazers in the industry, taking a
            lead rather than being pushed by the industry.
          </p>
          <p>Once a member, we will give you opportunity to be an innovator, a real leader, a hero in your field!</p>
          <Link to={routes.ORDER.ROOT} className="primary-btn primary-btn-purple">
            Get yours
          </Link>
        </div>
        <div className="hero-img">
          <img src="/img/device/hero-min.png" alt="" />
        </div>
      </div>
    </section>
  );
});

export default Hero;
