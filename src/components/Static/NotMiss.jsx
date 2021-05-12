import React, { useMemo } from 'react';
import cns from 'classnames';

import SignupForm from '@components/Forms/Signup';

const NotMiss = ({ ...props }) => {
  const content = useMemo(() => {
    return {
      title: 'Never Miss a Moment',
      description:
        'To keep up with Buzz Fit as we expand across the country, improve our technology, and kickstart the healthcare revolution, just pop in your email.',
      image: 'img/notMiss/img-min.png',
    };
  });

  return (
    <section className="notMiss">
      <div className="wrapper">
        <div className="notMiss-wrap">
          <div className="notMiss-top">
            <div className="notMiss-info">
              <h2 className="section-title">{content.title}</h2>
              <p>{content.description}</p>
            </div>
            <div className="notMiss-img">
              <img src={content.image} alt="" />
            </div>
          </div>
          <div className="notMiss-form">
            <SignupForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default NotMiss;
