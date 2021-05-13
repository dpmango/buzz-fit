import React, { useMemo } from 'react';
import { observer } from 'mobx-react';
import { Link } from 'react-router-dom';
import cns from 'classnames';

import routes from '@config/routes';

const Result = observer(({ ...props }) => {
  return (
    <section className="result" id="cost">
      <div className="wrapper">
        <div className="result-top">
          <span className="section-subtitle">Result</span>
          <h2 className="section-title">The cost of getting it wrong</h2>
          <p>
            You invest serious time and money getting your healthcare consumers in the door. Every interaction with
            customers in your practice is an opportunity to up-sell*.
          </p>
        </div>
        <div className="result-img">
          <img src="/img/result/wallet.png" alt="" />
        </div>
        <div className="result-bar">
          <span className="result-bar__num result-bar__num-1">0%</span>
          <span className="result-bar__num result-bar__num-2">50%</span>
          <span className="result-bar__num result-bar__num-3">100%</span>
          <span className="result-bar__num result-bar__num-4">150%</span>
          <span className="result-bar__num result-bar__num-5">200%</span>
          <div className="result-bar__row">
            <div className="result-bar__item result-bar__item-1">Increase in gross sales</div>
            <div className="result-bar__item result-bar__item-2">22%</div>
          </div>
          <div className="result-bar__row">
            <div className="result-bar__item result-bar__item-1">Revenue upsell generated</div>
            <div className="result-bar__item result-bar__item-2">Up to 51%</div>
          </div>
          <div className="result-bar__row">
            <div className="result-bar__item result-bar__item-1">Increase in consultation revenue</div>
            <div className="result-bar__item result-bar__item-2">Up to 85%</div>
          </div>
          <div className="result-bar__bottom">
            <span>Before Buzz Fit</span>
            <span>After Buzz Fit</span>
          </div>
        </div>
        <div className="result-wrap">
          <h3 className="result-title">What’s stopping you?</h3>
          <p>Buzz Fit is a risk free money back guarantee service, sign up today!</p>
          <Link to={routes.ORDER.ROOT} className="primary-btn primary-btn-yellow">
            Get your TV Box Now
          </Link>
        </div>
        <div className="result-bottom">
          *Access the supporting research by <Link to="/#calculate"> calculating your savings now</Link>
          <i className="hb-ico play-ico-yellow" />
        </div>
      </div>
    </section>
  );
});

export default Result;
