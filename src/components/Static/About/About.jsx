import React, { useMemo } from 'react';
import cns from 'classnames';

import content from './data';

const About = ({ ...props }) => {
  return (
    <section className="about">
      <div className="about-block about-main">
        <div className="wrapper">
          <div className="about-row">
            <div className="about-col about-col__1">
              <div className="about-img">
                <img src={content.main.image} alt="" />
              </div>
            </div>
            <div className="about-col about-col__2">
              <h1 className="section-title">{content.main.title}</h1>
            </div>
            <div className="about-col about-col__3">{content.main.text.left}</div>
            <div className="about-col about-col__4">
              <span className="about-subtitle">{content.main.text.right}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="about-block about-second">
        <div className="wrapper">
          <div className="about-row">
            <div className="about-col about-col__1">
              <h2 className="section-title">{content.second.title}</h2>
            </div>
            <div className="about-col about-col__2">
              <div className="about-img">
                <img src={content.second.image} alt="" />
              </div>
            </div>
            <div className="about-col about-col__3">{content.second.text.left}</div>
            <div className="about-col about-col__4">{content.second.text.right}</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
