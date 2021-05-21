import React, { useState, useMemo } from 'react';
import { observer } from 'mobx-react';
import { Link } from 'react-router-dom';
import cns from 'classnames';

import { Tooltip, HashLinkScroll } from '@ui';
import routes from '@config/routes';

import content from './data';

const Pricing = observer(({ ...props }) => {
  const [tab, setTab] = useState(2);

  const mobileTabs = useMemo(() => {
    return (
      <ul>
        <li>
          <a className={cns(tab === 1 && 'active')} onClick={() => setTab(1)}>
            AT&t
          </a>
        </li>
        <li>
          <a className={cns(tab === 2 && 'active')} onClick={() => setTab(2)}>
            VERIZON
          </a>
        </li>
        <li>
          <a className={cns(tab === 3 && 'active')} onClick={() => setTab(3)}>
            DISH
          </a>
        </li>
      </ul>
    );
  }, [tab, setTab]);

  return (
    <section className="pricing" id="compare">
      <div className="wrapper">
        <div className="pricing-top">
          <span className="section-subtitle">{content.subtitle}</span>
          <h2 className="section-title">{content.title}</h2>
        </div>
        <div className="pricing-mob">
          <p>Compare us now</p>

          {mobileTabs}
        </div>
        <div className="pricing-table">
          {content.cols.map((col) => {
            const { id, rows } = col;

            return (
              <div className={cns('pricing-col', `pricing-col__${id}`, `active-tab-${tab}`)} key={id}>
                {rows &&
                  rows.map((row, idx) => (
                    <div className={cns('pricing-item', `pricing-item__${idx + 1}`)} key={idx}>
                      {row}
                    </div>
                  ))}
              </div>
            );
          })}
        </div>
        <div className="pricing-mob">
          <p>Compare us now</p>

          {mobileTabs}

          <HashLinkScroll to="/#calculate" className="pricing-mob__link">
            Calculate your potential savings
          </HashLinkScroll>
        </div>
        <div className="pricing-bottom">
          <Link to={routes.ORDER.ROOT} className="primary-btn primary-btn-purple">
            Get your TV Box Now
          </Link>
          <p>For only a one time refundable deposit of $199.00</p>
        </div>
      </div>
    </section>
  );
});

export default Pricing;
