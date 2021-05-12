import React, { useMemo } from 'react';
import { observer } from 'mobx-react';
import { Link } from 'react-router-dom';
import cns from 'classnames';

import routes from '@config/routes';

const Guarantee = observer(({ ...props }) => {
  return (
    <section className="guarantee">
      <div className="wrapper">
        <div className="guarantee-ico">
          <img src="/img/icons/shield-ico.svg" alt="" />
        </div>
        <span className="section-subtitle">What People Say</span>
        <h2 className="section-title">100% Risk Free!</h2>
        <p>
          100% Risk-Free, Money-back Guarantee. Our 100% risk-free, satisfaction guarantee, lasts 12 months days from
          the date you receive your device. If for any reason you are not completely satisfied with the product, simply
          send it back to us and we will return you 100% of your money back - no questions asked.
        </p>
        <div className="guarantee-button">
          <div className="guarantee-button__wrap">
            <Link href={routes.ORDER.ROOT} className="primary-btn primary-btn-peach">
              Get your TV Box Now
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
});

export default Guarantee;
