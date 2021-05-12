import React, { useMemo } from 'react';
import { observer } from 'mobx-react';
import cns from 'classnames';

const Plug = observer(({ ...props }) => {
  return (
    <section className="plug">
      <div className="plug-bg">
        <img src="/img/device/circle-bg.svg" alt="" />
      </div>
      <div className="wrapper">
        <h2 className="plug-title">Plug & Play</h2>
        <div className="plug-row">
          <div className="plug-box">
            <img src="/img/device/box-min.png" alt="" />
          </div>
          <div className="plug-slider">
            <div className="plug-col plug-col__1">
              <div className="plug-wrap">
                <div className="plug-img">
                  <img src="/img/device/img-1-min.png" alt="" />
                </div>
                <span className="plug-subtitle">Educational & relevant</span>
                <p>Edcuated patients increase request for service</p>
              </div>
            </div>
            <div className="plug-col plug-col__2">
              <div className="plug-wrap">
                <div className="plug-img">
                  <img src="/img/device/img-3-min.png" alt="" />
                </div>
                <span className="plug-subtitle">Prepared patients</span>
                <p>Engaged patients come prepared</p>
              </div>
            </div>
            <div className="plug-col plug-col__3">
              <div className="plug-wrap">
                <div className="plug-img">
                  <img src="/img/device/img-2-min.png" alt="" />
                </div>
                <span className="plug-subtitle">Transformed experience</span>
                <p>Happy patients keep coming back</p>
              </div>
            </div>
            <div className="plug-col plug-col__4">
              <div className="plug-wrap">
                <div className="plug-img">
                  <img src="/img/device/img-4-min.png" alt="" />
                </div>
                <span className="plug-subtitle">Passive income</span>
                <p>Increase your practices income</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

export default Plug;
