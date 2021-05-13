import React, { useMemo } from 'react';
import { observer } from 'mobx-react';
import { Link } from 'react-router-dom';
import cns from 'classnames';

import routes from '@config/routes';

const Steps = observer(({ ...props }) => {
  return (
    <section className="steps steps-green">
      <div className="wrapper">
        <h2 className="section-title">Success Simplified!</h2>
        <div className="steps-row">
          <div className="steps-col">
            <div className="steps-wrap">
              <div className="steps-img">
                <div className="steps-img__wrap">
                  <img src="/img/steps/human-1-min.png" alt="" />
                </div>
              </div>
              <h3 className="steps-title">Subscribe</h3>
              <p>Subscribe - $199 refundable deposit</p>
              <Link to={routes.ORDER.ROOT} className="primary-btn">
                Get your TV Box Now
              </Link>
            </div>
          </div>
          <div className="steps-col">
            <div className="steps-wrap">
              <div className="steps-img">
                <div className="steps-img__wrap">
                  <img src="/img/steps/human-1-min.png" alt="" />
                </div>
              </div>
              <h3 className="steps-title">Receive</h3>
              <p>We’ll send your box within 7 business days</p>
              <Link to={routes.ORDER.ROOT} className="primary-btn">
                Get your TV Box Now
              </Link>
            </div>
          </div>
          <div className="steps-col">
            <div className="steps-wrap">
              <div className="steps-img">
                <div className="steps-img__wrap">
                  <img src="/img/steps/human-1-min.png" alt="" />
                </div>
              </div>
              <h3 className="steps-title">Enjoy</h3>
              <p>You will be up and runnning in 2mins, track your revenue and progress in the physican app.</p>
              <Link to={routes.ORDER.ROOT} className="primary-btn">
                Get your TV Box Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

export default Steps;
