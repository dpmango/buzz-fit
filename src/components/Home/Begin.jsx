import React, { useMemo } from 'react';
import { observer } from 'mobx-react';
import { Link } from 'react-router-dom';
import cns from 'classnames';

import routes from '@config/routes';

const Begin = observer(({ ...props }) => {
  return (
    <section className="begin">
      <div className="wrapper">
        <div className="begin-row">
          <div className="begin-img">
            <img src="/img/begin/juggling-2-min.png" alt="" />
          </div>
          <div className="begin-info">
            <h2 className="section-title">Being a doctor today is tough!</h2>
            <p>
              It’s easy to get frustrated and overwhelmed and to feel guilty for not having time for your patients. With
              an ever-increasing workload, trying to juggle the responsibilities of running a business & caring for
              patients is difficult.
            </p>
            <span className="begin-subtitle">
              Don&apos;t fret, we&apos;ve got your back! You will never have to worry again about consumer experience in
              your practice.
            </span>
            <Link to={routes.ORDER.ROOT} className="primary-btn primary-btn-blue">
              Get your TV Box Now
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
});

export default Begin;
