import React, { useMemo } from 'react';
import { observer } from 'mobx-react';
import { Link } from 'react-router-dom';
import cns from 'classnames';

import routes from '@config/routes';

const Invoice = observer(({ ...props }) => {
  return (
    <section className="invoice">
      <div className="wrapper">
        <h1 className="invoice-title">Your Invoice</h1>
        <div className="invoice-wrap">
          <div className="invoice-top">
            <div className="invoice-logo">
              <img src="/img/logo-3.svg" alt="" />
            </div>
            <div className="invoice-links">
              <a href="#">+1 (347) 855-9825</a>
              <div>
                <a href="#">ian@buzz.fit</a>
                <a href="#">https://buzz.fit</a>
              </div>
            </div>
            <div className="invoice-descr">
              <span className="invoice-descr__subtitle">BUZZFIT SEZC</span>
              <p>
                128 Elgin Avenue, P.O. Box 31298 <br />
                Grand Cayman, KY1-1206, Cayman Islands
              </p>
            </div>
          </div>
          <div className="invoice-info">
            <div className="invoice-col">
              <span>Billed to</span>
              <p>ANDREI PROKOFEV 34-43 Crescent Street ASTORIA, NY, 11106</p>
            </div>
            <div className="invoice-col">
              <span>Invoice number</span>
              <b># 47989</b>
            </div>
            <div className="invoice-col">
              <span>Total amount</span>
              <b>$1,068.00 </b>
            </div>
          </div>
          <div className="invoice-content">
            <div className="invoice-table">
              <div className="invoice-table__row invoice-table__top">
                <div className="invoice-table__col invoice-table__col-1">Description</div>
                <div className="invoice-table__col invoice-table__col-2">Unit cost</div>
                <div className="invoice-table__col invoice-table__col-3">Quantity</div>
                <div className="invoice-table__col invoice-table__col-4">Amount</div>
              </div>
              <div className="invoice-table__row">
                <div className="invoice-table__col invoice-table__col-1">
                  <span>Description</span>1 X Buzz Fit Box Service
                </div>
                <div className="invoice-table__col invoice-table__col-2">
                  <span>Unit cost</span>
                  $1,068.00
                </div>
                <div className="invoice-table__col invoice-table__col-3">
                  <span>Quantity</span>1
                </div>
                <div className="invoice-table__col invoice-table__col-4">
                  <span>Amount</span>
                  $1,068.00
                </div>
              </div>
            </div>
          </div>
          <div className="invoice-bottom">
            <a href="/invoice.pdf" target="_blank" className="primary-btn">
              download invoice
            </a>
          </div>
        </div>
      </div>
    </section>
  );
});

export default Invoice;
