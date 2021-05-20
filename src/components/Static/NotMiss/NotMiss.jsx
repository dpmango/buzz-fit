import React, { useMemo } from 'react';
import cns from 'classnames';

import SignupForm from '@components/Forms/Signup';
import content from './data';

const NotMiss = ({ ...props }) => {
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
