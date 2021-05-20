import React, { useCallback, useContext, useEffect, useState } from 'react';
import { Link, useHistory, useParams } from 'react-router-dom';
import cns from 'classnames';

import { CalculatorStoreContext } from '@store/CalculatorStore';

import { Basis, Infograph, Graph } from '@components/Calculator';

const Calculator = ({ ...props }) => {
  const [tab, setTab] = useState('info');

  const calculatorContext = useContext(CalculatorStoreContext);
  const history = useHistory();
  const { id } = useParams();

  const handleTabChange = useCallback(
    (tab, _event) => {
      _event.preventDefault();
      setTab(tab);
    },
    [setTab]
  );

  useEffect(async () => {
    // gets report data when accesing /report with direct link
    if (!calculatorContext.isReportReady) {
      await calculatorContext
        .reportById({ id })
        .then((res) => {
          if (res.Status === 'error') {
            history.push('/404');
          }
        })
        .catch((err) => {
          history.push('/404');
        });
    }
  }, [id]);

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
