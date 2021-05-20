import React, { useMemo } from 'react';
import { observer } from 'mobx-react';
import { Link } from 'react-router-dom';
import cns from 'classnames';

import { HashLinkScroll } from '@ui';
import routes from '@config/routes';

const Info = observer(({ ...props }) => {
  return (
    <section className="info">
      <div className="info-block info-1">
        <div className="wrapper">
          <div className="info-top">
            <h2 className="section-title">Waiting Time is Wasted Time</h2>
            <img src="/img/info/img-1-min.png" alt="" />
          </div>
          <div className="info-row">
            <div className="info-col">
              <p>
                Frustrated patients often don&apos;t complain, they just leave and in many cases take your reputation
                with them.
              </p>
              <p>
                The risk of not engaging patients in the waiting area can be detrimental to the success of a practice.
              </p>
              <p>An unengaged wait can result in:</p>
            </div>
            <div className="info-col">
              <ul>
                <li>
                  <span>Brand reputation damage</span>
                </li>
                <li>
                  <span>Declining Revenues</span>
                </li>
                <li>
                  <span>Loss of Patients</span>
                </li>
                <li>
                  <span>Undermining of your Authority</span>
                </li>
                <li>
                  <span>Patient Frustration</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="info-block info-2">
        <div className="wrapper">
          <div className="info-top">
            <h2 className="section-title">Let&apos;s change that.</h2>
            <img src="/img/info/img-2-min.png" alt="" />
          </div>
          <div className="info-row">
            <div className="info-col">
              <p>
                Imagine—a service that results in fewer frustrations, more focus in consultation, and better outcomes
                with your patients while generating passive income for you.
              </p>
            </div>
            <div className="info-col">
              <p>
                Buzz Fit streaming service reliably delivers relevant and impactful video to your waiting patients in
                the highest quality with access video experience insights
              </p>
            </div>
          </div>
          <div className="info-button">
            <Link to="/order" className="primary-btn primary-btn-yellow">
              Get your TV Box Now
            </Link>
          </div>
        </div>
      </div>
      <div className="info-block info-3">
        <div className="wrapper">
          <div className="info-row">
            <div className="info-col">
              <img src="/img/info/img-3-min.png" alt="" />
            </div>
            <div className="info-col">
              <h2 className="section-title">Increase Patients Satisfaction</h2>
              <div className="info-text">
                <p>People frustrated with wait times speak poorly about you and your business.</p>
                <p>
                  Transform frustrating wait times into entertaining and educational experiences that improve your
                  brand.
                </p>
              </div>
              <div className="info-button">
                <Link to="/order" className="primary-btn primary-btn-peach">
                  Get your TV Box Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="info-block info-4">
        <div className="wrapper">
          <div className="info-row">
            <div className="info-col">
              <h2 className="section-title">Patient Retention</h2>
              <div className="info-text">
                <p>Your biggest loss of revenue is patient churn, costing you 30% of your patient roster annually.</p>
                <p>
                  92% of this loss is a result of protracted wait times. Buzz Fit reduces perceived waiting times by
                  half.
                </p>
              </div>
              <div className="info-button">
                <Link to="/order" className="primary-btn primary-btn-yellow">
                  Get your TV Box Now
                </Link>
              </div>
            </div>
            <div className="info-col info-col__img">
              <img src="/img/info/img-4-min.png" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="info-block info-5">
        <div className="wrapper">
          <div className="info-row">
            <div className="info-col info-col__1">
              <img src="/img/info/img-5-min.png" alt="" />
            </div>
            <div className="info-col info-col__2">
              <h2 className="section-title">Request for Service</h2>
              <div className="info-text">
                <p>
                  Our content is designed to entertain and address the most frequently asked questions, increase
                  requests for service driving the profitability and efficiency of your business.
                </p>
              </div>
              <div className="info-buttons">
                <Link to="/order" className="primary-btn primary-btn-purple">
                  Get your TV Box Now
                </Link>
                <HashLinkScroll to="#cost" className="info-link">
                  <i className="hb-ico play-ico" />
                  Cost of getting it wrong
                </HashLinkScroll>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="info-block info-6">
        <div className="info-bg info-bg__1">
          <img src="/img/info/img-6-1-min.png" alt="" />
        </div>
        <div className="info-bg info-bg__2">
          <img src="/img/info/img-6-2-min.png" alt="" />
        </div>
        <div className="wrapper">
          <div className="info-row">
            <div className="info-col">
              <h2 className="section-title">Save up to $1000 per year by cutting your cable</h2>
              <div className="info-text">
                <p>
                  99% of practices are paying for cable TV that does not entertain and engage the majority of their
                  patients.
                </p>
                <p>Turn your cost to profit. View our cable cost comparison</p>
              </div>
              <div className="info-buttons">
                <Link to="/order" className="primary-btn primary-btn-yellow">
                  Get your TV Box Now
                </Link>
                <HashLinkScroll smooth to="#compare" className="info-link">
                  <i className="hb-ico play-ico-yellow" />
                  See how we compare
                </HashLinkScroll>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

export default Info;
