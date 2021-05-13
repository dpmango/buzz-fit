import React, { useCallback, useState } from 'react';
import cns from 'classnames';

import { Basis, Infograph, Graph } from '@components/Calculator';

const Calculator = ({ ...props }) => {
  const [tab, setTab] = useState('info');

  const handleTabChange = useCallback(
    (tab, _event) => {
      _event.preventDefault();
      setTab(tab);
    },
    [setTab]
  );

  return (
    <section className="calculator">
      <div className="calculator-main">
        <div className="wrapper">
          <div className="calculator-top">
            <ul className="calculator-list">
              <li>
                <a href="#" onClick={(e) => handleTabChange('info', e)} className={cns(tab === 'info' && 'active')}>
                  Infographic
                </a>
              </li>
              <li>
                <a href="#" onClick={(e) => handleTabChange('graph', e)} className={cns(tab === 'graph' && 'active')}>
                  Graph view
                </a>
              </li>
            </ul>
          </div>
          <div className="calculator-wrap">
            <div className="calculator-content">
              {tab === 'info' && <Infograph />}
              {tab === 'graph' && <Graph />}
            </div>
          </div>
        </div>
      </div>
      <Basis />
    </section>
  );
};

export default Calculator;
