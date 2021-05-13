import React, { useMemo } from 'react';
import { observer } from 'mobx-react';
import { Link } from 'react-router-dom';
import cns from 'classnames';

import { Chart } from '@ui';
import routes from '@config/routes';

const Content = observer(({ ...props }) => {
  const chartData = useMemo(() => {
    let data = [
      {
        category: 'News',
        value: 30,
        full: 100,
      },
      {
        category: 'Drama',
        value: 40,
        full: 100,
      },
      {
        category: 'Sports',
        value: 30,
        full: 100,
      },
      {
        category: 'Reality',
        value: 20,
        full: 100,
      },
      {
        category: 'Sitcom',
        value: 15,
        full: 100,
      },
      {
        category: 'Buzz Fit',
        value: 100,
        full: 100,
      },
    ];

    return data;
  }, []);

  return (
    <section className="contentPage">
      <div className="contentPage-main">
        <div className="wrapper">
          <div className="contentPage-info">
            <h1 className="section-title">Buzz Fit engages more of your patients more of the time</h1>
            <p>
              Viewer preferences vary in a huge way and finding something that can entertain, engage and edcuate is a
              challenge.
            </p>
            <p>Ask yourself, is the content playing in my waiting relevant and engaging to all my patients?</p>
            <a href={routes.ORDER.ROOT} className="primary-btn">
              Get yours Now
            </a>
          </div>
          <div className="contentPage-images">
            <Chart type="content" data={chartData} />
            <p>Are you ready to cut the cord and plug in a relevant and engaging health content delievery network?</p>
          </div>
        </div>
      </div>
      <div className="contentPage-row">
        <div className="wrapper">
          <div className="contentPage-block contentPage-block__1">
            <div className="contentPage-descr">
              <div className="contentPage-ico">
                <img src="/img/contentPage/ico-1-min.png" alt="" />
              </div>
              <h2 className="section-title">Transformed</h2>
              <p>
                At the doctor&apos;s office, patients think about nothing but their own health. They are understandably
                anxious, and even routine appointments can be daunting.
              </p>
            </div>
            <div className="contentPage-bg contentPage-bg__1">
              <picture>
                <source srcSet="img/contentPage/img-1-min.png" media="(min-width: 767px)" />
                <img src="/img/contentPage/img-2-min.png" alt="" />
              </picture>
            </div>
          </div>
          <div className="contentPage-block contentPage-block__2">
            <div className="contentPage-descr">
              <div className="contentPage-ico">
                <img src="/img/contentPage/ico-2-min.png" alt="" />
              </div>
              <h2 className="section-title">Experience</h2>
              <p>
                isn&apos;t why we put so much emphasis on entertaining content. Yes, we want to educate your patients -
                but also to help them relax and feel comfortable. Positive patient experience is crucial for successful
                practices, and Buzz Fit helps create a light and enjoyable atmosphere.
              </p>
            </div>
            <div className="contentPage-bg contentPage-bg__2">
              <picture>
                <source srcSet="img/contentPage/img-3-min.png" media="(min-width: 767px)" />
                <img src="/img/contentPage/img-4-min.png" alt="" />
              </picture>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

export default Content;
