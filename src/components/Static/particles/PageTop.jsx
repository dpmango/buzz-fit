/* eslint-disable react/prop-types */
import React, { useMemo } from 'react';
import cns from 'classnames';

const PageTop = ({ title, image }) => {
  return (
    <section className="terms">
      <div className="pageTop" style={{ backgroundImage: 'img/testimonials/bg.svg' }}>
        <div className="wrapper">
          <h1 className="page-title">{title}</h1>
        </div>
        <div className="pageTop-img">
          <img src={image} alt="" />
        </div>
      </div>
    </section>
  );
};

export default PageTop;
