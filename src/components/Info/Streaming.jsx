import React, { useMemo } from 'react';
import { observer } from 'mobx-react';
import cns from 'classnames';

const Streaming = observer(({ ...props }) => {
  return (
    <section className="streaming">
      <div className="streaming-main">
        <div className="wrapper">
          <div className="streaming-top">
            <div className="streaming-icon">
              <img src="/img/device/ico-5-min.png" alt="" />
            </div>
            <h2 className="section-title">Streaming Buzz Fit TV</h2>
            <p>Check how Buzz Fit will perform with your current connection speed</p>
          </div>
          <div className="streaming-mob">
            <span className="streaming-sub">5 Mbps</span>
            <span className="streaming-ico"></span>
            <p>Minimum speed requirement</p>
          </div>
          <div className="streaming-row">
            <div className="streaming-col">
              <span className="streaming-sub">5 Mbps</span>
              <span className="streaming-ico"></span>
              <p>Minimum speed requirement</p>
            </div>
            <div className="streaming-col">
              <span className="streaming-sub">10 Mbps</span>
              <span className="streaming-ico"></span>
              <p>Recommended minimum speed</p>
            </div>
            <div className="streaming-col">
              <span className="streaming-sub">15 Mbps</span>
              <span className="streaming-ico"></span>
              <p>Recommended speed for SD (standard definition)</p>
            </div>
            <div className="streaming-col">
              <span className="streaming-sub">20 Mbps</span>
              <span className="streaming-ico"></span>
              <p>Recommended speed for HD (high definition)</p>
            </div>
            <div className="streaming-col">
              <span className="streaming-sub">25 Mbps</span>
              <span className="streaming-ico"></span>
              <p>Recommended speed for UHD (ultra high definition)</p>
            </div>
          </div>
        </div>
      </div>
      <div className="streaming-bottom">
        <img src="/img/device/img-6-min.png" alt="" className="streaming-img__2" />
        <div className="wrapper">
          <img src="/img/device/img-5-min.png" alt="" className="streaming-img__1" />
        </div>
      </div>
    </section>
  );
});

export default Streaming;
