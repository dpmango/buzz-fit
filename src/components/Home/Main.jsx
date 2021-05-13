import React, { useMemo } from 'react';
import { observer } from 'mobx-react';
import { Link } from 'react-router-dom';
import cns from 'classnames';

import routes from '@config/routes';

const Main = observer(({ ...props }) => {
  return (
    <section className="main">
      <div className="wrapper">
        <div className="main-info">
          <h1 className="main-title">We educate your patients & generate profit for you!</h1>
          <p>
            Cut your cable bill & employ our specialty specific health programing to engage your patients as they wait
            for consultation.
          </p>
          <Link to={routes.ORDER.ROOT} className="primary-btn">
            Get your TV Box Now
          </Link>
        </div>
        <div className="main-img">
          <img src="/img/main/hero.png" alt="" />
        </div>
      </div>
    </section>
  );
});

export default Main;
