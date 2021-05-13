import React, { useMemo } from 'react';
import cns from 'classnames';

const About = ({ ...props }) => {
  const content = useMemo(() => {
    return {
      main: {
        image: 'img/about/img-1-min.png',
        title: 'Our Mission is your Mission. A Brightfuture for the Health Education and Wellbeing of All!',
        text: {
          left: (
            <>
              <p>
                Our mission at Buzz Fit is to help the American people understand and appreciate their health.
                Specifically, we motivate individuals to better manage their health, implement meaningful lifestyle
                changes, and build their knowledge of common health risks and treatments.
              </p>
            </>
          ),
          right: `Ten years ago, 8/10 Americans were considered health illiterate. Today, it's 9/10. The United States is
          suffering an unsustainable decline in healthcare understanding, and something needs to change.`,
        },
      },
      second: {
        image: 'img/about/img-2-min.png',
        title: 'While educating 300 million people isn&apos;t easy, we have a solution.',
        text: {
          left: (
            <>
              <p>
                What sets us apart is that our health content isn&apos;t just accurate and educational - it&apos;s also
                thoroughly entertaining. Since patients enjoy watching our content, they take the information onboard
                and digest it.
              </p>
              <p>To put it more simply, they build their health literacy. And isn&apos;t what Buzz Fit is all about.</p>
            </>
          ),
          right: (
            <>
              <p>
                This has a knock-on effect. Patients start to consider their health on a broader scale. They will ask
                more incisive questions, be more diligent with their medication, and investigate the treatments and
                procedures offered by their practice.
              </p>
            </>
          ),
        },
      },
    };
  }, []);

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
